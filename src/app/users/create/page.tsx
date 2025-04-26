'use client'
import { createUser } from "@/app/api"
import Link from "next/link"
import { useForm } from "react-hook-form"

interface UserForm {
    name: string
    email: string
    age: number
}

export default function UserCreate() {

    const { register, handleSubmit } = useForm<UserForm>()

    function onSubmit(data: UserForm) {
        createUser(data)
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="border-2 border-blue-500 w-fit rounded-full px-2 py-1 mb-[-1rem] z-40 bg-white">Cadastrar Usuário</h1>
                <form className="flex flex-col gap-4 rounded-xl bg-blue-500 border-2 border-blue-500 p-8" onSubmit={handleSubmit(onSubmit)}>
                    <input className="border-1 bg-white px-2 py-1 rounded-md" {...register('name')} type="text" placeholder="Nome" />
                    <input className="border-1 bg-white px-2 py-1 rounded-md" {...register('email')} type="text" placeholder="Email" />
                    <input className="border-1 bg-white px-2 py-1 rounded-md" {...register('age')} type="number" placeholder="Idade" />
                    <div className="flex flex-row justify-around">
                        <Link className="bg-white rounded-xl text-blue-500 w-fit px-2 py-1 self-center
                    hover:scale-105 cursor-pointer hover:bg-blue-500 hover:border-2 hover:border-white
                    hover:text-white transition-all" href="/users">Voltar</Link>
                        <button className="bg-white rounded-xl text-blue-500 w-fit px-2 py-1 self-center
                    hover:scale-105 cursor-pointer hover:bg-blue-500 hover:border-2 hover:border-white
                    hover:text-white transition-all " type="submit">Cadastrar</button>
                    </div>
                </form>
            </div >
        </div >
    )
}