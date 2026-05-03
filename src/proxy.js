import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request) {

    console.log("massage from proxy!");

    return NextResponse.redirect(new URL('/home', request.url))
}


export const config = {
    matcher: ['/My-Profile'],
}