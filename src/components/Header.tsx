import { Button } from "@/components/ui/button";
import { Wifi, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logoanet.svg?url";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
             <div className="w-20 h-12 rounded-lg bg-white flex items-center justify-center shadow-md">
              <img src={logo} alt="Logo ANet" className="w-20 h-20" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ANet Fibra
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#plans" className="text-foreground hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#coverage" className="text-foreground hover:text-primary transition-colors">
              Cobertura
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="gradient" size="lg">
              <a href="/cadastro">Assine Agora</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#plans"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a
                href="#benefits"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href="#coverage"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cobertura
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button variant="gradient" size="lg" className="mt-4">
                Assine Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;