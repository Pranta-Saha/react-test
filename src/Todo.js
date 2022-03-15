import React from "react";
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Todo()
{
    const [todoList, setTodoList] = React.useState([])
    const [inputValue, setInputValue] = React.useState("")

    const addItemToList = (input) => {
        setTodoList([input, ...todoList])
        setInputValue("")
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
            <TodoList todoList = {todoList} deleteItemFromList = {deleteItemFromList}/>
            <button onClick={()=>clearList()}>Clear all</button>
        </React.Fragment>
    )
}