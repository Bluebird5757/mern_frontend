import axios from "axios";
// const baseURL="http://localhost:2007";
const baseURL="https://mern-project-2024.onrender.com"
const publicAxios=axios.create({baseURL});
const privateReq=axios.create({baseURL});
privateReq.interceptors.request.use((config)=>
{
    const token=localStorage.getItem("token");
    if(token)
    {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export {publicAxios,baseURL,privateReq};