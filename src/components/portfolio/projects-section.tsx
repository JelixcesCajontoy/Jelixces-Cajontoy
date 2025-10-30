
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import placeholderImages from '@/image/bcoordinates.png';
import placeholderImages2 from '@/image/cvsuaccre.png';
import placeholderImages1 from '@/image/Tournament Tracker.png';

const projects = [
  {
    title: 'CvSU - Bacoor Online Accreditation',
    description: 'An online platform for CvSU to manage and streamline the accreditation process, built with Flutter for the cross-platform frontend and Firebase for backend services.',
    image: placeholderImages2,
    tags: ['Dart', 'Flutter', 'Firebase'],
    liveUrl: 'https://cvsubacooraccre.web.app/',
  },
  {
    title: 'BCOORDINATES',
    description: 'Bacoordinate is your smart travel companion. Plan your trips, connect with fellow travelers through the forum, and explore destinations with personalized guidance-all in one intuitive app.',
    image: placeholderImages,
    tags: ['Flutter', 'Dart', 'Firebase'],
    liveUrl: '#',
  },
  {
    title: 'Tournament Tracker System',
    description: 'A web and mobile app that streamlines esports tournament management by letting organizers create events, manage teams, and track real-time schedules, standings, and results with automatically updated brackets.',
    image: placeholderImages1,
    tags: ['TypeScript', 'Node.js', 'Tailwind CSS'],
    liveUrl: '#',
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
        <div className="mx-auto grid max-w-5xl items-start gap-8 justify-center sm:grid-cols-2">
          {projects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden bg-secondary border-secondary-foreground/10 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <CardHeader className="p-0">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={project.image.src}
                      alt={project.title}
                      width={project.image.width}
                      height={project.image.height}
                      className="object-cover"
                      data-ai-hint={project.image}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline mb-2 text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4 text-base">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/50 text-primary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex w-full justify-start gap-4">
                    {project.liveUrl !== '#' &&
                      <Button asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2" />
                          Live View
                        </a>
                      </Button>
                    }
                  </div>
                </CardFooter>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
