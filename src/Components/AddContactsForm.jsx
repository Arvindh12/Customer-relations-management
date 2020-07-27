import React , {useState} from 'react'
import {Form , Col, Button } from 'react-bootstrap'

function AddContactsForm() {
    
  const handleOnSubmit = async (event) => {
    event.preventDefault()
    var contact = await fetch("http://localhost:4040/contact",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth" : localStorage.getItem('crmApplication')
      },
      body : JSON.stringify(data)
    }).then((res) => res.json())
    if(contact.message === "success"){
      console.log(contact.message)
    }
    else{
      console.log(contact.message)
    }

  }

  const handleOnChange = (event) => {
    const prop = event.target.name;
    const value = event.target.value;
    var temp = JSON.parse(JSON.stringify(data))
    temp[prop] = value;
    setData(temp)
  }

  const [data, setData] = useState({email : '' , name : "" , company : "" })
  const [loading , setLoading ] = useState(false)
  const [alert , setAlert ] = useState({display : "none" , message : "" })

    return (
<Form onSubmit={handleOnSubmit} >
  <Form.Row>
    <Col md={3}>
      <Form.Control placeholder="Name" type="text" onChange={handleOnChange} name="name" value={data.name} />
    </Col>
    <Col md={3}>
      <Form.Control placeholder="email" type="email" onChange={handleOnChange} name="email" value={data.email} />
    </Col>
    <Col md={3}>
      <Form.Control placeholder="company" type="text" onChange={handleOnChange} name="company" value={data.company} />
    </Col>
    <Col md={3}>
      <Button type="submit" >Submit</Button>
    </Col>
  </Form.Row>
</Form>
    )
}

export default AddContactsForm
