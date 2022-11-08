import React from "react";
import "./App.css"
const ToDoList = (props) => {
    return (<div className="todo_style">
        <button className="fa-times" onClick={() => { props.perform(props.id) }}>×</button>
        <li>{props.val}</li>
    </div>
    );
}
export default ToDoList;