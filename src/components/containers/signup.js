import React, { useState } from 'react';
import { Button, Row, Col, Container, Form } from 'react-bootstrap'
import { connect } from 'react-redux';

import Forminput from '../layouts/forms';
import Layout from '../layouts/layout';
import {signUp} from '../../actions'

const SignUp = (props) => {

    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userDetail = {firstName,lastName,email,password}
    
    const onSubmit =(e)=>{
        e.preventDefault()
        props.signUp(userDetail)
    }

    return (
        <div>
            <Layout/>
                <Container >
                    <Form onSubmit={onSubmit} >
                        <Row style={{ marginTop: '20px' }}>
                            <Col md={{ span: 6, offset: 3 }}>
                                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}> Sign Up </h1>
                                <Row >
                                    <Col md={6}>
                                        <Forminput
                                            label='First Name'
                                            type='text'
                                            placeholder='First Name'
                                            onChange={(e) =>setFirstName(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Forminput
                                            label='Last Name'
                                            type='text'
                                            placeholder='Last Name'
                                            value=''
                                            onChange={(e) => {setLastName(e.target.value) }}
                                        />
                                    </Col>
                                </Row>
                                <Forminput
                                    label='Email'
                                    type='email'
                                    placeholder='Email'
                                    value=''
                                    onChange={(e) => {setEmail(e.target.value) }}
                                />
                                <Forminput
                                    label='Password'
                                    type='password'
                                    placeholder='Password'
                                    value=''
                                    onChange={(e) => {setPassword(e.target.value) }}
                                />
                                <Button variant="primary" type="submit">
                                    SignUp</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            
        </div>
    )

}



export default connect(null,{signUp})(SignUp)