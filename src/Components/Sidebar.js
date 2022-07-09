import React from 'react'
import { Link } from 'react-router-dom';



function Sidebar() {
  return <>

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar sidebar" >

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <div className="nav-link" >
        <i className="fas fa-fw fa-tachometer-alt"></i>
       <Link to="/dashboard"><span style={{"color":"white"}}>Dashboard</span></Link> </div>
</li>


{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <div className="nav-link collapsed">
        <i className="fas fa-fw fa-cog"></i>
     <Link to='/create-student'><span className='text-white'>Create Student</span></Link>   
    </div> 
    
</li>



  
  </ul>
  </>
}

export default Sidebar;