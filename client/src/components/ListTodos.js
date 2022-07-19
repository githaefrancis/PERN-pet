import React,{Fragment, useEffect,useState} from "react";

const ListTodos=()=>{
    const [todos,setTodos]=useState([])
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
                    return <tr><td>{todo.description}</td>
                    <td>Edit</td>
                    <td>Delete</td>

                    </tr>
                })}
            </tbody>
        </table>
         </Fragment>;
};

export default ListTodos;