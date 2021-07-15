import React, { useState } from "react";
import { DataTypeProvider, EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-bootstrap4";
import {
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  ButtonGroup,
} from "react-bootstrap";
import { generateRows, globalSalesValues } from "../../demo-data/generator";
import { useHistory } from "react-router-dom";
const getRowId = (row) => row.id;

const BooleanFormatter = ({ value }) => (
  <span className="badge badge-secondary">{value ? "Yes" : "No"}</span>
);

const BooleanEditor = ({ value, onValueChange }) => (
  <select
    className="form-control"
    value={value}
    onChange={(e) => onValueChange(e.target.value === "true")}
  >
    <option value={false}>No</option>
    <option value>Yes</option>
  </select>
);

const BooleanTypeProvider = (props) => (
  <DataTypeProvider
    formatterComponent={BooleanFormatter}
    editorComponent={BooleanEditor}
    {...props}
  />
);

export default () => {
  const history = useHistory();

  const goToCreateEquipement = () => {
    history.push("/equipement-tasks/equipement/add-new");
  };

  const [columns] = useState([
    { name: "asset", title: "Asset" },
    { name: "year", title: "Year" },
    { name: "units", title: "Units" },
    { name: "regoNum", title: "Rego" },
    { name: "shipped", title: "Ready to Use" },
  ]);
  const [rows, setRows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...globalSalesValues },
      length: 25,
    })
  );
  const [booleanColumns] = useState(["shipped"]);

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
              <Card.Title as="h5">Equipements</Card.Title>
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
                    <Button variant="primary" onClick={goToCreateEquipement}>
                      Add New Equipement
                    </Button>
                    <Button variant="secondary">Export to CSV</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="card">
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <BooleanTypeProvider for={booleanColumns} />
          <EditingState
            onCommitChanges={commitChanges}
            defaultEditingRowIds={[0]}
          />
          <Table />
          <TableHeaderRow />
          <TableEditRow />
          <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        </Grid>
      </div>
    </>
  );
};
