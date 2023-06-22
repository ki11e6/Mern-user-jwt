import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div>
      <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
          {/* email form */}
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onAbort={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {/* password form */}
          <Form.Group className="my-2" controlId="email">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onAbort={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" className="mt-3">
            Sign In
          </Button>
          <Row className="py-3">
            <Col>
              New Customer? <Link to={`/register`}>Register</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </div>
  );
};

export default LoginScreen;
