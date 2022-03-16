import React from "react";
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import SubtaskInput from "./SubtaskInput";

export default function Todo()
{
    const tasks = 
    [
        {
            title: "task1",
            status: 0,
            subtasks: 
            [
                {
                    title: "subtask1",
                    status: 0,
                },
                {
                    title: "subtask1",
                    status: 0,
                },
            ]
        },
        {
            title: "task2",
            status: 0,
            subtasks: 
            [
                {
                    title: "subtask1",
                    status: 0,
                },
                {
                    title: "subtask1",
                    status: 0,
                },
            ]
        },
    ]
    const [todoList, setTodoList] = React.useState(tasks)
    const [inputValue, setInputValue] = React.useState("")
    const [subtask,setSubtask] = React.useState("subtask5");
    const [index, setIndex] = React.useState(1);

    const addItemToList = (input) => {
        let tmptask = {
            title: input,
            status: 0,
            subtasks:[],
        }
        setTodoList([tmptask, ...todoList])
        setInputValue("")
    }
    const addSubtaskToList = () => {
        //console.log(subtask);
        const tmpSubtask = 
        {
            title: subtask,
            status: 0,
        };
        let tmptask = todoList[index-1];
        tmptask['subtasks'] = [tmpSubtask, ...tmptask['subtasks']];
        let tmplist = [...todoList];
        tmplist[index-1] = tmptask;
        setTodoList([...tmplist]);
        setSubtask("")
    }
    const deleteItemFromList = (index) => {
        const tmpTodoList = [...todoList]
        tmpTodoList.splice(index,1)
        setTodoList(tmpTodoList)
    }
    const clearList = () => {
        setTodoList([])
    }

    return(
        <React.Fragment>
            <h1>Todo</h1>
            <TodoInput inputValue = {inputValue} setInputValue = {setInputValue} addItemToList = {addItemToList} />
            <SubtaskInput index={index} setIndex={setIndex} addSubtaskToList={addSubtaskToList} subtask={subtask} setSubtask={setSubtask} />
            <TodoList todoList = {todoList} deleteItemFromList = {deleteItemFromList} addSubtaskToList = {addSubtaskToList} subtask={subtask} setSubtask={setSubtask}/>
            <button onClick={()=>clearList()}>Clear all</button>
        </React.Fragment>
    )
}