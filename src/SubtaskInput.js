import React from "react";

export default function SubtaskInput( {index, setIndex, addSubtaskToList, subtask, setSubtask} )
{
    return(
        <div>
            <hr></hr>
            index
            <input style={{margin:'10px'}} 
            value={index} 
            onChange={(e)=>setIndex(e.target.value)}>
            </input><br></br>
            subtask
            <input style={{margin:'10px'}} 
            value={subtask} 
            onChange={(e)=>setSubtask(e.target.value)}>
            </input><br></br>
            <button onClick={()=> addSubtaskToList()}>add Subtask</button>
        </div>
    )
}