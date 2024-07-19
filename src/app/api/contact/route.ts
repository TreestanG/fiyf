import { NextRequest, NextResponse } from "next/server";
import { ContactUsOptions } from "@/types/types";
import { Resend } from 'resend'
import ContactUsEmail from "../../../../emails/contact";

const resend = new Resend(process.env.RESEND_KEY)

export async function POST(req: NextRequest) {
    const {
        email,
        firstName,
        message
    }: ContactUsOptions = await req.json()

    let { error } = await resend.emails.send({
        subject: "New message from Contact",
        from: "FIYF <contact@messages.cognitiolearning.com>",
        to: "fremontinspireyouth@gmail.com",
        react: ContactUsEmail({
            email,
            firstName,
            message
        })
    })
    if (error) NextResponse.json({ message: "Failed" }, { status: 500 })

    return NextResponse.json({ message: "Success" }, { status: 200 })
}

