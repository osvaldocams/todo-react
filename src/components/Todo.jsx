
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const Todo = ({todo, setTodo, deleteTodo}) => {

    const [completed, setCompleted] = useState(false)

    const handleDelete = ()=>{
        const answer = confirm('Deseas eliminar esta tarea?')
        if(answer){
            deleteTodo(todo.id)
        }
    }
    const handleCompleted = ()=>{
        if(!completed){
            setCompleted(true)
            return
        }
        setCompleted(false)
    }
    return (
        <div className="bg-transparent border-[1px] rounded-md mb-2 grid grid-cols-6 place-content-center items-center max-w-[500px]">
            <li 
                className={`col-start-1 col-end-5 p-2 text-2xl cursor-pointer ${completed && 'line-through opacity-50'}`}
                onClick={handleCompleted}
                >{todo.input} 
            </li>
            <FaEdit
                className="text-4xl bg-blue-700 text-white border-[1px] rounded-md p-[5px] cursor-pointer justify-self-center col-start-5 col-end-6 hover:bg-fuchsia-500"
                onClick={()=>setTodo(todo)}
            />
            <BsTrash
                className="text-4xl bg-blue-700 text-white border-[1px] rounded-md p-[5px] cursor-pointer justify-self-center col-start-6 col-end-7 hover:bg-fuchsia-500"
                onClick={handleDelete}
            />
        </div>
        
    )
}

export default Todo
