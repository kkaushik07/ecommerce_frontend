import React from 'react';
import { Form } from 'react-bootstrap'

const Forminput = (props) => {
    return (
        <div>

                <Form>
                    <Form.Group >
                        <Form.Label>{props.label}</Form.Label>
                        <Form.Control type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
                    </Form.Group>
                </Form>
        </div>
    )
}

export default Forminput