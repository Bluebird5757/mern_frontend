import "./cardstyle.css";
import obj1 from "./card.module.css";
import obj2 from "./diff.module.css"; 
function card()
{
    const path="./pics/sir.png";
    const path2="https://www.realjavaonline.com/pic/real%20java.jpg";
    const inst="BCE";
    return(
        <div className="card-outer card-border">
            <img src={path2} width={100} height="100" alt="" />
        <center><h4>Rajesh K. Bansal</h4></center>
        <p>
            {inst};
        </p>
        <div className="btn">details</div>
        {/* <div className={obj1.btn}>details</div>
        <div className={obj2.btn}>details</div> */}
        </div>
    )
}
export default card;