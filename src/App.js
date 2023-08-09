import { Container } from "react-bootstrap";
import { person } from "./data";
import "./App.css";
import {  useState } from "react";
import Dates from "./components/Dates";
import DatesCard from "./components/DatesCard";
import DatesBtns from "./components/DatesBtns";

function App() {
  const [data, setData] = useState(person);
  const handleDelete = () => {
    setData([]);
  };
  const handleShow = () => {
    setData(person);
    
  };
  return (
    <div className="App">
      <Container className="py-3">
        
        <Dates person={data} />
        <DatesCard person={data} />
        <DatesBtns handleDelete={handleDelete} handleShow={handleShow} />
      </Container>
    </div>
  );
}

export default App;
