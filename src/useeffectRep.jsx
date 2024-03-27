import { useEffect, useState } from "react"

function UseeffectRep()
{
    const [fn,setFn]=useState();
    const [ln,setLn]=useState();
    useEffect(()=>
    {
        console.log("use effect worked");
    },[ln]);
    useEffect(()=>
    {
        let ref=setInterval(()=>
        {
            console.log(fn);
        },1000);

        return(()=>
        {
            clearInterval(ref);
        })
    },[fn]);
    return(
        <div>
            <p>
                <input type="text" value={fn} onChange={(event)=>setFn(event.target.value)}/>
            </p>
            <p>
                <input type="text" value={ln} onChange={(event)=>setLn(event.target.value)}/>
            </p>
            <p>
                {fn+" "+ln}
            </p>
        </div>
    )
}
export default UseeffectRep;