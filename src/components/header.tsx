import { Briefcase, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
];


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="/" className="flex items-center space-x-2 mr-6">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block font-headline">PortfolioPro</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mx-auto">
          {navLinks.map(({ href, label }) => (
            <a key={label} href={href} className="transition-colors hover:text-primary">
              {label}
            </a>
          ))}
        </nav>

        <div className="md:hidden ml-auto">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="grid gap-4 p-4">
                        <a href="/" className="mr-6 flex items-center space-x-2">
                            <Briefcase className="h-6 w-6 text-primary" />
                            <span className="font-bold sm:inline-block font-headline">PortfolioPro</span>
                        </a>
                        <nav className="grid gap-2">
                         {navLinks.map(({ href, label }) => (
                            <a key={label} href={href} className="flex w-full items-center py-2 text-lg font-semibold">
                                {label}
                            </a>
                        ))}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
