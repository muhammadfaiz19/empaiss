import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Hapi.js",
    "Laravel",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Supabase",
    "Git",
    "GitHub",
    "Postman",
    "CI/CD",
    "Docker",
  ];
  
  return (
    <section id="skills" className="py-6 md:py-12">
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Technologies & Tools</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="px-4 py-2 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  </section>
  );
}