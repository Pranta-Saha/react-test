import React from "react";
import SubtaskInput from "./SubtaskInput";


export default function TodoList(props)
{
    return (
        <div>
            <ul>
                {props.todoList.map((todo, index) => <li key={index}>{todo.title}
                <button onClick={()=>props.deleteItemFromList(index)}>Delete</button>
                <input type="checkbox" name="taskStatus" value={1}/>complete
                <SubtaskInput index={index} addSubtaskToList={props.addSubtaskToList} subtask={props.subtask} setSubtask={props.setSubtask}/>

                </li>)}
            </ul>
        </div>
    )
}