import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section id="home" className="py-4 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <Badge className="mb-4">Available for hire</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
              Hi, I&#39;m <span className="text-primary">Muhammad Faiz</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mt-2 text-muted-foreground">
              Software Engineer
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            I’m a software engineer from Cirebon, Indonesia.
            <br />
            Not a coffee person ☕🚫, but always ready for a good Barcelona match
            ⚽🔵🔴.
            <br />
            <span className="text-blue-500 font-bold">#Visca</span>
            <span className="text-red-500 font-bold">Barca</span>
          </p>
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
        <div className="relative aspect-square max-w-md mx-auto md:ml-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 animate-pulse" />
          <div className="absolute inset-[10%] rounded-full bg-muted" />
          <Image
            src="/profile.png"
            alt="empaiss"
            width={400}
            height={400}
            className="rounded-full relative z-10 p-2"
            priority
          />
        </div>
      </div>
    </section>
  );
}
