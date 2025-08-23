import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
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
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex-1"></div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a key={label} href={href} className="transition-colors hover:text-primary">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex-1 justify-end flex">
          <div className="md:hidden">
              <Sheet>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Toggle navigation menu</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                      <SheetHeader>
                          <SheetTitle>Navigation</SheetTitle>
                      </SheetHeader>
                      <div className="grid gap-4 p-4">
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
      </div>
    </header>
  );
}
