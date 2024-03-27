import React,{useState,useEffect} from 'react';
function Useeffect()
{
    const [fn,setfn]=useState("fn");
    const [ln,setln]=useState("ln");
    useEffect(()=>{
        console.log("side effect");
    });//on every rerender


    /*useEffect(()=>{
        console.log("side effect");
    },[]);//it will be once


    /*useEffect(()=>{
        console.log("side effect");
    },[fn]);//occasional side-effect filter */
    console.log("comp rendered");
    return(
        <div>
            <p>
                <input type="text" value={fn} onChange={(event)=>setfn(event.target.value)}/>
            </p>
            <p>
            <input type="text" value={ln} onChange={(event)=>setln(event.target.value)}/>
            </p>
            <p>
                full name:{fn+" "+ln};
            </p>
        </div>
    )
}
export default Useeffect;