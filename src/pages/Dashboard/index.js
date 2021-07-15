import React from "react";
import { Row, Col, Card} from "react-bootstrap";
import PieBasicChart from "../Charts/PieBasicChart";
import PieDonutChart from "../Charts/PieDonutChart";
import BarDiscreteChart from "../Charts/BarDiscreteChart";
import LineChart from "../Charts/LineChart";
import MultiBarChart from "../Charts/MultiBarChart";

class Dashboard extends React.Component {
  render() {
    return (
        <Row>
          <Col md={6} xl={6}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">Daily Sales</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                      $249.95
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">50%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={6}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">Monthly Sales</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-down text-c-red f-30 m-r-5" />{" "}
                      $2.942.32
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">36%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme2"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow="35"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Employees Utilisation</Card.Title>
              </Card.Header>
              <Card.Body>
                <PieBasicChart />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Timesheets approved</Card.Title>
              </Card.Header>
              <Card.Body>
                <BarDiscreteChart />
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">
                  Worker and Asset Utilisation trend
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <LineChart />
              </Card.Body>
            </Card>
          </Col>
         
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Number of Forms Submitted</Card.Title>
              </Card.Header>
              <Card.Body>
                <MultiBarChart />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={6}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">
                  Sales Distribution Report - (By Projects)
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <PieDonutChart />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={6}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">
                  Expense Distribution Report - (By Projects)
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <PieDonutChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
    );
  }
}

export default Dashboard;
