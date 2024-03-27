import React,{useState} from 'react';
function Fullname()
{
    const [obj,setObj]=useState({
        fn:"f.name",
        ln:"l.name",
        full:"full name"
    })
    const doupdateobj=(event)=>
    {
        console.log(event.target);
        const {name,value}=event.target;
        setObj({...obj,[name]:value});
    }
    function dojoin()
    {
        let joined=obj.fn+" "+obj.ln;
        setObj({...obj,["full"]:joined});
    }
    return(
        <div>
            <p>
                first name
            </p>
            <p>
                <input type="text" name="fn" onChange={doupdateobj}/>{obj.fn}
            </p>
            
            <p>
                last name
            </p>
            <p>
                <input type="text" name="ln" onChange={doupdateobj}/>{obj.ln}
            </p>
            
            <p>
                full name
            </p>
            <p>
                <input type="button" value="get full name"name="full" onClick={dojoin}/>{obj.full}
            </p>
        </div>
    )
}
export default Fullname;