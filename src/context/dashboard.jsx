import React,{useContext} from 'react';
import { contextemail } from './home';
import Listitems from './listitems';
function Dashboard()
{
    var currentemail=useContext(contextemail);
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome:{currentemail}</h2>
            <Listitems></Listitems>
        </div>
    )
}
export default Dashboard;