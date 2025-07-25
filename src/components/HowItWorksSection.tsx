import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Calendar, 
  Wifi 
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Escolha seu plano",
    description: "Selecione a velocidade ideal para suas necessidades e estilo de vida."
  },
  {
    number: "02",
    icon: Calendar,
    title: "Agendamos a instalação",
    description: "Nosso técnico especializado vai até você no horário mais conveniente."
  },
  {
    number: "03",
    icon: Wifi,
    title: "Internet pronta",
    description: "Conecte todos seus dispositivos e navegue com velocidade máxima."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simples em 3 passos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contratar nossa internet fibra é muito fácil. 
            Veja como funciona o processo completo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover:shadow-card transition-all duration-300 animate-fade-in border-border group hover:scale-105" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;