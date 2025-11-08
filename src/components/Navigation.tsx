import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">V</span>
            <span className="text-xl font-semibold text-navy">Films</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("stories")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Their Stories
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Varnan
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("stories")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Their Stories
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Varnan
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Let's Talk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
