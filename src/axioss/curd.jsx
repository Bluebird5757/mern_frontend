import React,{useState} from 'react';
import axios from 'axios';
function Curd()
{
    console.log("rendered");
    const [obj,setObj]=useState({
        item:"",
        category:"",
        price:0,
        dop:""
    });
function doupdate(event)
{
    var {name,value}=event.target;
    setObj({...obj,[name]:value,});
}
async function dosavewithaxios()
{
    const url=`http://localhost:2007/products/add-product?item=${obj.item}&category=${obj.category}&price=${obj.price}&dop=${obj.dop}`;
    const servermsg=await axios.get(url);
    console.log(servermsg);
    if(servermsg.data.status==true)
    alert("saved successfully");
    else
    alert(servermsg.data.msg+" "+servermsg.data.err);
}
async function dosavewithaxiospost()
{
    const url=`http://localhost:2007/products/add-product`;
    console.log(obj);
    const servermsg=await axios.post(url,obj);
    console.log(servermsg);
    if(servermsg.data.status==true)
    alert("saved successfully");
    else
    alert(servermsg.data.msg+" "+servermsg.data.err);
}
return(
    <div className='border border-black w-[300px] mx-auto p-4'>
    <p>
        <h2>CURD App</h2>
    </p>
        <form >
        <p>
        Item <input type="text" name="item" className='border border-black' 
         onChange={doupdate} />
        </p>
        <p>
        category <input type="text" name="category" className='border border-black mt-2' onChange={doupdate} />
        </p>
        <p>
        Price <input type="text" name="price" className='border border-black mt-2' onChange={doupdate} />
        </p>
        <p>
        DOP <input type="date" name="dop" className='border border-black mt-2' onChange={doupdate} />
        </p>
        <p>
            <input type="button" onClick={dosavewithaxios} className='border border-black p-2 mt-2'  value="Do Save with get"/>
            <input type="button" onClick={dosavewithaxiospost} className='border border-black p-2 mt-2'  value="do save with post"/>
            
        </p>   
        </form>
        <p>
            Result
        </p>

  
    </div>
)}
export default Curd;