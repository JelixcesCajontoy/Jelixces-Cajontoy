
"use client";

import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, SlidersHorizontal } from 'lucide-react';
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
];

export function AboutSection() {
  const { aboutImage } = placeholderImages;
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" ref={ref} className={cn("w-full py-16 md:py-24 lg:py-32 opacity-0", isVisible && "animate-fade-in-up")}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start text-left space-y-8 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              About Me
            </h2>
        </div>
        
        <div className="flex justify-center items-center mb-8">
            <div className="relative p-4 border-2 border-dashed rounded-3xl border-primary/50">
            <Image
                src={aboutImage.src}
                alt="About Me Photo"
                width={aboutImage.width}
                height={aboutImage.height}
                className="rounded-2xl object-cover max-w-sm w-full"
                data-ai-hint={aboutImage.hint}
            />
            </div>
        </div>

        <div className="space-y-8 flex flex-col items-start text-left">
            <div className="space-y-4">
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I started coding in 2020, and what began as a hobby quickly became something I love doing every day. I focus on front-end development, mainly using Flutter and web technologies to build clean, responsive, and accessible interfaces. I’ve worked on projects that mix creativity with functionality from AR-based apps and translation tools to full web systems. My background in Computer Science and research helps me approach problems methodically while keeping the user experience front and center. I care about writing maintainable code and crafting designs that feel intuitive and purposeful.
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
      </div>
    </section>
  );
}
