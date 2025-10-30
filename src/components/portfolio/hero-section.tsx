"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          <div className="space-y-3">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Jelixces Cajontoy
              </h1>
              <h2 className="text-xl font-medium text-primary md:text-2xl">
              Front-end Developer
              </h2>
              <div className="flex justify-center gap-6 pt-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">Github</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">Linkedin</span>
                </a>
                <a href="mailto:" className="text-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Gmail</span>
                </a>
              </div>
          </div>
          <Button size="lg" asChild>
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
