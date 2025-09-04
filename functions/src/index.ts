import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import {z} from "zod";
import cors from "cors";

const corsHandler = cors({origin: true});

export const contactForm = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const contactFormSchema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters."),
      email: z.string().email("Please enter a valid email address."),
      message: z.string().min(10, "Message must be at least 10 characters."),
    });

    const validatedFields = contactFormSchema.safeParse(req.body);

    if (!validatedFields.success) {
      res.status(400).json({
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Failed to send message. Please check your input.",
      });
      return;
    }

    const {name, email, message} = validatedFields.data;

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `New message from ${name}`,
        text: message,
      });

      res.status(200).json({
        success: true,
        message: `Thank you, ${name}! Your message has been sent successfully.`,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        message: "Sorry, there was an error. Please try again later.",
      });
    }
  });
});
