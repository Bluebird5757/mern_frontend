import { useState } from "react";
function Counter()
{
    const [hcount,doupdatecountfx]=useState(1);
    const doincreament=()=>
    {
        doupdatecountfx(hcount+1);
    }
    const doincreament3=()=>
    {
        doupdatecountfx((hcount)=>hcount+1);
        doupdatecountfx((hcount)=>hcount+1);
        doupdatecountfx((hcount)=>hcount+1);
        // doupdatecountfx(hcount+1);//here in every line 1+1 is happening as the value is not being updating and no rerendering is being done
        // doupdatecountfx(hcount+1);
        // doupdatecountfx(hcount+1);
    }
const dodecreament=()=>
{
    doupdatecountfx(hcount-1);
}
return(
    <>
        <div>
            <input type="button" value="increament" onClick={doincreament}/>
            <input type="button" value="decreament" onClick={dodecreament}/>
            <input type="button" value="increament by 3" onClick={doincreament3}/>
        </div>
        <div>
            {hcount};
        </div>
    </>
)
}
export default Counter;