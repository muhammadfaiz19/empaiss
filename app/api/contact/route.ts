import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="background: #007bff; color: #fff; padding: 10px; text-align: center; border-radius: 5px;">📩 New Contact Message</h2>
        <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
        <p style="font-size: 16px; color: #333;"><strong>Subject:</strong> ${subject}</p>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px;">
          <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
          <p style="font-size: 14px; color: #555;">${message}</p>
        </div>
        <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #777;">This message was sent from your contact form.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${subject}`,
      text: message,
      html: emailContent,
    });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
