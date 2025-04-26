"use client"
import { useState, useEffect } from "react"
import { getTodos, ITodo } from "./api"

export default function Todo(){
    const [todos,setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        async function fetch(){
            const data = await getTodos();
            data.splice(10);
            setTodos(data)
        }

        fetch()
    },[])

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <p className="text-bold text-2xl">To do List</p>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} -
                        <span className={todo.completed ? 'text-green-800' : 'text-red-800'}> 
                        {todo.completed ? 'Finalizado' : 'Aguardando'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}