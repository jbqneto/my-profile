import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const n8nWebhookUrl = 'https://n8n.automation.stagging.online/webhook/profile/contact'

    const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            message,
        }),
    })

    if (!response.ok) {
        return NextResponse.json({ success: false }, { status: response.status })
    }

    return NextResponse.redirect(new URL('/', req.url));
}