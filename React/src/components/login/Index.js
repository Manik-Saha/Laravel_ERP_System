import './Index.css';

const Login = ()=>{
    return(
        <div className='Login'>
            <form>
                <fieldset>
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                        <td>Username</td>
                        <td><input type="text" name="username"/> </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <p ></p>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="password"/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="submit" name="submit" value="Login"/></td>
                        <td></td>
                    </tr>
                        </tbody>
                    </table>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;