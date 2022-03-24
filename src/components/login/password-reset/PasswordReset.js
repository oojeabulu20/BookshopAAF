import React from 'react';
import PropTypes from "prop-types"

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ResetPassword = ({ handleResetSubmit, handleOnChange, email, formSwitch }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-white text-center'>Password Reset</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleResetSubmit}>
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
                        <Button type="submit">Reset Password</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#" onClick={() => formSwitch("login")}>back to sign in</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleResetSubmit: PropTypes.func.isRequired,
    formSwitch: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};