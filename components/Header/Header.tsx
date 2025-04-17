'use client'

import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function Header() {

    const { data: session } = useSession();
    const route = useRouter();

    return (
        <header className='w-full flex justify-center shadow-xl'>
            <div className="container flex items-center justify-between py-4">
                <Logo />
                <div className='flex items-center gap-10'>
                    <Navigation />
                    {
                        session ? (
                            <Button className='' onClick={() => signOut({callbackUrl: '/'})}>Sair</Button>
                        ) : (
                            <Button className='' onClick={() =>route.replace('/auth/login')}>Entrar</Button>
                        )
                    }
                </div>
            </div>
        </header>
    )
}
