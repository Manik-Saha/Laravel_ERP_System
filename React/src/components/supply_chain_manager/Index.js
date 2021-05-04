import './Index.css';
import React from 'react';
import {Link} from  'react-router-dom';

const Index2 = ()=>{
    return(
        <div class="Sidebar">
            <h2>My Profile</h2>
            <Link to='/supply_chain_manager/dashboard'>Home</Link> <br></br>
            <Link to='/supply_chain_manager/profile'>View My Profile</Link><br></br>
            <Link to='/supply_chain_manager/change_password'>Change Password</Link><br></br>

            <br></br>
            <br></br>

            <h2>Order Management</h2>
            <Link to='/supply_chain_manager/order_management/all_order'>View All Order</Link> <br></br>
            <Link to='/supply_chain_manager/order_management/cancelled_order'>Cancelled Order</Link><br></br>
            <Link to='/supply_chain_manager/order_management/complete_order'>Complete Order</Link><br></br>
            <Link to='/supply_chain_manager/order_management/running_order'>Running Order</Link><br></br>
            <Link to='/supply_chain_manager/order_management/order/edit:order_id'>Edit Order</Link><br></br>

            <br></br>
            <br></br>

            <h2>Production Management</h2>
            <Link to='/supply_chain_manager/all_production'>View All Production</Link> <br></br>
            <Link to='/supply_chain_manager/all_ready_production'>Ready Production</Link><br></br>
            <Link to='/supply_chain_manager/all_upcoming_production'>Upcoming Production</Link><br></br>
            <Link to='/supply_chain_manager/edit_production:product_id'>Edit production</Link><br></br>
            
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

export default Index2;