const Edit = ()=>{
    return(
        <div>
            <form method="post" action="">
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                <td>
                    User-name :
                </td>
                <td>
                    <input type="text" name="user_name" value=""/>
                </td>
            </tr>
            <tr>
                <td>
                    First name :
                </td>
                <td>
                    <input type="text" name="first_name" value=""/>
                </td>
            </tr>
            <tr>
                <td>
                    Last name :
                </td>
                <td>
                    <input type="text" name="last_name" value=""/>
                </td>
            </tr>
            <tr>
                <td>
                    Password :
                </td>
                <td>
                    <input type="password" name="password" value="" disabled />
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
                <td>
                    E-mail :
                </td>
                <td>
                    <input type="text" name="email" value=""/>
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
                <td>
                    Date of birth :
                </td>
                <td>
                    <input type="date" name="birth" value=""></input>
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
                <td>
                    <label for="marriage">Marital status</label>
                </td>
                <td>
                    <input type="radio" name="marriage" value="Married"/>
                    <label>Married</label>
                    <label>Unmarried</label>
                </td>
            </tr>
            <tr>
                <td><label for="blood_group">Blood group :</label></td>
                <td><select name="blood_group" id="blood_group" name="blood_group">
                        <option value="A+"> A+</option>
                        <option value="A-" > A-</option>
                        <option value="B+" >B+</option>
                        <option value="B-">B-</option>
                        <option value="O+" >O+</option>
                        <option value="O-" >O-</option>
                        <option value="AB+" >AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </td>
            </tr>
                    </tbody>
                </table>
                <br></br><input type="submit" name="submit" value="Save"/>
            </form>
        </div>
    );
};

export default Edit;