import React from "react";
import { Container } from "react-bootstrap";

export default function contact() {
  return (
    <Container>
      <h1 style={{ marginTop: "5rem" }}>Contact</h1>
      <ul>
        <li>Email: info@acme.com</li>
        <li>
          Address:
          <div>ACME ...</div>
        </li>
      </ul>
    </Container>
  );
}
