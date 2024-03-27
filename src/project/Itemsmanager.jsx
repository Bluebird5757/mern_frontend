import React, { useState } from 'react'
import axios from 'axios'

export default function ItemsManager() {
    const [arrObj,setArrObj]=useState([{}]);
    const [email,setEmail]=useState("");

    async function doFetchitems()
    {
        const url="http://localhost:2007/profile/fetch-items?email="+email;
        const serverMsg=await axios.get(url);
        console.log(serverMsg.data);
        if(serverMsg.data.status===1)
        {
            setArrObj(serverMsg.data.res);
            alert(JSON.stringify(arrObj))
        }
        else if(serverMsg.data.status===2)
        {
            alert(serverMsg.data.res);
        }
        else alert(serverMsg.data.err);
        console.log(arrObj);
    }

    function getTable(obj)
    {
        return (
            <ItemTable itemobj={obj}>

            </ItemTable>
        )
    }

  return (
    <>
    <div className='pl-36 mt-2 ml-36 flex'>
        <div className="mb-6 w-60">
          <label htmlFor="email" className="block font-semibold mb-2">Email:</label>
          <input type="email" name="email" id="email" className="block w-auto px-4 py-2 rounded-md border border-black bg-white text-gray-800 focus:outline-none focus:border-indigo-500" onChange={(event)=>{setEmail(event.target.value)}}/>
        </div>
        <div className='w-28 text-center bg-black text-white rounded-md mt-[33px] ml-7 pt-1 pb-1 font-semibold h-10 border'>
            <button type='button' onClick={doFetchitems}>Fetch</button>
        </div>
    </div>
    {
        arrObj.map(
            getTable
        )
    }
    </>
  )
}

function ItemTable(props)
{
    return (
        <div class="overflow-x-auto container">
  <table class="table-auto min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ObjId
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Category
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Item
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          PicPath
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap">
            {props.itemobj._id}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            {props.itemobj.email}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            {props.itemobj.categories}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            {props.itemobj.items}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            {props.itemobj.picname2}
        </td>
      </tr>
    </tbody>
  </table>
</div>
)
}