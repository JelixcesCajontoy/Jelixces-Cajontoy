'use server';

/**
 * @fileOverview A flow to generate a self-description for a portfolio.
 *
 * - generateSelfDescription - A function that generates the self-description.
 * - GenerateSelfDescriptionInput - The input type for the generateSelfDescription function.
 * - GenerateSelfDescriptionOutput - The return type for the generateSelfDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSelfDescriptionInputSchema = z.object({
  workHistory: z
    .string()
    .describe('A detailed summary of the users work history and achievements.'),
});
export type GenerateSelfDescriptionInput = z.infer<typeof GenerateSelfDescriptionInputSchema>;

const GenerateSelfDescriptionOutputSchema = z.object({
  selfDescription: z
    .string()
    .describe('An engaging and professional self-description generated from the work history.'),
});
export type GenerateSelfDescriptionOutput = z.infer<typeof GenerateSelfDescriptionOutputSchema>;

export async function generateSelfDescription(
  input: GenerateSelfDescriptionInput
): Promise<GenerateSelfDescriptionOutput> {
  return generateSelfDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSelfDescriptionPrompt',
  input: {schema: GenerateSelfDescriptionInputSchema},
  output: {schema: GenerateSelfDescriptionOutputSchema},
  prompt: `You are a professional resume and cover letter writer.

  Based on the provided work history and achievements, generate an engaging and professional self-description for a portfolio website.
  The self-description should highlight key skills and accomplishments, and be tailored to impress potential employers or clients.

  Work History and Achievements: {{{workHistory}}}
  `,
});

const generateSelfDescriptionFlow = ai.defineFlow(
  {
    name: 'generateSelfDescriptionFlow',
    inputSchema: GenerateSelfDescriptionInputSchema,
    outputSchema: GenerateSelfDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
