import React , {useState} from 'react'
import {Form , Row , Col, Button } from 'react-bootstrap'
import {Alert } from '@material-ui/lab'

function AddServiceForm() {

  const handleOnSubmit = async (event) => {
    setLoading(true)
    event.preventDefault()
    var service = await fetch("http://localhost:4040/service",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth" : localStorage.getItem('crmApplication')
      },
      body : JSON.stringify(data)
    }).then((res) => res.json())
    if(service.message === "success"){
      console.log(service.message)
      setLoading(false)
      setData({...data , email : '' , description : ""} )
      setAlert({display : true , message : "service created successfully"  , severity : "success" })
    }
    else{
      console.log(service.message)
      setLoading(false)
      setAlert({display : true , message : service.message , severity : "error" })
    }

  }

  const handleOnChange = (event) => {
    const prop = event.target.name;
    const value = event.target.value;
    var temp = JSON.parse(JSON.stringify(data))
    temp[prop] = value;
    setData(temp)
  }
  const [data, setData] = useState({email : '' , description : "" , status : "created" })
  const [loading , setLoading ] = useState(false)
  const [alert , setAlert ] = useState({display : false , message : ""  , severity : "error" })

    return (
      <>
      { alert.display ?  <Alert severity={alert.severity} onClose={() => { setAlert( {display : false} ) }} >{alert.message}</Alert> : <></> }
        <Form onSubmit={handleOnSubmit}>
        <Form.Row>
      <Form.Group as={Col} md="3" >
      <Form.Label>Email Contacts </Form.Label>
          <Form.Control placeholder="Contact email" type="email" onChange={handleOnChange} value={data.email} name="email" />
    </Form.Group>
    <Form.Group as={Col} md="3" >
    <Form.Label>Service request </Form.Label>
          <Form.Control placeholder="Service request description" type="text" onChange={handleOnChange} value={data.description} name="description" />
          
    </Form.Group>
        <Form.Group as={Col}  >
          <Form.Label  htmlFor="inlineFormCustomSelect">Status</Form.Label>
          <Form.Control as="select" id="inlineFormCustomSelect" onChange={handleOnChange} value={data.status} name="status"  >
            <option value="created">Created</option>
          </Form.Control>
          </Form.Group>
    
          <Form.Group as={Col} md="3" className="pt-4" >
 
          <Button type="submit" disabled={loading}>{loading ? "Please Wait" : "Submit"}</Button>
        </Form.Group>
        </Form.Row>
    </Form>
    </>
    )
}

export default AddServiceForm
