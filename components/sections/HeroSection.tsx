import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="py-4 md:py-32"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content="Muhammad Faiz" />
        <meta itemProp="jobTitle" content="Software Engineer" />
        <meta itemProp="address" content="Cirebon, Indonesia" />
        <meta itemProp="image" content="/muhammad-faiz.webp" />
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <Badge className="mb-4">Available for hire</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&#39;m <br />
              <span className="text-primary">Muhammad Faiz 👋</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mt-2 text-muted-foreground">
              Software Engineer
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md space-y-2">
            <span>I’m a software engineer from Cirebon, Indonesia.</span>
            <br />
            <span>
              Not a coffee person ☕🚫, but always ready for a good Barcelona
              match ⚽🔵🔴.
            </span>
            <br />
            <span>
              <span className="text-blue-500 font-bold">#Visca</span>
              <span className="text-red-500 font-bold">Barca</span>
            </span>
          </p>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/muhammadfaiz19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub - Muhammad Faiz"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/muhammad-faiz-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn - Muhammad Faiz"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://instagram.com/empaiss_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - Muhammad Faiz"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="mailto:mfaiz2727@gmail.com"
                aria-label="Email Muhammad Faiz"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto md:ml-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 animate-pulse" />
          <div className="absolute inset-[10%] rounded-full bg-muted" />
          <Image
            src="/muhammad-faiz.webp"
            alt="Muhammad Faiz - Software Engineer"
            title="Muhammad Faiz - Software Engineer"
            width={400}
            height={400}
            className="rounded-full relative z-10 p-2"
            priority
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
