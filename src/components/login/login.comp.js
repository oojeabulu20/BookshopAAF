import React from 'react';
import PropTypes from "prop-types"

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Login = ({ handleSubmit, handleOnChange, email, pass, formSwitch }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-white text-center'>User Login</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="Enter Email"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={pass}
                                onChange={handleOnChange}
                                placeholder="password"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#" onClick={() => formSwitch("reset")}>Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    )
};

Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    formSwitch: PropTypes.func.isRequired,
    pass: PropTypes.string.isRequired
};