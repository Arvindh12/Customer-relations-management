import React , {useState} from 'react'
import {Button, Container, Col, Row} from 'react-bootstrap'
import AddContactsForm from './AddContactsForm'
import ContatsList from './ContatsList'


function Contacts() {

    const [show, setShow] = useState(false)
    return (
        <div>
            
        <Container fluid> 
            <Row> 
                <Col>
                    <h2 className="float-left">Contacts</h2>
                    <Button className="float-right" >New Contact</Button> 
                </Col>
            </Row>
            <Row> 
                <Col>
                <AddContactsForm show={show} />
                </Col>
            </Row>
            <Row> 
                <Col>
                <ContatsList />
                </Col>
            </Row>
            
            </Container>
        </div>
    )
}

export default Contacts
