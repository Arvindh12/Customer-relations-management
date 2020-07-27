import React ,{useEffect, useState} from "react";
import { connect } from "react-redux";
import { Card, Container, Row, Col ,Button } from "react-bootstrap";
import {Alert , AlertTitle} from '@material-ui/lab'
import {useHistory} from 'react-router-dom'

const Dashboard = ({ currentUser }) => {
    let history = useHistory()

    useEffect(()=>{
        fetch("http://localhost:4040/dashboard", {
            method : "GET",
            headers : {
               "auth" : localStorage.getItem('crmApplication')
            }
        }).then(res => res.json()).then((data) =>{ 
            console.log(data)
            setstate(data)
    })} , [] )

    const [state, setstate] = useState({service : "" , leads : "" , contacts : "" })

  return (
    <Container fluid>
        <Row className="mb-4"> 
            <Col>
            {currentUser.permission === "edit"? 
            <Alert severity="success" ><AlertTitle>Access</AlertTitle>Hello {currentUser.name} you can view, add and edit Service request, Leads and Contacts.</Alert>:
             currentUser.permission === "view" ? 
             <Alert severity="warning"><AlertTitle>Access</AlertTitle>Hello {currentUser.name} you can only view Service request, Leads and Contacts.</Alert> 
             :<Alert severity="warning"><AlertTitle>Access</AlertTitle>Hello {currentUser.name} you do not have access to view, add and edit Service request, Leads and Contacts.</Alert> }
            
            </Col>
        </Row>
      <Row>
        <Col md={4}>
          <Card border="primary" >
            <Card.Header>Service Request</Card.Header>
            <Card.Body>
             <Card.Title>Total Service Request {state.service.length}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" className="text-center" onClick={() =>  {history.push('/service')}} >View more</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card border="primary" >
            <Card.Header>Leads</Card.Header>
            <Card.Body>
              <Card.Title>Total Leads {state.leads.length} </Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" className="text-center" onClick={() =>  {history.push('/leads')}} >View more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card border="primary" >
            <Card.Header>Contacts</Card.Header>
            <Card.Body>
              <Card.Title>Total Contacts {state.contacts.length} </Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" className="text-center" onClick={() =>  {history.push('/contacts')}} >View more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
    }


const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser
});

export default connect(mapStateToProps)(Dashboard);
