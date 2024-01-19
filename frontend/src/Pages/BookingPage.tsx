import Form from "react-bootstrap/Form";

import { ButtonGroup, Col, Row, ToggleButton } from "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];

  return (
    <>
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br />

      <div>
        <h1>Welcome To The Booking Page!</h1>
        <p>This page will allow you to place a booking within our cafe!</p>
        <p>
          We Have a variety of different booking options. These include: Baking
          Lessons, Bakery Takeaway, Book A Space At The Restraunt
        </p>

        <Row>
          <Col className="">
            <Form.Control type="date" size="sm" placeholder="Small input" />
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </>
  );
};

export default App;
