import './Create.css'

const Bonus = ()=>{
    return(
        <center>
            <div class='Form'>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td>
                        Bonus :
                    </td>
                    <td>
                        <input type="text" name="bonus" value=""/>
                    </td>
                </tr>
                </tbody>
                <br></br><input type="submit" name="submit" value="Give bonus"></input>
            </table>
        </div>
        </center>
    )
};

export default Bonus;