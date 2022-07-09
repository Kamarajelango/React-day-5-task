import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom';


function CreateStudent(props) {
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [mobile,setMobile]=useState("");
  let [batch,setBatch]=useState("");

  let navigate=useNavigate();

  function handleSubmit(){
    let data={
      name,
      email,
      mobile,
      batch
    } 

    let student=[...props.data.student];
    student.push(data);
    props.data.setStudent(student);

    navigate('/dasboard')
  }
  return <>
  <div className='row container-fluid'>
    <div className='col'></div>
    <div className='col  mt-5 sm-7 md-4 xl-6'>
    <Form >
       <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{
          setName(e.target.value);
        }} />       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>{
          setEmail(e.target.value)
        }}/>       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile Number" onChange={(e)=>{
          setMobile(e.target.value)
        }} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>{
          setBatch(e.target.value)
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="info" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
    <div className='col'></div>
    </div>
  </>
}

export default CreateStudent