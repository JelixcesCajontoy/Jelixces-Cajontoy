'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.RESEND_TO_EMAIL;

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

    if (!process.env.RESEND_API_KEY || !toEmail) {
      console.error("RESEND_API_KEY or RESEND_TO_EMAIL is not configured.");
      return {
        message: "Server configuration error. Could not send email.",
        errors: null,
        success: false,
      }
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: [toEmail],
        subject: `New message from ${validatedFields.data.name}`,
        reply_to: validatedFields.data.email,
        text: `Name: ${validatedFields.data.name}\nEmail: ${validatedFields.data.email}\n\nMessage:\n${validatedFields.data.message}`,
      });

      if (error) {
        console.error("Resend error:", error);
        return {
          message: `Sorry, there was an error sending your message. Please try again later.`,
          errors: null,
          success: false,
        };
      }

      return {
          message: `Thank you, ${validatedFields.data.name}! Your message has been sent successfully.`,
          errors: null,
          success: true,
      }

    } catch (exception) {
      console.error("Exception sending email:", exception);
      return {
        message: `An unexpected error occurred. Please try again later.`,
        errors: null,
        success: false,
      };
    }
}
