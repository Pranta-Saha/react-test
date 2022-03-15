import React from "react";

export default function SubtaskInput( index, addSubtaskToList, subtask, setSubtask )
{
    return(
        <div>
            <input style={{margin:'10px'}} 
            value={subtask} 
            onChange={(e)=>setSubtask(e.target.value)}>
            </input>
            <button onClick={()=> addSubtaskToList(subtask,index)}>add Subtask</button>
        </div>
    )
}