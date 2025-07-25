import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Gift, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const PromotionSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 47, minutes: 59, seconds: 59 }; // Reset
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Oferta Especial</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Oferta Limitada!
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Primeiros 100 clientes ganham 3 meses grátis + instalação gratuita
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Gift className="w-8 h-8 text-yellow-300" />
                    <h3 className="text-2xl font-bold">Oferta Especial</h3>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>3 meses grátis de internet</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>Instalação completamente gratuita</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>WiFi premium incluso</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>Suporte prioritário</span>
                    </li>
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white text-primary border-white hover:bg-gray-100 font-bold"
                  >
                    Garantir Desconto Agora
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center gap-2 justify-center mb-4">
                    <Clock className="w-6 h-6 text-yellow-300" />
                    <span className="text-lg font-semibold">Tempo restante:</span>
                  </div>
                  
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                      <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                      <div className="text-sm opacity-80">Horas</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                      <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                      <div className="text-sm opacity-80">Min</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                      <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                      <div className="text-sm opacity-80">Seg</div>
                    </div>
                  </div>
                  
                  <p className="text-sm opacity-80">
                    ⚡ Apenas <span className="font-bold text-yellow-300">23 vagas restantes</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm opacity-80">
            * Oferta válida para novos clientes. Sujeita a disponibilidade de cobertura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;