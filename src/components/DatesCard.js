import React from "react";
import { Col, Row } from "react-bootstrap";
const DatesCard = ({ person }) => {
  return (
    <div>
      <Row className="justify-content-center ">
        <Col sm="8">
          <div className="dates-card p-4 ">
            {person.length ? (
              person.map((person) => {
                return (
                  <div  key={person.id}>
                    <div
                      className="date-card  d-flex align-items-center py-4 my-4"
                     
                    >
                      <img
                        src={person.img}
                        className="user-img"
                        height={60}
                        width={60}
                        alt="user"
                      />
                      <div className="px-2">
                        {/* d-inline 
                        علشان يخلي واحده منهم مش بلوك وبالتالي حجمهم يصغر شويه */}
                        <p className="d-inline fs-4">{person.name} </p>
                        <p className="fs-5"> {person.date} </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })
            ) : (
              <p>لا يوجد مواعيد اليوم </p>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DatesCard;
