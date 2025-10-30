
"use client";

import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, SlidersHorizontal, Gamepad2 } from 'lucide-react';
import type { ElementType } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Interactive and responsive web apps built with Flutter Web and Firebase. I focus on clean UI, accessibility, and seamless performance from dashboards to online systems like accreditation and project management platforms.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps built with Flutter, featuring smooth performance, offline access, and modern UI. I enjoy crafting intuitive user experiences that work reliably across Android and iOS.',
  },
  {
    icon: SlidersHorizontal,
    title: 'DevOps Basics',
    description: 'Experience with deploying Flutter web apps using Firebase Hosting and GitHub Pages, managing databases with Firestore, and hosting assets like 3D models on Cloudinary. Comfortable with basic CI/CD and cloud integration workflows.',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Basic experience in creating simple games using Godot Engine and C#. I enjoy exploring game mechanics and crafting engaging interactive experiences.',
  }
];

export function AboutSection() {
  const { aboutImage } = placeholderImages;
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" ref={ref} className={cn("w-full py-16 md:py-24 lg:py-32 opacity-0", isVisible && "animate-fade-in-up")}>
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col space-y-8">
            <div className="md:hidden">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary mb-4">
                About Me
              </h2>
              <div className="relative p-4 border-2 border-dashed rounded-3xl border-primary/50">
                <Image
                    src={aboutImage.src}
                    alt="About Me Photo"
                    width={aboutImage.width}
                    height={aboutImage.height}
                    className="rounded-2xl object-cover w-full h-auto"
                    data-ai-hint={aboutImage.hint}
                />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="hidden md:block text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              I started coding in 2020, turning a hobby into a daily practice. I build reliable, accessible apps and have experience in both solo and team projects. During a full-stack developer job, I worked on different technologies, web architecture, databases, secure authentication, and automated releases. With a Computer science degree, I focus on clean, maintainable code backed by strong fundamentals and teamwork.
              </p>
            </div>

            <div className="space-y-6 w-full">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">What I can do</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                    {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <Card key={service.title} className="bg-transparent border-border/50 shadow-lg text-left">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Icon className="h-6 w-6 text-primary" />
                            <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                        </CardContent>
                        </Card>
                    );
                    })}
                </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-start sticky top-24">
            <div className="relative p-4 border-2 border-dashed rounded-3xl border-primary/50 w-full h-full">
              <Image
                  src={aboutImage.src}
                  alt="About Me Photo"
                  fill
                  className="rounded-2xl object-cover"
                  data-ai-hint={aboutImage.hint}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
