'use client'

import {  StarIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navigation() {

    const {data: session} = useSession()

    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <nav className="hidden md:flex items-center gap-6">
            <Link
                href={session ? '/' : '/auth/login'}
                className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
                Home
            </Link>
            <Link
                href={session ? '/categories' : '/auth/login'}
                className={`text-sm font-medium transition-colors ${isActive("/categories") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
                Categorias
            </Link>
            <Link
                href={session ? '/favorites' : '/auth/login'}
                className={`text-sm font-medium transition-colors ${isActive("/favorites") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
                <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4" />
                    Favoritos
                </div>
            </Link>
        </nav>
    )
}
