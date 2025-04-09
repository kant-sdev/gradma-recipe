import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { User } from '../../users/route'

// Função para verificar as credenciais do usuário
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        console.log('Tentativa de login com:', body)

        // Validação dos campos obrigatórios
        if (!body.email || !body.password) {
            return NextResponse.json(
                { error: 'Email e senha são obrigatórios' },
                { status: 400 }
            )
        }

        // Importar a lista de usuários do API endpoint
        const response = await fetch(new URL('/api/users', request.url))
        if (!response.ok) {
            throw new Error('Falha ao buscar usuários')
        }

        const data = await response.json()
        const users = data.users || []

        console.log('Buscando usuário com email:', body.email)
        console.log('Usuários disponíveis:', users)

        // Encontrar o usuário pelo email
        const user = users.find((user: User) =>
            user.email?.toLowerCase() === body.email.toLowerCase()
        )

        console.log('Usuário encontrado:', user)

        // Se o usuário não existir
        if (!user) {
            return NextResponse.json(
                { error: 'Email ou senha inválidos' },
                { status: 401 }
            )
        }

        // Buscar o usuário completo com senha para verificação
        const allUsers = await fetch(new URL('/api/users/all', request.url))
        const allUsersData = await allUsers.json()
        const userWithPassword = allUsersData.users.find((u: User) => u.id === user.id)

        console.log('Usuário completo encontrado:', userWithPassword)

        if (!userWithPassword || !bcrypt.compareSync(body.password, userWithPassword.password)) {
            console.log('Senha incorreta')
            return NextResponse.json(
                { error: 'Email ou senha inválidos' },
                { status: 401 }
            )
        }

        console.log('Autenticação bem-sucedida')

        // Autenticação bem-sucedida - retornar dados do usuário sem a senha
        return NextResponse.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        console.error('Erro na autenticação:', error)
        return NextResponse.json(
            { error: 'Falha ao processar a autenticação' },
            { status: 500 }
        )
    }
} 