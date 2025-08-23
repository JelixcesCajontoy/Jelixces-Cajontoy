"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { generateSelfDescription } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Wand2, LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  errors: null,
  selfDescription: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Description
        </>
      )}
    </Button>
  );
}

export function HeroSection() {
  const [state, formAction] = useFormState(generateSelfDescription, initialState);
  const [displayDescription, setDisplayDescription] = useState(
    "A passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions."
  );
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "Success" && state.selfDescription) {
      setDisplayDescription(state.selfDescription);
      toast({
        title: "Success!",
        description: "A new self-description has been generated.",
      });
      formRef.current?.reset();
    } else if (state.message && state.message !== "Success") {
      const errorMessage = state.errors?.workHistory?.[0] || state.message;
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: errorMessage,
      });
    }
  }, [state, toast]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 animate-fade-in-up">
            <Image
                src="https://placehold.co/128x128.png"
                alt="John Doe Headshot"
                width={128}
                height={128}
                className="rounded-full object-cover shadow-lg"
                data-ai-hint="professional headshot"
            />
            <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                John Doe
                </h1>
                <h2 className="text-2xl font-medium text-foreground/80 md:text-3xl">
                Full-Stack Developer
                </h2>
            </div>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              {displayDescription}
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-center animate-fade-in-up animation-delay-200">
             <Card>
              <CardContent className="p-6">
                <form action={formAction} ref={formRef} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="workHistory" className="flex items-center gap-2 font-headline text-lg">
                      <Wand2 className="h-5 w-5 text-accent" />
                      Create your 'About Me'
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Enter your work history, projects, or accomplishments below, and let AI craft a professional self-description for you.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Textarea
                      id="workHistory"
                      name="workHistory"
                      placeholder="e.g., Led the development of a full-stack e-commerce platform using React and Node.js, resulting in a 30% increase in sales..."
                      rows={6}
                      required
                      className="bg-background"
                    />
                     {state.errors?.workHistory && (
                      <p className="text-sm font-medium text-destructive">
                        {state.errors.workHistory[0]}
                      </p>
                    )}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
