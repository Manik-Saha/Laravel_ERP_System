import {Link} from  'react-router-dom';
import './Edit.css';

const Running = ()=>{
    return(
        <div className="Form">
        <form>
            <table border ='1'>
                <thead></thead>
                <tbody>
                    <tr>
                        <th>ORDER ID</th>
                        <th>Edit order</th>
                        <th>Vendor name</th>
                        <th>Vendor phone</th>
                        <th>Vendor address</th>
                        <th>Product ID</th>
                        <th>Product name</th>
                        <th>Unit price</th>
                        <th>quantity</th>
                        <th>Total price</th>
                        <th>Sold date</th>
                        <th>Payment method</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td> </td>
                        <td><Link to='/supply_chain_manager/order_management/order/edit:order_id'>Edit Order</Link></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
    );
};

export default Running;