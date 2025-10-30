import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { CheckCircle } from 'lucide-react';

const whatICanDo = [
  'Web App Development',
  'Mobile App Development',
  'DevOps & Deployment',
];

export function AboutSection() {
  const { aboutImage } = placeholderImages;
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
             <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A passionate developer who loves to build amazing things.
              </p>
            </div>
            <div className="text-lg space-y-4 text-muted-foreground">
                <p>
                  I am a front-end developer with a passion for creating beautiful and intuitive user interfaces. My expertise lies in modern web technologies, and I enjoy turning complex problems into simple, elegant solutions. I am always looking for new challenges and opportunities to grow as a developer.
                </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">What I Can Do</h3>
              <ul className="grid gap-4">
                {whatICanDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
      </div>
    </section>
  );
}
