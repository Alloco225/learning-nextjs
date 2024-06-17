import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ]);
}

export async function POST(request: NextRequest){

    const body = await request.json();
    const validation = UserSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    console.log("body", body);
    return NextResponse.json(body, {status: 201}) 
}