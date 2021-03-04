import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4} from "uuid";

function Login({ onIdSubmit }) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }
    return (
        <Container class="align-items-center d-flex" style={{height: '100vh'}}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button variant="secondary" onClick={createNewId}>Create a New Id</Button>
            </Form>
        </Container>
    )
}

export default Login;