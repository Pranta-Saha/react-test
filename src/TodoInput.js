import React from "react";

export default function TodoInput( {inputValue, setInputValue, addItemToList} )
{
    return(
        <div>
            <input style={{margin:'10px'}} 
            value={inputValue} 
            onChange={(e)=>setInputValue(e.target.value)}>
            </input>
            <button onClick={()=> addItemToList(inputValue)}>add task</button>
        </div>
    )
}