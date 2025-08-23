'use server';

import { z } from 'zod';

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

    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log it to the console to simulate a successful submission.
    console.log("New contact form submission:", validatedFields.data);

    // In a real-world application, you would handle potential errors from your backend service here.
    // For now, we will assume it's always successful.

    return {
        message: `Thank you, ${validatedFields.data.name}! Your message has been sent successfully.`,
        errors: null,
        success: true,
    }
}
