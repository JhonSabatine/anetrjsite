import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Wifi, 
  Headphones, 
  DollarSign, 
  Clock 
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Ultra Velocidade",
    description: "Até 1GB de download",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "Estabilidade Total",
    description: "99.9% de uptime garantido",
    color: "text-green-500"
  },
  {
    icon: Wifi,
    title: "WiFi Grátis",
    description: "Roteador premium incluso",
    color: "text-purple-500"
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento especializado",
    color: "text-orange-500"
  },
  {
    icon: DollarSign,
    title: "Melhor Preço",
    description: "Sem pegadinhas ou taxas extras",
    color: "text-emerald-500"
  },
  {
    icon: Clock,
    title: "Instalação Rápida",
    description: "Em até 48h na sua casa",
    color: "text-red-500"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher nossa Fibra?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra todos os benefícios que fazem da nossa internet fibra 
            a melhor escolha para sua casa ou empresa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in border-border"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <benefit.icon className={`w-8 h-8 ${benefit.color} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;