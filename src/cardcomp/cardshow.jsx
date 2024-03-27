import Jsonarray from "./jsonarry.jsx";
import "./cardstyle.css";
function Productcard(props)
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
// function Productcard2({company,price,model,owner,children,design})
// {
//     return(
//     <div className="card-outer card-border">
//         <p style={design}>
//             company:{company};
//         </p>
//         <p>
//             price:{price};
//         </p>
//         <p>
//             model:{model};
//         </p>
//         <p>
//             owner:{owner};
//         </p>
//         <p>
//             <b style={{backgroundColor:design.backgroundColor,padding:design.padding}}>Details</b>
//         </p>
//         <p>
//             {children}
//         </p>
//     </div>
//     )
// }
function Cardshow()
{
    console.log(Jsonarray);
    return(
        <div style={{display:"flex","flex-wrap":"wrap"}}>
                {
                    Jsonarray.map((obj)=>
                    {
                        return(
                            <Productcard {...obj} key={obj.owner}>{obj.path}</Productcard>
                        )
                    })
                }
        </div>
    )
}
{/* <Productcard company={Object.company} price={Object.price} model={Object.model} owner={Object.owner}>{Object.path}</Productcard> */}
{/* <Productcard2 comapny="DELL" design={{color:"red",backgroundColor:"yellow",padding:"10px"}} price="50000" model="inspirion" owner="gabbar singh">its speedy</Productcard2> */}
export default Cardshow;