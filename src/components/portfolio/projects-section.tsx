import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site built with Next.js, Stripe for payments, and a custom CMS. Designed for performance and scalability.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'e-commerce website',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative project management application that helps teams organize tasks, track progress, and meet deadlines. Features real-time updates with WebSockets.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard software',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Personal Blog Engine',
    description: 'A lightweight and fast personal blog created with Astro and Markdown. Focused on content delivery and SEO optimization.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'blog article',
    tags: ['Astro', 'Markdown', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my work. See how I turn ideas into reality.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
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
                <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full justify-start gap-4">
                  <Button asChild variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" />
                      GitHub
                    </a>
                  </Button>
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
