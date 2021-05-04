import './Edit.css';

const OrderEdit = ()=>{
    return(
        <div className="Form">
            <fieldset>
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                    <td>
                        product name :
                    </td>
                    <td>
                        <input type="text" name="product_name" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        quantity :
                    </td>
                    <td>
                        <input type="text" name="quantity" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Unit Price:
                    </td>
                    <td>
                        <input type="text" name="unit_price" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Total Price:
                    </td>
                    <td>
                        <input type="text" name="total_price" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Product ID:
                    </td>
                    <td>
                        <input type="text" name="product_id" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Vendor Name:
                    </td>
                    <td>
                        <input type="text" name="vendor_name" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Vendor Address:
                    </td>
                    <td>
                        <input type="text" name="vendor_address" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Vendor phone No.:
                    </td>
                    <td>
                        <input type="text" name="vendor_phone" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Date of sold:
                    </td>
                    <td>
                        <input type="date" name="date_sold" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Payment Type:
                    </td>
                    <td><select name="payment_type" id="payment_type" name="payment_type">
                            <option value="cash">Cash</option>
                            <option value="card" >Card</option>
                            <option value="due" >Due</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Payment amount:
                    </td>
                    <td>
                        <input type="text" name="payment_amount" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Due amount:
                    </td>
                    <td>
                        <input type="text" name="due_amount" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Status:
                    </td>
                    <td><select name="status" id="status" name="status">
                            <option value="complete" >Complete</option>
                            <option value="complete" >Sold</option>
                            <option value="cancelled" >Cancel</option>
                            <option value="running" >Running</option>
                        </select>
                    </td>
                </tr>
                    </tbody>
                </table>
            </fieldset>
            <br/><input type="submit" name="submit" value="Save"/>
        </div>
    );
};

export default OrderEdit;