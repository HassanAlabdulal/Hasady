import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Check if the user is trying to access the sign-in page
    if (pathname.includes('/sign-in')) {
        const token = req.cookies.get('token');  // Assuming token is stored in cookies

        if (token) {
            // If a token is present, redirect the user to the homepage
            return NextResponse.redirect(new URL('/', req.url));
        }
    }

    // Continue with the request if not redirecting
    return NextResponse.next();
}
