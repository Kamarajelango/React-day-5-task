import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {useNavigate,useParams} from 'react-router-dom';

function EditStudent(props) {
  let params=useParams();

  let [name,setName]=useState(props.data.student[params.id].name);
  let [email,setEmail]=useState(props.data.student[params.id].email);
  let [mobile,setMobile]=useState(props.data.student[params.id].mobile);
  let [batch,setBatch]=useState(props.data.student[params.id].batch);
  

  
  let navigate=useNavigate();

  function handleSubmit(){
    let data={
      name,
      email,
      mobile,
      batch
    } 

    let student=[...props.data.student];
    student.splice(params.id,1,data);
    props.data.setStudent(student);

    navigate('/dasboard')
  }

  return <>
     <div className='row container-fluid'>
    <div className='col sm-1'></div>
    <div className='col  mt-5 sm-7 md-4 xl-6'>
     <Form>
       <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>{
          setName(e.target.value);
        }} />       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter Email" onChange={(e)=>{
          setEmail(e.target.value)
        }}/>       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" value={mobile} placeholder="Enter Mobile Number" onChange={(e)=>{
          setMobile(e.target.value)
        }} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" value={batch} placeholder="Enter Batch" onChange={(e)=>{
          setBatch(e.target.value)
        }}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
    <div className='col'></div>
    </div>
  </>
}

export default EditStudent