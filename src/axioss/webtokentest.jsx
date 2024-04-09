import React from 'react';
import {doValidateTokenWithAxios} from "../services/user-controller";
const WebTokenTest=()=>
{
    async function clickhandler()
    {
        const serverMsg=await doValidateTokenWithAxios();
        if(serverMsg.data.status===true)
        {
            let obj=JSON.stringify(serverMsg.data.item);
            alert("saved successfully"+serverMsg.data.message+" object="+obj);
        }
        else
        {
            alert(serverMsg.data.msg+"  "+serverMsg.data.err);
        }
    }
    return(
        <div>
            <button type="button" classname='border-1 border-black py-2 px-4' onClick={clickhandler}>do validate token</button>
        </div>
    )
}
export default WebTokenTest;