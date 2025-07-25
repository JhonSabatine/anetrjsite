import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Designer",
    avatar: "MS",
    content: "Mudou minha vida! Trabalho em casa e nunca mais tive problemas de conexão. A velocidade é incrível e o suporte é sempre muito atencioso.",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Empresário",
    avatar: "JS",
    content: "Melhor custo-benefício da região. Recomendo para todos! Minha empresa funciona perfeitamente com esta internet.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Estudante",
    avatar: "AC",
    content: "Instalação super rápida e internet funcionando perfeitamente. Consegui fazer todas as minhas aulas online sem problemas.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja os depoimentos de quem já fez a mudança para nossa internet fibra 
            e descobriu a diferença na velocidade e qualidade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in border-border"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-xl p-6 shadow-card">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">4.9/5 estrelas</div>
              <div className="text-sm text-muted-foreground">Baseado em 10.000+ avaliações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;