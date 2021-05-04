import './Create.css'
import Index from '../hr/Index';

const Create = ()=> {
    return(
        <div class='Form'>
        <center>
        <form method="post" enctype="multipart/form-data">
        <p> </p>
        <fieldset>
            <table class="center">
                <thead></thead>
                <tbody>
                <tr>
                    <td>Upload image :</td>
                    <td><input type="file" name="staffImage" /> </td>
                </tr>
                <tr>
                    <td></td>
                    <td>

                    </td>
                </tr>
                <tr>
                    <td><label for="status">Status :</label></td>
                    <td><select name="status" id="status" name="status">
                            <option> </option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p> </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        User-name :
                    </td>
                    <td>
                        <input type="text" name="user_name" value="" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p > </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        First name :
                    </td>
                    <td>
                        <input type="text" name="first_name" value="" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p> </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Last name :
                    </td>
                    <td>
                        <input type="text" name="last_name" value="" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p> </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Password :
                    </td>
                    <td>
                        <input type="password" name="password" value="" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Confirm password :
                    </td>
                    <td>
                        <input type="password" name="Cpassword" value=""/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="gender">Gender :</label>
                    </td>
                    <td>
                        <input type="radio" name="gender" value="Male"/>
                        <label>Male</label>

                        <input type="radio" name="gender" value="Female"/>
                        <label>Female</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Home address :
                    </td>
                    <td>
                        <input type="text" name="address" value=""/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        E-mail :
                    </td>
                    <td>
                        <input type="text" name="email" value=""/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Contact no. :
                    </td>
                    <td>
                        <input type="text" name="phone" value=""/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Date of birth :
                    </td>
                    <td>
                        <input type="date" name="birth" value=""/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Joining date :
                    </td>
                    <td>
                        <input type="date" name="joining" value=""/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="marriage">Marital status</label>
                    </td>
                    <td>
                        <input type="radio" name="marriage" value="Married"/>
                        <label>Married</label>

                        <input type="radio" name="marriage" value="Unmarried"/>
                        <label>Unmarried</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td><label for="blood_group">Blood group :</label></td>
                    <td><select name="blood_group" id="blood_group" name="blood_group">
                            <option> </option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Salary :
                    </td>
                    <td>
                        <input type="text" name="salary" value=""/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <p></p>
                    </td>
                </tr>
                </tbody>
            </table>
        </fieldset>
        <br></br><input type="submit" name="submit" value="Save" />
    </form>
    </center>
        </div>

    );
};

export default Create;