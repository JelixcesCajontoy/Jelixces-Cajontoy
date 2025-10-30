"use client";

import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const skills = [
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Java', logo: '/logos/java.svg' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'Dart', logo: '/logos/dart.svg' },
  { name: 'C#', logo: '/logos/csharp.svg' },
  { name: 'React.js', logo: '/logos/react.svg' },
  { name: 'Vue.js', logo: '/logos/vue.svg' },
  { name: 'Flutter', logo: '/logos/flutter.svg' },
  { name: 'HTML5', logo: '/logos/html5.svg' },
  { name: 'CSS3', logo: '/logos/css3.svg' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
  { name: 'Git', logo: '/logos/git.svg' },
  { name: 'GitHub', logo: '/logos/github.svg' },
  { name: 'Vercel', logo: '/logos/vercel.svg' },
  { name: 'Firebase', logo: '/logos/firebase.svg' },
];

const SkillLogo = ({ name, logo }: { name: string; logo: string }) => (
  <li className="flex-shrink-0 w-24 h-24 flex items-center justify-center mx-4">
    <img src={logo} alt={name} className="h-12 w-12 object-contain" />
  </li>
);

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className={cn("w-full py-16 md:py-24 lg:py-32 opacity-0", isVisible && "animate-fade-in-up")}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Skills & Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical toolkit. I'm always learning and expanding my skills.
            </p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-scroll">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
              {[...skills, ...skills].map((skill, index) => (
                <SkillLogo key={`${skill.name}-${index}`} name={skill.name} logo={skill.logo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
