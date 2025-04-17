'use client'

import { ChefHatIcon } from 'lucide-react'
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

export default function Logo() {

    const { data: session } = useSession();

    return (
        <>
            {
                session ? (
                    <Link href="/" className="flex items-center gap-2">
                        <ChefHatIcon className="h-6 w-6 text-primary hidden sm:block icon-color-primary" />
                        <span className="text-xl font-bold">Bella Receitas</span>
                    </Link>
                ) : (
                    <Link href="/" className="flex items-center gap-2">
                        <ChefHatIcon className="h-6 w-6 text-primary hidden sm:block icon-color-primary" />
                        <span className="text-xl font-bold">Bella Receitas</span>
                    </Link>
                )
            }
        </>
    )
}
