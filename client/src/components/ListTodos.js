import React,{Fragment, useEffect,useState} from "react";
import EditTodo from "./EditTodos";
const ListTodos=()=>{
    const [todos,setTodos]=useState([])

    //delete todo function
    const deleteTodo=async (id)=>{
        try {
            const deleteTodo=await fetch(`http://localhost:9000/todos/${id}`,
            {method:"DELETE"});

            setTodos(todos.filter(todo=>todo.todo_id!==id));

        } catch (err) {
            console.error(err.message)
        }
    }

    const getTodos=async()=>{
        try {
            const response=await fetch("http://localhost:9000/todos")
            const jsonData=await response.json()
            console.log(jsonData)
            setTodos(jsonData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getTodos();
    },[]);
    return <Fragment>
        
        
        <table className="table mt-5">
            <thead>
                <tr>
                    <td>
                        Description
                    </td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo=>{
                    return <tr key={todo.todo_id}><td>{todo.description}</td>
                    <td><EditTodo todo={todo}/></td>
                    <td><button className="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>

                    </tr>
                })}
            </tbody>
        </table>
         </Fragment>;
};

export default ListTodos;