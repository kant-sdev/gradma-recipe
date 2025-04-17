'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Header from '@/components/Header/Header'

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status !== 'loading' && !session) {
            router.replace('/login') // ou a rota que desejar
        }
    }, [session, status, router])

    if (status === 'loading') {
        return <p>Carregando...</p> // ou um spinner
    }

    if (!session) {
        return null // enquanto redireciona
    }

    return (
        <>
            <Header />
            {children}
        </>
    )
}
