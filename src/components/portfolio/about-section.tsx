import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, SlidersHorizontal } from 'lucide-react';
import type { ElementType } from 'react';

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
];

export function AboutSection() {
  const { aboutImage } = placeholderImages;
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid gap-16 lg:grid-cols-2 items-start">
        <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              About Me
            </h2>
          <div className="flex justify-center items-start lg:hidden">
            <div className="relative p-4 border-2 border-dashed rounded-3xl border-primary/50">
                <Image
                  src={aboutImage.src}
                  alt="About Me Photo"
                  width={aboutImage.width}
                  height={aboutImage.height}
                  className="rounded-2xl object-cover aspect-[4/5]"
                  data-ai-hint={aboutImage.hint}
                />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I started coding in 2020, and what began as a hobby quickly became something I love doing every day. I focus on front-end development, mainly using Flutter and web technologies to build clean, responsive, and accessible interfaces. I’ve worked on projects that mix creativity with functionality from AR-based apps and translation tools to full web systems. My background in Computer Science and research helps me approach problems methodically while keeping the user experience front and center. I care about writing maintainable code and crafting designs that feel intuitive and purposeful.
            </p>
          </div>

          <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">What I can do</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.title} className="bg-transparent border-border/50 shadow-lg">
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
        <div className="hidden lg:flex justify-center items-start">
          <div className="relative p-4 border-2 border-dashed rounded-3xl border-primary/50">
            <Image
              src={aboutImage.src}
              alt="About Me Photo"
              width={aboutImage.width}
              height={aboutImage.height}
              className="rounded-2xl object-cover aspect-[4/5]"
              data-ai-hint={aboutImage.hint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}