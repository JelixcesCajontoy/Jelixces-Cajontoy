
"use client";

import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, SlidersHorizontal, Gamepad2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'I create responsive web apps with a focus on clean, accessible interfaces and seamless performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'I build cross-platform mobile apps with smooth performance, offline access, and intuitive user experiences.',
  },
  {
    icon: SlidersHorizontal,
    title: 'DevOps Basics',
    description: 'I handle app deployment, manage databases, and set up basic CI/CD workflows for reliable releases.',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'I develop 2D and 3D games, turning creative concepts into interactive and engaging experiences.',
  },
];

export function AboutSection() {
  const { aboutImage } = placeholderImages;
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" ref={ref} className={cn("w-full py-16 md:py-24 lg:py-28 opacity-0", isVisible && "animate-fade-in-up")}>
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            <div className="md:w-1/2 space-y-4 order-2 md:order-1">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I started coding in 2020, turning a hobby into a daily practice. I build reliable, accessible apps and have experience in both solo and team projects. During a full-stack developer job, I worked on different technologies, web architecture, databases, secure authentication, and automated releases. With a Computer science degree, I focus on clean, maintainable code backed by strong fundamentals and teamwork.
              </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center order-1 md:order-2">
               <div className="p-4 border-2 border-dashed rounded-3xl border-primary/50 w-full">
                  <div className="relative w-full aspect-[4/5]">
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
          <div className="space-y-6 pt-10">
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
