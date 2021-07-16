import React, { useState } from "react";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-bootstrap4";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  ButtonGroup,
} from "react-bootstrap";

import {
  generateRows,
  defaultColumnValues,
  globalSalesValues,
} from "../../demo-data/generator";

const getRowId = (row) => row.id;

export default () => {
  const history = useHistory();

  const goToAddNewTask = () => {
    history.push("/task/add-new");
  };
  const [columns] = useState([
    { name: "taskNames", title: "Task Name" },
    { name: "name", title: "Modified By" },
    { name: "saleDate", title: "Modified Time" },
    { name: "regoNum", title: "Account code" },
  ]);
  const [rows, setRows] = useState(
    generateRows({
      columnValues: {
        id: ({ index }) => index,
        ...defaultColumnValues,
        ...globalSalesValues,
      },
      length: 8,
    })
  );

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return (
    <>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Tasks</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Advanced Search"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="secondary">Search</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <ButtonGroup>
                    <Button variant="primary" onClick={goToAddNewTask}>
                      Add New Task
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="card">
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <EditingState onCommitChanges={commitChanges} />
          <Table />
          <TableHeaderRow />
          <TableEditRow />
          <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        </Grid>
      </div>
    </>
  );
};
