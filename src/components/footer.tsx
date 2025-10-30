import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-12">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-sm md:grid-cols-4 md:px-6">
        {/* Column 1: Brand */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-lg text-foreground">Jelixces Cajontoy</h3>
          <p className="mt-2 text-muted-foreground">
            A passionate developer creating modern and responsive web applications.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className="font-semibold text-foreground">Navigate</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#about" className="text-muted-foreground transition-colors hover:text-primary">About</a></li>
            <li><a href="#timeline" className="text-muted-foreground transition-colors hover:text-primary">Timeline</a></li>
            <li><a href="#projects" className="text-muted-foreground transition-colors hover:text-primary">Projects</a></li>
            <li><a href="#skills" className="text-muted-foreground transition-colors hover:text-primary">Skills</a></li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className="font-semibold text-foreground">Connect</h4>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <Github size={18} className="text-muted-foreground" />
              <a href="https://github.com/Chell2003" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                GitHub
              </a>
            </li> 
            <li className="flex items-center gap-2">
              <Linkedin size={18} className="text-muted-foreground" />
              <a href="https://www.linkedin.com/in/jelixces-cajontoy-3046b4189/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-muted-foreground" />
              <a href="mailto:jelixces@gmail.com" className="text-muted-foreground transition-colors hover:text-primary">
                Email me
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Tech Stack */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className="font-semibold text-foreground">Built With</h4>
          <p className="mt-4 text-muted-foreground">
            Next.js, TypeScript, Tailwind CSS, and ShadCN UI.
          </p>
          <p className="mt-4 text-muted-foreground">
            Still in development...
          </p>
          <a href="#home" className="mt-4 text-muted-foreground transition-colors hover:text-primary">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
