import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Form = ({todos, setTodos, todo, setTodo}) => {
    const [input, setInput] = useState('')

    const [error, setError] = useState(false)

    useEffect(()=>{
        if(Object.keys(todo).length > 0){
            setInput(todo.input)
        }
    }, [todo])

    const generateId = ()=>{
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(input.trim() === ''){
            console.log('ta vacio')
            setError(true)
            return
        }
        setError(false)

        //guardar la informacion en un objeto
        const objetoTodo ={
            input,
        }
        if(todo.id){
            objetoTodo.id = todo.id
            const todoActualizado = todos.map(todoState => todoState.id === todo.id ? objetoTodo : todoState)
            setTodos(todoActualizado)
            setTodo({})
        }else{
            objetoTodo.id = generateId()
            
            //añadirla al arreglo del objeto principal
            setTodos([...todos, objetoTodo])
        }

        

        //reiniciamos el input
        setInput('')

    }

    return (
        <>
        <form 
            className='min-h-[20vh] flex items-center justify-center'
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                className='bg-white border-0 p-2 text-2xl text-black'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button 
                type="submit"
                className='border-0 p-2 text-2xl ml-[10px] bg-blue-700 hover:bg-fuchsia-500'
            >
                {todo.id ? <FaCheck /> :<FaPlus />} 
            </button>
        </form>
        {error && (
                <p className=" w-[200px] mx-auto mt-0 mb-8 text-2xl text-center bg-red-400 p-2 rounded-md">campo obligatorio</p>
            )}
        </>
        
    )
}

export default Form
