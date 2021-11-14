import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container">
      <Card className="text-center mt-5 shadow">
        <Card.Body>
          <Card.Title>Welcome to DeepDive Contact Manager App</Card.Title>
          <Card.Text>
            You can add, edit and remove contact from here
          </Card.Text>
          <Link to="/list" className="btn btn-primary">Start Now</Link>
        </Card.Body>
        <Card.Footer className="text-muted">Copyright © DeepDive Education</Card.Footer>
      </Card>
    </div>
  );
};

export default Home
