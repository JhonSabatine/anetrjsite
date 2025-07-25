import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Plano Básico",
    price: "89,90",
    speed: "200MB",
    popular: false,
    features: [
      "200MB de velocidade",
      "WiFi grátis",
      "Suporte 24h",
      "Instalação inclusa",
      "Sem fidelidade"
    ]
  },
  {
    name: "Plano Premium",
    price: "129,90",
    speed: "500MB",
    popular: true,
    features: [
      "500MB de velocidade",
      "WiFi 6 grátis",
      "Suporte prioritário",
      "Netflix incluso",
      "Instalação inclusa",
      "Sem fidelidade"
    ]
  },
  {
    name: "Plano Ultra",
    price: "189,90",
    speed: "1GB",
    popular: false,
    features: [
      "1GB de velocidade",
      "WiFi 6E grátis",
      "Suporte VIP",
      "Streaming bundle",
      "Instalação inclusa",
      "Sem fidelidade"
    ]
  }
];

const PlansSection = () => {
  return (
    <section id="plans" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Temos o plano perfeito para suas necessidades. 
            Todos com instalação grátis e sem fidelidade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-glow' 
                  : 'hover:shadow-card'
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2">
                  <div className="flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">MAIS POPULAR</span>
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'} pb-4`}>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">
                    R$ {plan.price}
                  </div>
                  <div className="text-muted-foreground">/mês</div>
                </div>
                <Badge 
                  variant="secondary" 
                  className="mt-4 bg-primary-light text-primary border-0"
                >
                  {plan.speed} de velocidade
                </Badge>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "gradient"} 
                  className="w-full"
                  size="lg"
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não tem certeza qual plano escolher?
          </p>
          <Button variant="outline" size="lg">
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;