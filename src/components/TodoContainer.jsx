import Todo from '../components/Todo'

const TodoContainer = ({todos, setTodo, deleteTodo}) => {
    return (
    
        <div className='flex justify-center items-center border-spacing-1'>
            <ul className="min-w-[30%] text-black">                
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        setTodo={setTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
            
        </div>
    )
}

export default TodoContainer
