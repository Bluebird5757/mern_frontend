import Jsonarray from "./jsonarry.jsx";
import "./cardstyle.css";
import HOC_Promoted from "./HOC_Promoted.jsx";
export function Productcard(props)
{
    return(
        <div className="card-outer card-border">
        <p>
            company:{props.company};
        </p>
        <p>
            price:{props.price};
        </p>
        <p>
            model:{props.model};
        </p>
        <p>
            owner:{props.owner};
        </p>
        <p>
            <b>Details</b>
        </p>
        <p>
        <center>
            <img src={props.path} alt="" width={100} height="100" />
        </center>
        </p>
        </div>
    )
}
function Filterbuttoncard({data:dataJsonaray})
{
    const Promotedcard=HOC_Promoted(Productcard);
    function gencard(obj)
    {
        return(
            obj.promoted?<Promotedcard {...obj} key={obj.company}>{obj.path}</Promotedcard>:<Productcard {...obj} key={obj.company}>{obj.path}</Productcard>
        )
    }
    console.log(Jsonarray);
    return(
        <div style={{display:"flex","flexWrap":"wrap"}}>
                {
                    dataJsonaray.map(gencard)
                }
        </div>
    )
}
{/* <Productcard company={Object.company} price={Object.price} model={Object.model} owner={Object.owner}>{Object.path}</Productcard> */}
{/* <Productcard2 comapny="DELL" design={{color:"red",backgroundColor:"yellow",padding:"10px"}} price="50000" model="inspirion" owner="gabbar singh">its speedy</Productcard2> */}
export default Filterbuttoncard;