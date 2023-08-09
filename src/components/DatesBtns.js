import React from 'react'
import { Col, Row } from 'react-bootstrap';


const DatesBtns = ({handleDelete, handleShow}) => {
  return (
    
      <Row className="justify-content-center">
          <Col sm="8" className="d-flex justify-content-between my-2">
            <button className="custom-btn" onClick={handleDelete}>مسح الكل</button>
            <button className="custom-btn" onClick={handleShow}>عرض الكل</button>
          </Col>
        </Row>
    
  )
}

export default DatesBtns
