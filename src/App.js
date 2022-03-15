import './App.css';
import React from 'react';
import Todo from './Todo';


function App() {
  const [count, setCount] = React.useState(0)
  const [todoList, setList] = React.useState([])
  
  React.useEffect(() => {
    if(count==5)
    {
      setCount(count+10000)
    }
  },[count])


  return (
    <div className="App">
      <div>
        <h1>Hello React</h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <br></br>
        <button onClick={() => setCount(count - count)}>reset</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Todo />
      </div>

    </div>
  );
}

export default App;
