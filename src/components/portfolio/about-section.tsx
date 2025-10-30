"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, SlidersHorizontal } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import myimage from '@/image/Jelix.png';


const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Responsive web apps built with Flutter Web and Firebase. I focus on clean interfaces, accessibility, and seamless performance from dashboards to online accreditation and project management systems.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps made with Flutter, featuring offline storage, modern UI, and smooth performance across Android and iOS devices.',
  },
  {
    icon: SlidersHorizontal,
    title: 'DevOps Basics',
    description: 'Experience deploying Flutter web apps with Firebase Hosting and GitHub Pages, managing Firestore databases, and hosting 3D assets on Cloudinary. Familiar with CI/CD and cloud integration workflows.',
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" ref={ref} className={cn("w-full py-12 md:py-24 lg:py-28 opacity-0", isVisible && "animate-fade-in-up")}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                About Me
              </h2>
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:hidden">
                <Image
                  src={myimage}
                  alt="About Me Photo"
                  fill
                  className="rounded-2xl object-cover"
                  data-ai-hint="professional portrait"
                />
              </div>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I started coding in 2020, turning a hobby into a daily practice. I build reliable, accessible apps and have experience in both solo and team projects. During a full-stack developer job, I worked on different technologies, web architecture, databases, secure authentication, and automated releases. With a Computer science degree, I focus on clean, maintainable code backed by strong fundamentals and teamwork.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">What I can do</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.title} className="bg-transparent border-border/50 shadow-lg text-left h-full">
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
          <div className="hidden md:flex justify-center items-center">
            <div className="relative aspect-[4/5] w-full max-w-md">
              <Image
                src={myimage}
                alt="About Me Photo"
                fill
                className="rounded-2xl object-cover"
                data-ai-hint="professional portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
