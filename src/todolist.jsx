    import { useRef, useState } from "react";
    import "./liststyle.css";

    function Todolist() {
        function Showall(props)
        {
            return(
                <div>
                    {props.data.map((obj) => {
                        // console.log(obj);
                        return(
                        <div key={obj.task}>
                            <input type="checkbox" value={obj.task} checked={obj.status} onChange={(event)=>props.checkboxxx(event.target)}/>{obj.task}
                            <input type="button" value="Edit"/>
                            <input type="button" value="Delete" onClick={dodelete}/>
                        </div>
                        )})}
                </div>
            )
        }
        const[name,setname]=useState("");
        const [show, setShow] = useState([]);
        // const [objects, setadd] = useState({
        //     task: "",
        //     status: 0
        // })
        const [taskary, aryofobjects] = useState([]);
        
        function doadd(name) {
            //setadd({...objects,task:reftask.current.value});
            aryofobjects([...taskary, { task: name, status: 0 }]);
            setname("");
        }
        function doshowall() {
            const seldata = taskary.map((obj) => {
                return obj;
            })
            setShow(seldata);
        }
        function doshowremaining() {
            const seldata2 = taskary.filter((obj) => {
                if (obj.status === 0)
                    return obj;
            });
            setShow(seldata2);
        }
        function doshowcompleted() {
            const seldata3 = taskary.filter((obj) => {
                if (obj.status === true)
                    return obj;
            });
            
            setShow(seldata3);
        }
        function setcheckbox(event)
        {

            const updatedarray= taskary.map((obj)=>
            {
                if(obj.task===event.value)
            return(
                {...obj,status:event.checked}
            )
            else{
                return(obj);
            }
            })

            console.log(updatedarray);
            
            setShow(updatedarray);
            aryofobjects(updatedarray);
        }
        function dodelete()
        {

        }
        return (
            <>
                <div>
                    <center><h2>TO DO LIST</h2></center>
                </div>
                <div className="textbox" style={{ marginLeft: "10px"}} >
                    <input type="text" onChange={setname} className="border-sky-900 border-2"/>
                    <input type="button" onClick={doadd(name)} value="ADD" style={{ marginLeft: "10px", backgroundColor: "black", color: "white" }} />
                </div>
                <div style={{ float: "left", marginLeft: "10px" }}>
                    <input type="button" onClick={doshowall} value="ALL" />
                </div>
                <div style={{ float: "left", marginLeft: "10px" }}>
                    <input type="button" onClick={doshowremaining} value="ACTIVE" />
                </div>
                <div style={{ float: "left", marginLeft: "10px" }}>
                    <input type="button" onClick={doshowcompleted} value="COMPLETED" />
                </div>
                <br></br>
                <br></br>
                <div>
                <Showall data={show} checkboxxx={setcheckbox} dodelete={dodelete}></Showall>
                </div>
            </>
        )
    }
    export default Todolist;