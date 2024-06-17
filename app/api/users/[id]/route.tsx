import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "../schema";
import prisma from "@/prisma/client";

interface Props {
	params: { id: any };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
	const user = await prisma.user.findUnique({
		where: {
			id: Number(id),
		},
	});
	if (!user) {
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	}
	return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
	const body = await request.json();
	const validation = UserSchema.safeParse(body);
	if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const user = await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: Number(id),
        },
        data: {
            name: body.name,
            email: body.email,
        },
    });

	return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
	const user = await prisma.user.findUnique({
		where: {
			id: Number(id),
		},
	});

	if (!user) {
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	}
    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });

	return NextResponse.json({ success: true });
}
