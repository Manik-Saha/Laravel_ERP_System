import './App.css';

import Create from './components/staff/Create';
import Bonus from './components/staff/Bonus';
import Delete from './components/staff/Delete';
import Edit from './components/staff/Edit';
import List from './components/staff/List';
import Promotion from './components/staff/Promotion';

import ChangePassword from './components/hr/ChangePassword';
import Index from './components/hr/Index';
import Profile from './components/hr/Profile';

import ChangePassword2 from './components/supply_chain_manager/ChangePassword';
import Index2 from './components/supply_chain_manager/Index';
import Profile2 from './components/supply_chain_manager/Profile';

import Login from './components/login/Index';

import Cancelled from './components/order/Cancelled';
import Complete from './components/order/Complete';
import Running from './components/order/Running';
import OrderEdit from './components/order/Edit';
import OrderIndex from './components/order/Index';

import ProductionEdit from './components/production/Edit';
import ProductionIndex from './components/production/Index';
import Ready from './components/production/Ready';
import Upcoming from './components/production/Upcoming';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <table>
        <thead></thead>
        <tbody>
          <Router>
            <Switch>
              <Route exact path="/">
                <h1>Home</h1>
              </Route>

              <Route path="/Staff/Create">
                <Create/>
              </Route>

              <Route path="/Staff/list">
                <List/>
              </Route>

              <Route path="/Staff/edit:user_id">
                <Edit/>
              </Route>

              <Route path="/Staff/delete:user_id">
                <Delete/>
              </Route>

              <Route path="/Staff/bonus:user_id">
                <Bonus/>
              </Route>

              <Route path="/Staff/promotion:user_id">
                <Promotion/>
              </Route>

              <Route path="/HR/change_password">
                <ChangePassword/>
              </Route>

              <Route path="/HR/dashboard">
                <Index/>
              </Route>

              <Route path="/HR/profile">
                <Profile/>
              </Route>

              <Route path="/supply_chain_manager/change_password">
                <ChangePassword2/>
              </Route>

              <Route path="/supply_chain_manager/dashboard">
                <Index2/>
              </Route>

              <Route path="/supply_chain_manager/profile">
                <Profile2/>
              </Route>

              <Route path="/login">
                <Login/>
              </Route>

              <Route path='/supply_chain_manager/order_management/all_order'>
                <OrderIndex/>
              </Route>

              <Route path='/supply_chain_manager/order_management/cancelled_order'>
                <Cancelled/>
              </Route>

              <Route path='/supply_chain_manager/order_management/running_order'>
                <Running/>
              </Route>

              <Route path='/supply_chain_manager/order_management/complete_order'>
                <Complete/>
              </Route>

              <Route path='/supply_chain_manager/order_management/order/edit:order_id'>
                <OrderEdit/>
              </Route>

              <Route path = '/supply_chain_manager/all_production'>
                <ProductionIndex />
              </Route>

              <Route path = '/supply_chain_manager/all_ready_production'>
                <Ready />
              </Route>

              <Route path = '/supply_chain_manager/all_upcoming_production'>
                <Upcoming />
              </Route>

              <Route path = '/supply_chain_manager/edit_production:product_id'>
                <ProductionEdit />
              </Route>

              <Route path = '/logout'>
                <Login />
              </Route>

              <Route path='*'>
                  <h1>404 not found</h1>
              </Route>

            </Switch>
          </Router>
        </tbody>
      </table>
    </div>
  );
}

export default App;
