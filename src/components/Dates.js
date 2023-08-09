
import { Col, Row } from "react-bootstrap";

function Dates({ person }) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between"
      ><div style={{ color: "black" }}>لديك {person.length} مواعيد اليوم </div>
      </Col>
    </Row>

  );
}

export default Dates;
