import {publicAxios,privateReq} from "./axios-config";
const dosavegrower=(obj)=>
{
    return publicAxios.post("/profile/add-grower-profile",obj);
}
const dosearchgrower=(email)=>
{
    return publicAxios.get("/profile/fetch-grower-profile?email="+email);
}
const dosaveconsumer=(obj)=>
{
    return publicAxios.post("/profile/add-consumer-profile",obj);
}
const dosearchconsumer=(email)=>
{
    return publicAxios.get("/profile/fetch-consumer-profile?email="+email);
}
const doValidateTokenWithAxios=()=>{
    return privateReq.get("/profile/token-validation");
}
const login=(obj)=>{
    return publicAxios.post("/fetch-signup",obj);
}
export {dosavegrower,dosearchgrower,dosearchconsumer,dosaveconsumer,doValidateTokenWithAxios,login};