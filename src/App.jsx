import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import TodoContainer from "./components/TodoContainer"


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('task')) ?? [])
  const [todo, setTodo] = useState({})

  useEffect(()=>{
    localStorage.setItem('task', JSON.stringify((todos)))
  }, [todos])

  const deleteTodo = (id) =>{
    const todoActualizado = todos.filter(todo => todo.id !== id)
    setTodos(todoActualizado)
  }

  return (
    <>
      <Header/>
      <Form
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        setTodo={setTodo}
      />
      <TodoContainer
        todos={todos}
        setTodo={setTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default App
