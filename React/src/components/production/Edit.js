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
        </div>
    );
};

export default ProductionEdit;