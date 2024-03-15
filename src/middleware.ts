import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value

    const signUrl = new URL('/', request.url)
    const dashboardUrl = new URL('/painel', request.url)

    return NextResponse.next()
    if (!token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.next()
        }
        return NextResponse.redirect(signUrl)
    }
    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(dashboardUrl)
    }
}

export const config = {
    matcher: ['/', '/:path*', '/table', '/painel/:path*']
}