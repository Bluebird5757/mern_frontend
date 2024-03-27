import {useState} from "react";
function Fullname()
{
    const [fn,setFn]=useState("");
    const [ln,setLn]=useState("");
    const [n,setN]=useState("full name");
    function updateLastname(event)
    {
        setLn(event.target.value);
    }
    function name()
    {
        setN(fn+ln);
    }
    return(
        <div>
            <p>
                first Name
            </p>
            <p>
                <input type="text" onChange={(event)=>{setFn(event.target.value)}}/>{fn}
            </p>
            <p>
                Last Name
            </p>
            <p>
                <input type="text" onChange={updateLastname}/>{ln}
            </p>
            <p>
                Full name
            </p>
            <p>
                <input type="button" value="get full name"onClick={name}/>{n}
            </p>
        </div>
    )
}
export default Fullname;