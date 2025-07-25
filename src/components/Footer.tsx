import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Wifi, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Send 
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Fique por dentro das novidades
            </h3>
            <p className="text-white/80">
              Receba ofertas exclusivas e dicas sobre internet diretamente no seu email
            </p>
          </div>
          
          <div className="max-w-md mx-auto flex gap-3">
            <Input 
              type="email" 
              placeholder="Seu melhor email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-foreground">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FibraNet</span>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Conectando você ao futuro com internet fibra óptica de alta qualidade. 
              Velocidade, estabilidade e suporte que você merece.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-primary" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@fibranet.com.br</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#plans" className="text-white/80 hover:text-white transition-colors">
                  Internet Fibra Residencial
                </a>
              </li>
              <li>
                <a href="#plans" className="text-white/80 hover:text-white transition-colors">
                  Internet Fibra Empresarial
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  WiFi Premium
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Suporte Técnico 24/7
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Consultoria em Conectividade
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Área do Cliente
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Teste de Velocidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Solicitar Suporte
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Status da Rede
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Regulamento Anatel
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Código de Defesa do Consumidor
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-3">Siga-nos</h5>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-white/10" />
        
        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/80 text-sm text-center md:text-left">
            <p>© 2024 FibraNet Telecomunicações. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: 12.345.678/0001-90 | Anatel: 12345</p>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span>Pagamentos seguros:</span>
            <div className="flex gap-2">
              <div className="bg-white/10 px-2 py-1 rounded text-xs">PIX</div>
              <div className="bg-white/10 px-2 py-1 rounded text-xs">Cartão</div>
              <div className="bg-white/10 px-2 py-1 rounded text-xs">Boleto</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;