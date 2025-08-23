'use server';

import { generateSelfDescription as generateSelfDescriptionFlow, GenerateSelfDescriptionInput } from '@/ai/flows/generate-self-description';
import { z } from 'zod';

const generateSelfDescriptionSchema = z.object({
  workHistory: z.string().min(50, "Please provide a more detailed work history (minimum 50 characters)."),
});

export async function generateSelfDescription(prevState: any, formData: FormData) {
  try {
    const validatedFields = generateSelfDescriptionSchema.safeParse({
      workHistory: formData.get('workHistory'),
    });

    if (!validatedFields.success) {
      return {
        message: 'Invalid input.',
        errors: validatedFields.error.flatten().fieldErrors,
        selfDescription: null,
      };
    }

    const input: GenerateSelfDescriptionInput = {
      workHistory: validatedFields.data.workHistory,
    };

    const result = await generateSelfDescriptionFlow(input);
    
    return {
      message: 'Success',
      errors: null,
      selfDescription: result.selfDescription,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again.',
      errors: null,
      selfDescription: null,
    };
  }
}

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
            message: "Failed to send message.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log it to the console.
    console.log("New contact form submission:", validatedFields.data);

    return {
        message: "Your message has been sent successfully!",
        errors: null,
    }
}
