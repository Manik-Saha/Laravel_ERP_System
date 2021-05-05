const ProductionEdit = ()=>{
    return(
        <div>
            <center>
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                    <td>
                        Status:
                    </td>
                    <td><select name="status" id="status" name="status">
                            <option value="upcoming">Upcoming</option>
                            <option value="ready">Ready</option>

                        </select>
                    </td>
                </tr>
                    </tbody>
                </table>
            <br/><input type="submit" name="submit" value="Save"/>
            </center>
        </div>
    );
};

export default ProductionEdit;