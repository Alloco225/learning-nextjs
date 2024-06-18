// import { NextRequest, NextResponse } from "next/server";
// import middleware from "next-auth/middleware";
// export default middleware;

export {default} from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//     console.log("Middleware");
//     return NextResponse.redirect(new URL('/new-page', request.url))
// }


export const config = {
    // *: zero or more
    // ?: zero or one
    // +: one or more
    matcher: ['/users']
}