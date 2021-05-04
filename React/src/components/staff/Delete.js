const Delete = ()=>{
    return(
        <div>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                <td>
                    <img src="{{asset('/upload')}}/{{$user['picture']}}" width="100px" height="100px"/>

                </td>
            </tr>
            <tr>
                <td>
                    User-name : 
                </td>

            </tr>
            <tr>
                <td>
                    First name : 
                </td>

            </tr>
            <tr>
                <td>
                    Last name : 
                </td>

            </tr>
            <tr>
                <td>
                    Home address : 
                </td>
            </tr>
            <tr>
                <td>
                    E-mail : 
                </td>
            </tr>
            <tr>
                <td>
                    Contact no.
                </td>
            </tr>
            <tr>
                <td>
                    Date of birth : 
                </td>

            </tr>
            <tr>
                <td>
                    Gender : 
                </td>
            </tr>
            <tr>
                <td>
                    Marital status : 
                </td>
            </tr>
            <tr>
                <td>
                    Blood group : 
                </td>
            </tr>
            <tr>
                <td>
                    Salary : 
                </td>
            </tr>
                </tbody>
            </table>
            <br></br><input type="submit" name="submit" value="Delete"/>
        </div>
    )
}

export default Delete;