import {Productcard} from "./filterbuttonscard";
const HOC_Promoted=()=>
{
    return(props)=>
    {
        const styl={
            position:"absolute",
            padding:"8px",
            backgroundColor:"black",
            color:"white",
            marginLeft:"5px"
        }
    return(
        <div>
            <div style={styl}>promoted</div>
            <Productcard {...props}></Productcard>
        </div>
    )
    }
}
export default HOC_Promoted;