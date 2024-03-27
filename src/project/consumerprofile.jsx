import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react';
import { dosaveconsumer, dosearchconsumer } from '../services/user-controller';
import axios from 'axios';

export default function ConsumerProfile() {
    const [obj, setObj] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        aadhar: "",
        mobile: "",
        categories: "",
        picconsumer: null
    });
    const [path, setprev] = useState("");

    function doupdate(event) {
        const { name, value } = event.target;
        setObj({ ...obj, [name]: value });
    }

    function doupdatepic(event) {
        setObj({ ...obj, ["picconsumer"]: event.target.files[0] });
    }

    async function dosave() {
        const formData = new FormData();
        for (const prop in obj) {
            formData.append(prop, obj[prop]);
        }
        const serverMsg = await dosaveconsumer(formData);
        console.log(serverMsg);
        if (serverMsg.data.status === true) {
            setprev(`http://localhost:2007/uploads/${serverMsg.data.res.picname1}`)
            alert("Saved Successfullyyyyy");
        } else {
            alert(serverMsg.data.msg + "  " + serverMsg.data.err);
        }
    }

    async function doupdateProfile() {
        const url = `http://localhost:2007/profile/update-consumer-profile`;
        const formdata = new FormData();
        for (const prop in obj) {
            formdata.append(prop, obj[prop]);
        }
        const serverMsg = await axios.post(url, formdata, { headers: { 'Content-Type': 'multipart/form-data' } });
        if (serverMsg.data.status === true) {
            alert("Updated Successfullyyyyy");
            setObj(serverMsg.data.res);
            setprev(`http://localhost:2007/uploads/${serverMsg.data.res.picname1}`)
        } else {
            alert(serverMsg.data.msg + "  " + serverMsg.data.err);
        }
    }

    async function dofetchprofile() {
        const serverMsg = await dosearchconsumer(obj.email);
        alert(JSON.stringify(serverMsg.data.res));
        setObj(serverMsg.data.res);
        setprev(`http://localhost:2007/uploads/${serverMsg.data.res.picname1}`);
    }

    return (
        <form className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
            <div className="border-b border-gray-200 pb-8 mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile</h2>
                
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" autoComplete="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={doupdate} value={obj.name} />
                </div>
                <br></br><br></br>
                <div className="flex items-center">
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Profile Pic</label>
                    <div>
                        <UserCircleIcon className="h-8 w-8 text-gray-300" aria-hidden="true" src={path} />
                        <img src={path} width="100" height="100" />
                    </div>
                    <input type="file" name="picconsumer" id="picconsumer" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={doupdatepic} />
                </div>
                
            </div>
            <div className="border-b border-gray-200 pb-8 mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={doupdate} value={obj.email} />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <input type="text" name="address" id="address" autoComplete="address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={doupdate} value={obj.address} />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" name="city" id="city" autoComplete="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={doupdate} value={obj.city} />
                    </div>
                    <div>
                        <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700">Aadhar Card Number</label>
                        <input type="text" name="aadhar" id="aadhar" autoComplete="aadhar" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={doupdate} value={obj.aadhar} />
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input type="text" name="mobile" id="mobile" autoComplete="mobile" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={doupdate} value={obj.mobile} />
                    </div>
                    <div>
                        <label htmlFor="categories" className="block text-sm font-medium text-gray-700">Categories</label>
                        <select name="categories" id="categories" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={doupdate} value={obj.categories}>
                            <option value="">Select Food Categories</option>
                            <option value="Milk Products">Milk Products</option>
                            <option value="Veg">Veg</option>
                            <option value="Fruits">Fruits</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <button type="button" className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={dofetchprofile}>Search</button>
                <button type="button" className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={doupdateProfile}>Update</button>
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={dosave}>Save</button>
            </div>
        </form>
    );
}
