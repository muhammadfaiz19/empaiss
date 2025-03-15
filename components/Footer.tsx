import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <div className="font-bold text-xl mb-2">Muhammad Faiz</div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Faiz. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/muhammadfaiz19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/muhammad-faiz-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
              <a
                href="https://instagram.com/empaiss_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:mfaiz2727@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
