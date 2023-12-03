import { Container } from "react-bootstrap";
import Meta from "../../components/Meta";

export default function Privacy() {
  return (
    <>
      <Meta
        title="ACME Privacy Policy"
        description="ACME Privacy Policy."
        keywords="Privacy, cookies, policy"
      />

      <Container style={{ marginTop: "10rem" }}>
        <h1>Terms of service</h1>
      </Container>
    </>
  );
}
