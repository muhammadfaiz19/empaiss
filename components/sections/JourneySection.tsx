import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function JourneySection() {
  const experiences = [
    {
      period: "Feb 2025 - Present",
      role: "Front-End and Back-End Developer Cohort",
      company: "Coding Camp powered by DBS Foundation",
      description:
        "Undergoing comprehensive training in front-end and back-end development, learning best practices in web application development.",
    },
    {
      period: "Sep 2024 - Dec 2024",
      role: "Fullstack Developer Mentee",
      company: "Productzilla Academy",
      description: [
        "Acted as the PIC Engineer in the final project, managing timelines, task priorities, and team workflows.",
        "Contributed to frontend development using React.js, TypeScript, and Tailwind CSS.",
        "Collaborated with the team to implement features and enhance the user interface design.",
        "Created clear documentation to ensure effective communication and workflow efficiency.",
      ],
    },
  ];

  // Education data
  const education = [
    {
      period: "2022 - Present",
      degree: "Bachelor of Informatics Engineering",
      institution: "Universitas Muhammadiyah Cirebon",
      description:
        "Currently pursuing a degree in Informatics Engineering, focusing on software development and web technologies.",
    },
  ];

  return (
    <section id="journey" className="py-6 md:py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">My Journey</h2>
        <p className="text-muted-foreground mt-2">
          Professional experience and education
        </p>
      </div>

      <Tabs defaultValue="experience" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0" />
              <div className="text-sm text-muted-foreground">{exp.period}</div>
              <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
              <div className="text-primary">{exp.company}</div>

              {Array.isArray(exp.description) ? (
                <ul className="mt-2 text-muted-foreground list-disc ml-5 space-y-1">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-muted-foreground">{exp.description}</p>
              )}
            </div>
          ))}
        </TabsContent>

        <TabsContent value="education" className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0" />
              <div className="text-sm text-muted-foreground">{edu.period}</div>
              <h3 className="text-xl font-bold mt-1">{edu.degree}</h3>
              <div className="text-primary">{edu.institution}</div>
              <p className="mt-2 text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}
