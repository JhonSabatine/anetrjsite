import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Search } from "lucide-react";
import { useState } from "react";

const CoverageSection = () => {
  const [cep, setCep] = useState("");

  const handleCepCheck = () => {
    // Lógica para verificar cobertura
    console.log("Verificando CEP:", cep);
  };

  return (
    <section id="coverage" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Verificar Disponibilidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira se nossa internet fibra está disponível na sua região. 
            Estamos expandindo nossa cobertura constantemente.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Coverage Form */}
          <Card className="border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <MapPin className="w-6 h-6 text-primary" />
                Consultar CEP
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Digite seu CEP
                </label>
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="00000-000"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className="flex-1"
                    maxLength={9}
                  />
                  <Button 
                    variant="gradient" 
                    onClick={handleCepCheck}
                    className="px-6"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-primary-light rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">
                  Regiões com Cobertura Atual:
                </h4>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Centro e adjacências</li>
                  <li>• Zona Sul completa</li>
                  <li>• Zona Norte (principais bairros)</li>
                  <li>• Zona Oeste em expansão</li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Não tem cobertura ainda? Deixe seu contato!
                </p>
                <Button variant="outline" className="w-full">
                  Avisar quando chegar na minha região
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Coverage Stats */}
          <div className="space-y-6">
            <Card className="border-border shadow-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <div className="text-foreground font-medium">Cobertura da Cidade</div>
                  <div className="text-sm text-muted-foreground">E crescendo rapidamente</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border shadow-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-foreground font-medium">Bairros Atendidos</div>
                  <div className="text-sm text-muted-foreground">Principais regiões da cidade</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border shadow-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-foreground font-medium">Fibra Óptica</div>
                  <div className="text-sm text-muted-foreground">Tecnologia de ponta</div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-gradient-primary rounded-lg p-6 text-white text-center">
              <h4 className="font-semibold mb-2">Expansão Acelerada</h4>
              <p className="text-sm opacity-90">
                Estamos investindo para levar nossa fibra para toda a cidade. 
                Meta: 100% de cobertura até o final do ano!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;