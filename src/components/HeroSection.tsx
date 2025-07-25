import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import fiberHero from "@/assets/fiber-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero pt-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">50% OFF por tempo limitado</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Internet Fibra Ultra
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Velocidade Sem Limites
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Conecte-se ao futuro com nossa fibra óptica de última geração. 
              Velocidades de até 1Giga com estabilidade garantida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Assine Agora - 50% OFF
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Teste de Velocidade Grátis
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>99.9% de uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instalação em 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={fiberHero}
                alt="Fibra óptica com efeitos de luz azul"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute top-8 -left-4 bg-white rounded-xl p-4 shadow-card animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="text-2xl font-bold text-primary">1GB</div>
              <div className="text-sm text-muted-foreground">Velocidade máxima</div>
            </div>
            
            <div className="absolute bottom-8 -right-4 bg-white rounded-xl p-4 shadow-card animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;