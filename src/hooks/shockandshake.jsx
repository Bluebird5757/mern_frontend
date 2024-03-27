import { useId, useRef, useState,useEffect } from "react"


function Shockandshake()
{
    const refpwd=useRef();
    const [pwd,setPwd]=useState();
    const [count,setCount]=useState(15);
    const id1=useId();
    const id2=useId();
    useEffect(()=>
    {
        console.log(refpwd);
        if(count>=1)
        {
            setCount(count-1);
        }
        else if(pwd.length<=15 && count==0)
        {
            setCount(count+1)
        }
        else
        {
            refpwd.current.style.backgroundColor="red";
        }
    },[pwd])
    return(
        <>
            enter password:<input type="text" id={id1} value={pwd} maxLength={15} onChange={(event)=>setPwd(event.target.value)} ref={refpwd}/>
            length={count}
            <span id={id2}></span>
        </>
    )
}
export default Shockandshake;