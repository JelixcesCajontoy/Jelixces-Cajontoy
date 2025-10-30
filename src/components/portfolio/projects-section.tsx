
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import cvsuImage from '@/image/cvsuaccre.png';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'CvSU - Bacoor Online Accreditation',
    description: 'An online platform for CvSU to manage and streamline the accreditation process, built with Flutter for the cross-platform frontend and Firebase for backend services.',
    image: cvsuImage,
    imageHint: 'accreditation webapp',
    tags: ['Dart', 'Flutter', 'Firebase'],
    liveUrl: 'https://cvsubacooraccre.web.app/',
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="projects" ref={ref} className={cn("w-full py-16 md:py-24 lg:py-32 opacity-0", isVisible && "animate-fade-in-up")}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my work. See how I turn ideas into reality.
            </p>
          </div>
        </div>
        <div className="grid gap-8 justify-center">
          {projects.map((project, index) => (
            <Card key={project.title} className="flex flex-col overflow-hidden bg-secondary border-secondary-foreground/10 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl max-w-sm">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline mb-2 text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-primary/50 text-primary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full justify-start gap-4">
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
