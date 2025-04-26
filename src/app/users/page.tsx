import Link from "next/link";
import { getAllUsers } from "../api";
import { table } from "console";


export default async function Users() {

    const users = await getAllUsers()

    return (
        <div className="flex flex-col w-full h-screen justify-center items-center">
                <h1 className="text-4xl shadow-xl/10 w-[40%] text-center">Lista de usuários</h1>
            <div className="flex flex-col shadow-xl w-[60%] h-fit justify-center items-center self-center p-[10rem] rounded-xl">
                <div className="flex flex-col w-[70%]">
                    <table className="table-fixed shadow-xl/10 text-center">
                        <thead className="text-2xl">
                            <th>Nome</th>
                            <th>Email</th>
                            <th>idade</th>
                        </thead>
                        {users.map((user: any) => (
                            <tbody className="border-2 border-black" key={user.email}>
                                <td className="border-r-2 border-black px-4 py-2">{user.name}</td>
                                <td className="border-r-2 border-black px-4 py-2">{user.email}</td>
                                <td className="border-r-2 border-black px-4 py-2">{user.age}</td>
                            </tbody>
                        ))}
                    </table>
                </div>
                <Link className="bg-white border-blue-500 border-1 rounded-xl text-blue-500 w-fit px-2 py-1 self-center
                    hover:scale-105 cursor-pointer hover:bg-blue-500 hover:border-2 hover:border-white
                    hover:text-white transition-all" href="/users/create">Cadastrar</Link>
            </div>
        </div>
    )
}