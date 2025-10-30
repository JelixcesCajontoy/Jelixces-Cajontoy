import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-background border-t border-border">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 text-center md:text-left md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
             <h3 className="text-2xl font-bold font-headline text-primary">Get in Touch</h3>
            <p className="mt-2 text-muted-foreground">
              I'm actively looking for new opportunities. Feel free to reach out.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end lg:col-span-2">
            <div className="flex space-x-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-primary"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:" className="text-foreground transition-colors hover:text-primary">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jelixces Cajontoy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
