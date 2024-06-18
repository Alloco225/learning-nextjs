import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST (request: NextRequest) {
    await resend.emails.send({
        from: '...',
        to: 'amane.dev@gmail.com',
        subject: 'Hello from Resend!',
        react: WelcomeTemplate({ name: 'Amane' }),
    });

    return NextResponse.json({ success: true });
}