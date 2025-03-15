import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Header({ theme, toggleTheme }: HeaderProps) {
  
return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <h1 className="font-bold text-xl">Muhammad Faiz</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 text-muted-foreground hover:text-primary"
            >
              {link.name}
              
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Toggle Theme Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          {/* Mobile Menu Button with Dropdown */}
          <div className="md:hidden border border-muted-foreground rounded">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-40 p-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex justify-between items-center py-2 px-3 text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}
