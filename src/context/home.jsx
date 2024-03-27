import React,{createContext} from 'react';
import jsonary from "../cardcomp/jsonarry";
import Dashboard from './dashboard';
var contextemail=createContext();
var contextJson=createContext();
function Home()
{
    const currentemail="nikhilgarg288@gmail.com";
    return(
    <contextemail.Provider value={currentemail}>
        <contextJson.Provider value={jsonary}>
        <Dashboard></Dashboard>
        </contextJson.Provider>

    </contextemail.Provider>
    )

}
export default Home;
export {contextemail,contextJson}