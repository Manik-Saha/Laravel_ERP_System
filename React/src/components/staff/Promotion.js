import './Create.css'

const Promotion = ()=>{
    return(
        <div class='Form'>
            <form method="post">
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                <td><label for="status">Status :</label></td>
                <td><select name="status" id="status" name="status">
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
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
                    </tbody>
                </table>
                <br/><input type="submit" name="submit" value="Save"/>
            </form>
        </div>
    );
};

export default Promotion;