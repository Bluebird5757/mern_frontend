import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useState } from 'react';
function Itemlist(props)
{
    return(
    // console.log(props.arr[props.index]);
    props.arr[props.index].map((item)=>
    {
        return(
            <option value={item} key={item}>{item}</option>
        )
    }))
}
export default function Availproducts() {
    const[userobj,setuserobj]=useState(
        {
            email:"",
            categories:"",
            items:[],
            city:"",
            // picpath:null
        }
    );
    const[index,setIndex]=useState(-1);
    const listitems=[["cheese","curd","ice cream"],["apple","mango","banana"],["potato","tomato","cucumber"]]
    const [path, setprev] = useState("");
    function doupdate(event) {
        var { name, value } = event.target;
        setuserobj({ ...userobj, [name]: value });
    }
    function doupdatepic(event) {
        console.log(event.target.files[0]);
        setuserobj({ ...userobj, ["picpath"]: event.target.files[0] });
    }
    async function dosaveitems()
    {
        const url=`http://mern-project-2024.onrender.com/profile/avail-product`;
        alert(JSON.stringify(userobj.picpath));
        // var formData = new FormData();
        // console.log(obj)
        // for(var prop in userobj){
        //     // console.log(obj[prop])
        //     formData.append(prop , userobj[prop]);
        // }
        // console.log(formData);
        // const serverMsg = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        const serverMsg=await axios.post(url,userobj);
        console.log(serverMsg)
        //alert(JSON.stringify(serverMsg));
        if (serverMsg.data.status === true)
        {
            setprev(`http://mern-project-2024.onrender.com/uploads/${serverMsg.data.res.picname2}`)
            setuserobj({...userobj,["city"]:serverMsg.data.city})
            alert("Saved Successfullyyyyy");
        }
        else
            alert(serverMsg.data.msg + "  " + serverMsg.data.err);
    }
    function additem(event)
    {
      
        setuserobj({...userobj,["items"]:[...userobj.items,event.target.value]})
    }
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-white w-3/4 p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-4">Publish Products</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full border-b-2 border-blue-400 focus:outline-none focus:border-blue-600"
                        placeholder="Enter your email"
                    onChange={doupdate}/>
                </div>
                <div className="mb-4 flex">
                    <div className="w-1/2 mr-2">
                        <label htmlFor="categories" className="block text-sm font-medium text-gray-700">Categories</label>
                        <select
                            id="categories"
                            name="categories"
                            autoComplete="categories-name"
                            required
                            className="w-full border-b-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            onChange={(event)=>setIndex(event.target.value)}
                        >
                            <option value={"select category"}>Select Food Categories</option>
                            <option value={0}>milk_products</option>
                            <option value={1}>fruits</option>
                            <option value={2}>vegetables</option>
                        </select>
                    </div>
                    <div className="w-1/2 mr-2">
                         <label htmlFor="categories" className="block text-sm font-medium text-gray-700">Categories</label>
                        <select
                            id="itemlist"
                            name="itemlist"
                            autoComplete="categories-name"
                            required
                            className="w-full border-b-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            onChange={additem}
                        >
                            <option value="choose">choose</option>
                            {index!=-1&&<Itemlist arr={listitems} index={index}></Itemlist>}
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="item" className="block text-sm font-medium text-gray-700">Selected Items</label>
                    <input
                        id="items"
                        // value={selprod}
                        name="items"
                        value={userobj.items}
                        type="text"
                        autoComplete="email"
                        required
                        className="w-full border-b-2 border-blue-400 focus:outline-none focus:border-blue-600"
                        placeholder=""
                    onChange={doupdate}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        id="city"
                        // value={selprod}
                        name="city"
                         value={userobj.city}
                        type="text"
                        autoComplete="email"
                        required
                        className="w-full border-b-2 border-blue-400 focus:outline-none focus:border-blue-600"
                        placeholder=""
                    onChange={doupdate}/>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={dosaveitems}>
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
}
