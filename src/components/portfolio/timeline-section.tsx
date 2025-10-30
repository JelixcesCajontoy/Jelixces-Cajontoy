"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

const timelineEvents = [
  {
    year: '2020',
    title: 'Starting the Journey',
    description: 'Began my coding adventure with C# and Java, focusing on object-oriented programming and building foundational skills through school projects.',
  },
  {
    year: '2021',
    title: 'Diving into Web Development',
    description: 'Explored the world of web development, getting hands-on experience with HTML, CSS, and JavaScript to create my first static websites.',
  },
  {
    year: '2022',
    title: 'Embracing React',
    description: 'Leveled up my front-end skills by learning React.js. Started building dynamic and interactive single-page applications.',
  },
  {
    year: '2023',
    title: 'Mobile with Flutter',
    description: 'Expanded my skillset into mobile development with Flutter, creating cross-platform applications for both Android and iOS from a single codebase.',
  },
];

export function TimelineSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="timeline" ref={ref} className={cn("w-full py-16 md:py-24 lg:py-32 opacity-0", isVisible && "animate-fade-in-up")}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              My Developer Timeline
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A brief history of my journey into software development.
            </p>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute top-1 left-4 md:left-1/2 -translate-x-1/2">
                    <div className="z-10 flex items-center bg-primary rounded-full shadow-lg">
                      <Briefcase className="h-8 w-8 p-1.5 text-primary-foreground" />
                    </div>
                </div>

                <div className={cn(
                  "flex flex-row-reverse md:grid md:grid-cols-2 md:gap-8 items-center",
                  index % 2 !== 0 && "md:flex-row-reverse"
                )}>
                  
                  <div className={cn(
                    "w-full px-4 py-2 md:p-0",
                    index % 2 !== 0 ? "md:text-left" : "md:text-right"
                  )}>
                    <div className="md:hidden"></div> {/* Spacer for mobile */}
                  </div>
                  
                  <div className={cn(
                    "flex-1 pl-12 md:pl-0",
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  )}>
                    <div className="px-6 py-4 rounded-lg border bg-secondary/50 shadow-md">
                        <div className="font-bold text-lg text-primary">{event.year}</div>
                        <h3 className="font-headline text-xl font-semibold mb-1">{event.title}</h3>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}