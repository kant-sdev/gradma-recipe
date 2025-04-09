import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const config = {
    matcher: ['/grandmas-recipes/:path*']
}

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request })

    const isAuthenticated = !!token

    if (!isAuthenticated) {
        let from = request.nextUrl.pathname
        if (request.nextUrl.search) {
            from += request.nextUrl.search
        }

        return NextResponse.redirect(
            new URL(`/auth/login?from=${encodeURIComponent(from)}`, request.url)
        )
    }

    return NextResponse.next()
} 