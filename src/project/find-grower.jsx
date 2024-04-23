import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
// import { set } from 'mongoose';
import { useState } from 'react';
function Itemlist(props)
{
    return(
    props.arr[props.index].map((item)=>
    {
        return(
            <option value={item}>{item}</option>
        )
    }))
}
export default function FindGrower() {
    const[userobj,setuserobj]=useState(
        {
            email:"",
            categories:"",
            items:"",
            city:""
        }
    );
    // const [path, setprev] = useState("");
    const [index,setIndex]=useState(-1);
    const listitems=[["cheese","curd","ice cream"],["apple","mango","banana"],["potato","tomato","cucumber"]]
    function doupdate(event) {
        var { name, value } = event.target;
        setuserobj({ ...userobj, [name]: value });
    }

    // function doupdatepic(event) {
    //     console.log(event.target.files[0]);
    //     setuserobj({ ...userobj, ["picpath"]: event.target.files[0] });
    // }
    async function dofindgrower()
    {
        alert(userobj.city);
        alert(userobj.items);
        const url=`http://mern-project-2024.onrender.com/profile/find-grower?city=`+userobj.city+"&items="+userobj.items;
        // console.log("hello");
        const serverMsg=await axios.get(url);
        console.log(serverMsg.data);
        alert(JSON.stringify(serverMsg.data));
    }
    function additem(event)
    {
        setuserobj({...userobj,["items"]:[...userobj.items,event.target.value]})
    }
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-white w-3/4 p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-4">Find Grower</h1>
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
                            <option value={"selected items"}>Select Food Categories</option>
                            <option value={0}>Milk Products</option>
                            <option value={1}>Veg</option>
                            <option value={2}>Fruits</option>
                        </select>
                    </div>
                    <div className="w-1/2 mr-2">
                        <label htmlFor="categories" className="block text-sm font-medium text-gray-700">Categories</label>
                        <select
                            id="categories"
                            name="categories"
                            autoComplete="categories-name"
                            required
                            className="w-full border-b-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            onChange={additem}
                        >
                            <option value="choose">choose</option>
                           {index!=-1 && <Itemlist arr={listitems} index={index}></Itemlist>}
                        </select>
                    </div>
                    <div className="w-1/2 ml-2">
                        <label htmlFor="items" className="block text-sm font-medium text-gray-700">Items of Selected Category</label>
                        <input
                            id="items"
                            value={userobj.items}
                            name="items"
                            type="text"
                            autoComplete="text"
                            required
                            className="w-full border-b-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            placeholder="Enter items"
                            onChange={doupdate}
                        />
                    </div>
                    <div className="w-1/2 ml-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">city</label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            autoComplete="text"
                            required
                            className="w-full border-b-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            placeholder="Enter city"
                            onChange={doupdate}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={dofindgrower}>
                        Find Grower
                    </button>
                </div>
            </div>
        </div>
    );
}
