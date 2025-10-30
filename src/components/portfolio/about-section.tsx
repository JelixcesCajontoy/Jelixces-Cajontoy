
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
    description: 'Web apps in different architectures: static, single-page, server-rendered, multi-page, or hybrid built for speed, accessibility, and SEO.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Smooth mobile apps with offline storage, native UI, and safe updates using React Native/Expo.',
  },
  {
    icon: SlidersHorizontal,
    title: 'DevOps Basics',
    description: 'Automated builds and releases (CI/CD), Docker containers, and cloud hosting with basic monitoring.',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Small 2D games in Unity with simple controls, basic AI, and optimized UI/performance.',
  },
];

export function AboutSection() {
  const { aboutImage } = placeholderImages;
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" ref={ref} className={cn("w-full py-16 md:py-24 lg:py-32 opacity-0", isVisible && "animate-fade-in-up")}>
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              I started coding in 2021, turning a hobby into a daily practice. I build reliable, accessible apps and have experience in both solo and team projects. During a full-stack developer job, I worked on different technologies, web architecture, databases, secure authentication, and automated releases. With a Computer science degree, I focus on clean, maintainable code backed by strong fundamentals and teamwork.
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
          <div className="flex justify-center items-start">
            <div className="relative p-4 border-2 border-dashed rounded-3xl border-primary/50 sticky top-24">
              <Image
                  src={aboutImage.src}
                  alt="About Me Photo"
                  width={aboutImage.width}
                  height={aboutImage.height}
                  className="rounded-2xl object-cover w-full"
                  data-ai-hint={aboutImage.hint}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
