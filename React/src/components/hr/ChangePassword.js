import './ChangePassword.css';

const ChangePassword = ()=>{
    return(
        <div className="Change">
            <form method="post">
                <fieldset>
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                    <td>
                        Old Password :
                    </td>
                    <td>
                        <input type="password" name="Opassword" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        New Password :
                    </td>
                    <td>
                        <input type="password" name="Npassword" value=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Confirm new password :
                    </td>
                    <td>
                        <input type="password" name="CNpassword" value=""/>
                    </td>
                </tr>
                        </tbody>
                    </table>
                    <br/><input type="submit" name="submit" value="Change password"/>
                </fieldset>
            </form>
        </div>
    );
};

export default ChangePassword;