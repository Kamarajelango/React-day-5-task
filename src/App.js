import './App.css';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import CreateStudent from './Components/CreateStudent';
import EditStudent from './Components/EditStudent';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import React,{useState} from 'react';


function App() {

  let data={
    monthly:"$40,000",
    annual:"$2,15,000",
    task:60,
    pending:20
  }

  let [student,setStudent]=useState([
    {
      name:"Raj",
      email:"raj@gmail.com",
      mobile:"9986543210",
      batch:"B36WDT"
    },
    {
      name:"Micheal",
      email:"micheal@gmail.com",
      mobile:"9861543972",
      batch:"B36WDE"
    },
    {
      name:"Rizwan",
      email:"rizwan@gmail.com",
      mobile:"8654321018",
      batch:"B34WDT"
    }
  ])

 
  return <>
  <div className='main-wrapper '>
  
  <BrowserRouter>
  <Sidebar/>
      <Routes>
          <Route path='dashboard' element={<Dashboard data={{data,student,setStudent}} />}/>
          <Route path='create-student' element={<CreateStudent data={{student,setStudent }}/>}/>
          <Route path='edit-student/:id' element={<EditStudent data={{student,setStudent}}/>}/>
          <Route path='*' element={<Dashboard data={{data,student,setStudent}}/>}/>
      </Routes>
  </BrowserRouter>
    
  </div>
    
  </>
}

export default App;
