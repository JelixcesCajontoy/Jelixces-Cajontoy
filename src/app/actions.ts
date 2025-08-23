
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });
    
    if (!validatedFields.success) {
        return {
            message: "Failed to send message. Please check your input.",
            errors: validatedFields.error.flatten().fieldErrors,
            success: false,
        }
    }

    const { name, email, message } = validatedFields.data;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `New message from ${name} via your portfolio`,
            text: message,
            html: `
              <div>
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
              </div>
            `,
        });

        return {
            message: `Thank you, ${name}! Your message has been sent successfully.`,
            errors: null,
            success: true,
        }
    } catch (error) {
        console.error("Failed to send email:", error);
        return {
            message: "Sorry, there was an error sending your message. Please try again later.",
            errors: null,
            success: false,
        }
    }
}
