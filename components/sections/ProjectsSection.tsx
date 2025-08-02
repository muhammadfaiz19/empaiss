import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "DiaMate",
      description:
        "DiaMate is a smart diabetes self-assessment and education platform powered by ML, built with Next.js, Hapi, and Supabase to promote early detection and healthier lifestyles.",
      image: "/diamate.webp",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Hapi.js",
        "Supabase",
        "PostgreSQL",
        "TensorFlow",
      ],
      link: "https://github.com/DiaMate-Organization",
    },
    {
      title: "GoEvent",
      description:
        "An event management application that simplifies the process of organizing events, from registration and ticket payment to data analysis with engaging visualizations.",
      image: "/goevent.webp",
      tags: ["React", "TypeScript", "MongoDB", "Express.js", "Midtrans", "Chart.js", "Daisy UI"],
      link: "https://goevent-five.vercel.app/",
    },
    {
      title: "WaTask",
      description:
        "A task management application equipped with a WhatsApp reminder feature, ensuring users never miss their important tasks.",
      image: "/watask.webp",
      tags: ["Next.js", "TypeScript", "MongoDB", "Express.js", "WhatsApp Web.js", "Hero UI"],
      link: "https://watask.empaiss.my.id/",
    },
  ];

  return (
    <section id="projects" className="py-6 md:py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="text-muted-foreground mt-2">Some of my recent work</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group">
            <div className="relative overflow-hidden aspect-video">
              <Image
                src={project.image || "/default-project.webp"}
                alt={`${project.title} - Web Development Project using ${project.tags.join(", ")}`}
                title={project.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                decoding="async"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline" asChild>
          <a
            href="https://github.com/muhammadfaiz19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" /> View More on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
