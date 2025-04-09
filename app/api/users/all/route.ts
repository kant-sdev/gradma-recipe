import { NextResponse } from 'next/server'
import { users } from '../route'

// Endpoint interno para retornar todos os usuários com senhas
// Este endpoint não deve ser exposto publicamente em produção!
export async function GET() {
    // Em um ambiente de produção, este endpoint precisaria de autenticação
    // e verificação de permissões para não expor as senhas
    return NextResponse.json({ users })
}