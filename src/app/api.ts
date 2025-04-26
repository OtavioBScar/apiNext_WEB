interface UserForm {
    name: string
    email: string
    age: number
}

export async function createUser(data: UserForm) {
    const newUser = {
        name: data.name,
        email: data.email,
        age: Number(data.age)
    }

    const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })

    if(response.status == 200){
        alert('usuário Cadastrado com sucesso!')
    }
}

export async function getAllUsers(){
    const response = await fetch('http://localhost:3000/api/users')
    const json = response.json()

    return json
}