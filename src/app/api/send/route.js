// app/api/send/route.js
import { Resend } from 'resend';

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY); // runs only at runtime
  const body = await req.json();

  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: body.to,
      subject: body.subject,
      html: body.html,
    });
    return Response.json(response);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
