import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "../schema";

interface Props {
    params: {id: any}

}

export function GET(request: NextRequest, {params: {id}} : Props){
    if(id > 10){
        return NextResponse.json({error: "Not found"}, {status: 404})
    }
    return NextResponse.json({id, name: "Jason"})

}

export async function PUT(request: NextRequest, {params: {id}} : Props){
    const body = await request.json();
    const validation = UserSchema.safeParse(body);
    if(!validation.success) return NextResponse.json(validation.error.errors, {status: 400})

    if(body.id > 10) return NextResponse.json({error: "User not found"}, {status: 404})

    return NextResponse.json({id, name: body.name})

}

export function DELETE(request: NextRequest, {params: {id}} : Props){
    if(id > 10){
        return NextResponse.json({error: "User not found"}, {status: 404})
    }
    return NextResponse.json({success: true})

}