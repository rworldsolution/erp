import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SearchGlobal() {
    return (
        <div className='col-sm-4'>
            <Form className="d-flex"    >
                <Form.Control type="search" placeholder="Search here..." className="me-2" />
            </Form>
        </div>
    )
}
