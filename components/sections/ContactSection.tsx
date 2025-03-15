import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "../ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-6 md:py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground mt-2">
          Lets work together on your next project
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of these channels.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <a
                  href="https://github.com/muhammadfaiz19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary"
                >
                  muhammadfaiz19
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/muhammad-faiz-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary"
                >
                  Muhammad Faiz
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <div>
                <p className="text-sm text-muted-foreground">Instagram</p>
                <a
                  href="https://instagram.com/empaiss_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary"
                >
                  @empaiss_
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:mfaiz2727@gmail.com"
                  className="font-medium hover:text-primary"
                >
                  mfaiz2727@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
