import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [email, myEmail],
      subject: subject,
      react: (
        <>
          <p>Hello!</p>
          <p>
            Thank you for reaching out and expressing your interest in work
            opportunities or connection. I appreciate the opportunity to
            connect. I will contact you as soon as possible to discuss this
            further. 😊
          </p>
          <p>Best Regards,</p>
          <p>Hong Thy Nguyen</p>
          <p>{myEmail}</p>

          <p>Your message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
