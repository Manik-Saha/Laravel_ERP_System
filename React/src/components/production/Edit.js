const ProductionEdit = ()=>{
    return(
        <div>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                <td>
                    Status:
                </td>
                <td><select name="status" id="status" name="status">
                        <option value="upcoming"></option>
                        <option value="ready">Ready</option>

                    </select>
                </td>
            </tr>
                </tbody>
            </table>
            <br/><input type="submit" name="submit" value="Save"/>
        </div>
    );
};

export default ProductionEdit;