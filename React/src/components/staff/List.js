import {Link} from  'react-router-dom';
import './Create.css'

export default function List(){
    return(
        <div class='Form'>
            <table border='1'>
                <thead></thead>
                <tbody>
                    <tr>
                        <th>User ID</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Promotion</th>
                        <th>Bonus</th>
                        <th>Profile picture</th>
                        <th>User name</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Status</th>
                        <th>Address</th>
                        <th>E-mail</th>
                        <th>Contact no.</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Joining date</th>
                        <th>Marital status</th>
                        <th>Blood group</th>
                        <th>Salary</th>
                        <th>Bonus</th>
                    </tr>
                    <tr>
                        <td><Link to='/Staff/edit:id'>Edit Information</Link></td>
                        <td><Link to='/Staff/delete:id'>Delete</Link></td>
                        <td><Link to='/Staff/promotion:id'>Promote Employee</Link></td>
                        <td><Link to='/Staff/bonus:id'>Give Bonus</Link></td>
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
        </div>
    )
}