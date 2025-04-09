import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export interface User {
    id: string
    name: string
    email: string
    password: string
    role: string
}

const defaultUser: User = {
    id: '1',
    name: 'User Padrão',
    email: 'user@email.com',
    password: bcrypt.hashSync('123', 10),
    role: 'user'
}

export let users: User[] = [defaultUser]

export async function GET() {
    return NextResponse.json({
        users: users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }))
    })
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        console.log('Tentativa de cadastro com:', body)

        if (!body.name || !body.email || !body.password) {
            console.log('Dados incompletos:', body)
            return NextResponse.json(
                { error: 'Todos os campos são obrigatórios' },
                { status: 400 }
            )
        }

        const emailExists = users.some(user => user.email.toLowerCase() === body.email.toLowerCase())
        if (emailExists) {
            return NextResponse.json(
                { error: 'Este email já está em uso' },
                { status: 400 }
            )
        }

        const hashedPassword = bcrypt.hashSync(body.password, 10)

        const newUser: User = {
            id: Date.now().toString(),
            name: body.name,
            email: body.email,
            password: hashedPassword,
            role: 'user'
        }

        users.push(newUser)

        console.log('Novo usuário cadastrado:', {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name
        })
        console.log('Total de usuários:', users.length)

        return NextResponse.json({
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                role: newUser.role
            }
        }, { status: 201 })

    } catch (error) {
        console.error('Erro ao criar usuário:', error)
        return NextResponse.json(
            { error: 'Falha ao processar a solicitação' },
            { status: 500 }
        )
    }
} 