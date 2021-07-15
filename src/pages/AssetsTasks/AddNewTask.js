import React, { useEffect} from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Basic from "./Basic";

import "./Form.scss";

function AddNewTask() {
  

  useEffect(() => {
    return () => {};
  }, []);

  return (

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Add an task</Card.Title>
            </Card.Header>
            <Card.Body>
              <h5>General Info</h5>
              <hr />
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formBasicId">
                      <Form.Label>Task Number</Form.Label>
                      <Form.Control
                        type="id"
                        placeholder="Enter Task Id"
                        defaultValue=""
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formBasicMinutesTime">
                      <Form.Label>Task Name </Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Enter Task name"
                        defaultValue=""
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label> Description</Form.Label>
                      <Form.Control as="textarea" rows="5" />
                    </Form.Group>
                  </Col>{" "}
                </Row>

                <br />
                <h5>Forms </h5>
                <hr />
                <Row>
                  <Col md={12}>
                    <Basic />
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formBasicMake">
                      <Form.Label>Name of Form </Form.Label>
                      <Form.Control
                        type="id"
                        placeholder="Enter name of Form "
                        defaultValue=""
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    {" "}
                    <hr />
                    <br />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Button variant="primary">Add Task</Button>
                  </Col>
                </Row>
              </Form>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
  
  );
}

export default AddNewTask;
