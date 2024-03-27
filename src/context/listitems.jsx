import React, { useContext } from 'react';
import { contextJson } from './home';

function ListItems() 
{
    var ary=useContext(contextJson);
    function genList(obj)
    {
            return(
                <div style={{width:"300px",border:"1px black solid",margin:"10px"}}>
                    <p>{obj.company}</p>
                    <p>{obj.price}</p>
                    <hr />
                </div>
            )
    }
  return (
    <div style={{display:"flex"}}>
        {
            ary.map(genList)
        }
    </div>
  )
}

export default ListItems