import { Container, Row, Col } from 'react-bootstrap';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} className="card p-5">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
