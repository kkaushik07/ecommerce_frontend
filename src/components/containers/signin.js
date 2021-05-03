import React,{useState} from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';


import Forminput from '../layouts/forms';
import Layout from '../layouts/layout';
import { signIn } from "../../actions";

const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userDetail = {email,password}

    const onSubmit = (e) => {
        e.preventDefault()
        props.signIn(userDetail)
    }

    return (
        <div>
            <Layout/>
                <Container>
                    <Form onSubmit={onSubmit}>
                        <Row style={{ marginTop: '20px' }}>
                            <Col md={{ span: 6, offset: 3 }}>
                                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h1>
                                <Forminput
                                    label='Email'
                                    type='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Forminput
                                    label='Password'
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button variant="primary" type="submit">SignUp</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            

        </div>
    )

}

export default connect(null,{signIn})(SignIn)