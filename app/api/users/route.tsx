import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ]);
}

export async function POST(request: NextRequest){

    const body = await request.json();
    if(!body.name) return NextResponse.json({error: "Name is required"}, {status: 400})
    console.log("body", body);
    return NextResponse.json(body, {status: 201}) 
}