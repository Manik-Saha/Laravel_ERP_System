import './Index.css';
import React from 'react';
import {Link} from  'react-router-dom';

const Index = ()=>{
    return(
        <div class="Sidebar">
            <h2>My Profile</h2>
            <p>
                <Link to='/HR/dashboard'>Home</Link> <br></br>
                <Link to='/HR/profile'>View My Profile</Link><br></br>
                <Link to='/HR/change_password'>Change Password</Link><br></br>
            </p>

            <br></br>
            <br></br>

            <h2>Staff Management</h2>
            <Link to='/Staff/list'>view All Staff</Link> <br></br>
            <Link to='/Staff/Create'>Register new staff</Link><br></br>
            <Link to='/Staff/bonus:id'>Give Bonus</Link><br></br>
            <Link to='/Staff/delete:id'>Delete</Link><br></br>
            <Link to='/Staff/edit:id'>Edit Information</Link><br></br>
            <Link to='/Staff/promotion:id'>Promote Employee</Link><br></br>
            
            <br></br>
            <br></br>
            <br></br>          
            <br></br>
            <br></br>
            <br></br>

            <h2>Logout Here</h2>
            <Link to='/login'>Logout</Link> <br></br>
        </div>    
    );
};

export default Index;