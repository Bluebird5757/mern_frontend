import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react';
import axios from 'axios';
export default function Profile() {
    const [obj, setObj] = useState({
        name: "",
        email: "",
        country: "",
        address: "",
        city: "",
        zipcode:0,
        gender:"",
        pic: null
    });
    const [path, setprev] = useState("");
    function doupdate(event) {
        var { name, value } = event.target;
        setObj({ ...obj, [name]: value });
    }
    function doupdatepic(event) {
        setObj({ ...obj, ["pic"]: event.target.files[0] });
    }
    async function dosave() {
        const url = `http://localhost:2007/profile/add-profile`;
        var formdata = new FormData();
        for (var prop in obj) {
            formdata.append(prop, obj[prop]);
        }
        const serverMsg = await axios.post(url,formdata,{headers:{'Content-Type': 'multipart/form-data'}});
        console.log(serverMsg)
        //alert(JSON.stringify(serverMsg));
        if (serverMsg.data.status === true)
            alert("Saved Successfullyyyyy");
        else
            alert(serverMsg.data.msg + "  " + serverMsg.data.err);
    }
    async function doupdateProfile() {
        const url = `http://localhost:2007/profile/update-profile`;
        var formdata = new FormData();
        for (var prop in obj) {
            formdata.append(prop, obj[prop]);
        }
        const serverMsg = await axios.post(url, formdata, { headers: { 'Content-Type': 'multipart/form-data' } });
        console.log(serverMsg)
        //alert(JSON.stringify(serverMsg));
        if (serverMsg.data.status === true)
        {
            alert("Updated Successfullyyyyy");
            setObj(serverMsg.data.res);
            setprev(`http://localhost:2007/uploads/${serverMsg.data.res.picname}`)
        }
        else
            alert(serverMsg.data.msg + "  " + serverMsg.data.err);
    }
    async function dofetchprofile()
    {
        const url=`http://localhost:2007/profile/fetch-profile?email=${obj.email}`;
        const serverMsg=await axios.get(url);
        alert(JSON.stringify(serverMsg.data.res));
        setObj(serverMsg.data.res);
        setprev(`http://localhost:2007/uploads/${serverMsg.data.res.picname}`);
    }
    return (
        <form>
            <div className="space-y-12 container">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2 hover:outline">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="username"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Name"
                                        onChange={doupdate}
                                        value={obj.name}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon className="h-50 w-36 text-gray-300" aria-hidden="true" src={path}/>
                                 <img src={path} width="100" height="100" /> 
                                <input
                                    type="file"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    name="pic"
                                    onChange={doupdatepic}
                                    > 
                                </input>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2 hover:outline">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={doupdate} 
                                    value={obj.email}/>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 hover:outline"
                                    onChange={doupdate}
                                    value={obj.country}>
                                        <option>Select Country</option>
                                    <option>United States</option>
                                    <option>India</option>
                                    <option>Russia</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Street address
                            </label>
                            <div className="mt-2 hover:outline">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={doupdate}
                                    value={obj.address} />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2 hover:outline">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={doupdate} 
                                    value={obj.city}/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                ZIP / Postal code
                            </label>
                            <div className="mt-2 hover:outline">
                                <input
                                    type="text"
                                    name="zipcode"
                                    id="zipcode"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={doupdate}
                                    value={obj.zipcode}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Gender
                            </label>
                            <div className="mt-2">
                                <select
                                    id="gender"
                                    name="gender"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 hover:outline"
                                    onChange={doupdate}
                                    value={obj.gender}
                                    >
                                        <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={dofetchprofile}>
                    search
                </button>
                <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={doupdateProfile}>
                    update
                </button>
                <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={dosave}>
                    Save
                </button>
            </div>
        </form>
    )
}
