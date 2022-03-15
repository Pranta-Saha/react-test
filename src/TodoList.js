import React from "react";

export default function TodoList(props)
{
    

    return (
        <div>
            <ul>
                {props.todoList.map((todo, index) => <li key={index}>{todo}
                <button onClick={()=>props.deleteItemFromList(index)}>Delete</button>
                </li>)}
            </ul>
        </div>
    )
}