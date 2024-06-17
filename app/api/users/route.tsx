import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest){

    const body = await request.json();
    const validation = UserSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    console.log("body", body);
    return NextResponse.json(body, {status: 201}) 
}