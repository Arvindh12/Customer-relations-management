import React,{useState} from 'react'
import { Button, Container, Col, Row } from "react-bootstrap";
import ServiceList from './ServiceList'
import AddServiceForm from './AddServiceForm'

function Service() {
    const [show, setShow] = useState("none")
    return (
        <div>
        <Container fluid>
        <Row>
          <Col>
            <h2 className="float-left">Service</h2>
            <Button className="float-right"onClick={() => {if(show === "none") setShow("flex"); else setShow("none"); }} >{show === "none" ? "New Service request" : "Close"  }</Button>
          </Col>
        </Row>
        <Row style={{display : show }}>
          <Col>
            <AddServiceForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <ServiceList />
          </Col>
        </Row>
      </Container>
        </div>
    )
}

export default Service
