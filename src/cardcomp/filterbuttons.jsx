import { useState } from "react";
import Cardshow from "./cardshow";
import Filterbuttoncard from "./filterbuttonscard";
import JsonArray from "./jsonarry";
function FilterButton(){
    const [filteredJsonaray,setFilter]=useState(JsonArray);

    const comSet=new Set();
    JsonArray.map((obj)=>{
        comSet.add(obj.company);
    })
    const comAry=[...comSet,"ALL"];
    // function genbuttons(obj)
    // {
        
    //     return(
    //         <input type="button" value={obj.company}/>
    //     )
        
    // }
    // function fillcombos(obj)
    // {
    //     return(
    //         <option value={obj.company}>{obj.company}</option>
    //     )
    // }
    function doFilter(event)
    {
        // alert(event.target.value);
        if(event.target.value==="ALL")
        {
            setFilter(JsonArray);
            return;
        }
        const datasel=JsonArray.filter((obj)=>{
            if(obj.company===event.target.value)
            return obj;
        })
        setFilter(datasel);
    }
    return(
        <>
            <center>
                <Companycombo data={comAry} filterfx={doFilter}></Companycombo>
                <Filterbuttoncard data={filteredJsonaray}></Filterbuttoncard>
            </center>
        </>
    )
}
function Companycombo(props)
{
    return(
        <>
        <select onChange={props.filterfx}>
            {
                props.data.map((str)=>{
                    return(
                        <option value={str}>{str}</option>
                    )
                })
            }
        </select>
        </>
    )
}
export default FilterButton;