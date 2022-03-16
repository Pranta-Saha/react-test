import React from "react";
import SubtaskInput from "./SubtaskInput";


export default function TodoList(props)
{
    return (
        <div>
            <hr></hr>
            <ol>
                {props.todoList.map((todo, index) => <li key={index}>{todo.title}
                <button onClick={()=>props.deleteItemFromList(index)}>Delete</button>
                <input type="checkbox" name="taskStatus" value={1}/>complete
                
                <div>
                    <ul>
                        {todo['subtasks'].map((subTask,indx) => <li key={indx}>{subTask.title}
                        <input type="checkbox" name="subtaskStatus" value={1}/>complete
                        </li>)}
                    </ul>
                </div>
                <hr></hr>
                </li>)}
            </ol>
        </div>
    )
}