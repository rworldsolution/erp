import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SearchGlobal() {
    return (
        <div>
            <Form className="d-flex" style={{ maxWidth: "300px" }}>
                <Form.Control type="search" placeholder="Search..." className="me-2" />
            </Form>
        </div>
    )
}
