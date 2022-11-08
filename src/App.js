import React, { useState } from "react";
import ToDoList from "./ToDoList"
import "./App.css";
const App = () => {
  const [Initial, Final] = useState([]);
  const [inputValue, addValue] = useState('');
  const updation = (event) => {
    addValue(event.target.value);
  }
  const buttonClick = () => {
    if (inputValue) {
      Final((item) => {
        return [...item, inputValue]
      });
      addValue("")
    } else {
      alert("Enter something");
    }
  }
  const deleteItem = (id) => {
    Final((item) => {
      return item.filter((arrElm, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 >ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a item" onChange={updation} value={inputValue} required />
        <button onClick={buttonClick}  >+</button>
        <ol>
          {Initial.map((itemval, i) => {
            return <ToDoList val={itemval} key={i} id={i} perform={deleteItem} />
          })}
        </ol>
      </div>
    </div>
  )
}
export default App;
