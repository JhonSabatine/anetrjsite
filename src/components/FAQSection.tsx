import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a velocidade real que vou receber?",
    answer: "Garantimos 100% da velocidade contratada via cabo de rede. Por WiFi, pode haver pequenas variações dependendo da distância do roteador e interferências, mas sempre acima de 80% da velocidade contratada."
  },
  {
    question: "Tem fidelidade?",
    answer: "Não exigimos fidelidade! Você pode cancelar quando quiser, sem multas ou taxas de cancelamento. Acreditamos que a qualidade do nosso serviço é o que mantém nossos clientes conosco."
  },
  {
    question: "Como é feita a instalação?",
    answer: "Nossa equipe técnica agenda um horário conveniente para você. A instalação é completamente gratuita e inclui: passagem da fibra até sua casa, instalação do equipamento e configuração completa do WiFi."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Não temos fidelidade. Você pode cancelar a qualquer momento através do nosso atendimento. O cancelamento é processado em até 48 horas úteis sem qualquer taxa adicional."
  },
  {
    question: "Qual equipamento é incluído?",
    answer: "Incluímos um roteador WiFi 6 de alta qualidade, completamente configurado. O equipamento fica em comodato (empréstimo) durante a vigência do contrato e deve ser devolvido em caso de cancelamento."
  },
  {
    question: "E se eu tiver problemas técnicos?",
    answer: "Oferecemos suporte técnico 24/7 através de chat, telefone ou WhatsApp. Nossa equipe é especializada e resolve a maioria dos problemas remotamente. Se necessário, enviamos um técnico sem custo adicional."
  },
  {
    question: "Posso mudar de plano depois?",
    answer: "Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Mudanças de plano são processadas em até 24 horas e não há taxa para alterações."
  },
  {
    question: "A instalação demora quanto tempo?",
    answer: "A instalação técnica leva entre 2 a 4 horas, dependendo da complexidade. Nosso prazo para agendamento é de até 48 horas após a contratação, mas geralmente conseguimos instalar no dia seguinte."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossa internet fibra. 
            Não encontrou a resposta? Entre em contato conosco!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-border shadow-sm hover:shadow-card transition-shadow animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              WhatsApp
            </a>
            <a 
              href="tel:1199999999"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;