import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Smartphone, Server } from 'lucide-react';
import type { ElementType } from 'react';

const services = [
  {
    icon: Monitor,
    title: 'Web App Development',
    description: 'I build responsive and performant web applications using modern technologies like React and Next.js, focusing on a great user experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'I create cross-platform mobile applications for iOS and Android using frameworks like Flutter, ensuring a native look and feel.',
  },
  {
    icon: Server,
    title: 'DevOps & Deployment',
    description: 'I handle the deployment and maintenance of applications, using services like Firebase and Vercel to ensure scalability and reliability.',
  },
];

export function AboutSection() {
  const { aboutImage } = placeholderImages;
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 space-y-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A passionate developer who loves to build amazing things.
              </p>
            </div>
            <div className="text-lg space-y-6 text-muted-foreground">
              <p>
                I am a front-end developer with a passion for creating beautiful and intuitive user interfaces. My expertise lies in modern web technologies, and I enjoy turning complex problems into simple, elegant solutions. I am always looking for new challenges and opportunities to grow as a developer.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={aboutImage.src}
              alt="About Me Photo"
              width={aboutImage.width}
              height={aboutImage.height}
              className="rounded-full object-cover aspect-square"
              data-ai-hint={aboutImage.hint}
            />
          </div>
        </div>

        <div className="space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">What I Can Do</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="bg-secondary/50 border-secondary-foreground/10">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                       <div className="bg-primary/10 text-primary p-3 rounded-full">
                          <Icon className="h-6 w-6" />
                       </div>
                      <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
}
