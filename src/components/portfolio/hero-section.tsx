"use client";

import Image from "next/image";

export function HeroSection() {
  const displayDescription = "A passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions.";

  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-36">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in-up animation-delay-200">
          <Image
              src="https://placehold.co/144x144.png"
              alt="John Doe Headshot"
              width={144}
              height={144}
              className="rounded-full object-cover shadow-lg"
              data-ai-hint="professional headshot"
          />
          <div className="space-y-3">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
              John Doe
              </h1>
              <h2 className="text-2xl font-medium text-foreground/80 md:text-3xl">
              Full-Stack Developer
              </h2>
          </div>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {displayDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
