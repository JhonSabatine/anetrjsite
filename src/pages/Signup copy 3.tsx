import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logoanet.svg?url";
import InputMask from "react-input-mask";

/* -------------------------------------------------------------------------
   Helper ‑ ViaCEP
   --------------------------------------------------------------------- */
const fetchAddressByCep = async (cep: string) => {
  const cleanCep = cep.replace(/\D/g, "");
  if (cleanCep.length !== 8) return null;
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    const data = await res.json();
    return data.erro ? null : data;
  } catch {
    return null;
  }
};

/* -------------------------------------------------------------------------
   Componente
   --------------------------------------------------------------------- */
const Signup = () => {
  const [formData, setFormData] = useState({
    nome: "",
    login: "",
    senha: "",
    email: "",
    cpf: "",
    rg: "",
    data_nasc: "",
    endereco: "",
    bairro: "",
    numero: "",
    complemento: "",
    cep: "",
    cidade: "",
    estado: "",
    telefone: "",
    celular: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ------------------------------------------------------------- */
  /* CEP → autopreencher endereço                                  */
  /* ------------------------------------------------------------- */
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (formData.cep) {
        const data = await fetchAddressByCep(formData.cep);
        if (data) {
          setFormData((prev) => ({
            ...prev,
            endereco: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            estado: data.uf || "",
          }));
        }
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [formData.cep]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: enviar para API / n8n
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-20 h-12 rounded-lg bg-white flex items-center justify-center shadow-md overflow-hidden">
                <img src={logo} alt="Logo ANet" className="w-20 h-auto" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ANet Fibra
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Cadastre‑se na ANet
            </h1>
            <p className="text-xl text-muted-foreground">
              Preencha seus dados e tenha internet fibra em sua casa
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Dados para Contratação
              </CardTitle>
              <CardDescription className="text-center">
                Todas as informações são obrigatórias para análise da viabilidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados Pessoais */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Dados Pessoais
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input
                        id="nome"
                        name="nome"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login">Login</Label>
                      <Input
                        id="login"
                        name="login"
                        placeholder="Usuário"
                        value={formData.login}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="senha">Senha</Label>
                      <Input
                        id="senha"
                        name="senha"
                        type="password"
                        placeholder="*******"
                        value={formData.senha}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E‑mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@exemplo.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF</Label>
                      <InputMask
                        mask="999.999.999-99"
                        maskPlaceholder=""
                        value={formData.cpf}
                        onChange={handleInputChange}
                      >
                        {(inputProps: any) => (
                          <Input
                            {...inputProps}
                            id="cpf"
                            name="cpf"
                            placeholder="CPF"
                            required
                          />
                        )}
                      </InputMask>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rg">RG</Label>
                      <InputMask
                        mask="99.999.999-9"
                        maskPlaceholder=""
                        value={formData.rg}
                        onChange={handleInputChange}
                      >
                        {(inputProps: any) => (
                          <Input
                            {...inputProps}
                            id="rg"
                            name="rg"
                            placeholder="RG"
                            required
                          />
                        )}
                      </InputMask>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="data_nasc">Data de Nascimento</Label>
                      <Input
                        id="data_nasc"
                        name="data_nasc"
                        type="date"
                        value={formData.data_nasc}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Endereço */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Endereço
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP</Label>
                      <InputMask
                        mask="99999-999"
                        maskPlaceholder=""
                        value={formData.cep}
                        onChange={handleInputChange}
                      >
                        {(inputProps: any) => (
                          <Input
                            {...inputProps}
                            id="cep"
                            name="cep"
                            placeholder="CEP"
                            required
                          />
                        )}
                      </InputMask>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        placeholder="Cidade"
                        value={formData.cidade}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado</Label>
                      <select
                        id="estado"
                        name="estado"
                        value={formData.estado}
                        onChange={handleInputChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecione</option>
                        {/* ...siglas... */}
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="SP">São Paulo</option>
                        <option value="MG">Minas Gerais</option>
                        {/* adicione as demais */}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="endereco">Endereço</Label>
                      <Input
                        id="endereco"
                        name="endereco"
                        placeholder="Rua / Av."
                        value={formData.endereco}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bairro">Bairro</Label>
                      <Input
                        id="bairro"
                        name="bairro"
                        placeholder="Bairro"
                        value={formData.bairro}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="numero">Número</Label>
                      <Input
                        id="numero"
                        name="numero"
                        placeholder="Número"
                        value={formData.numero}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="complemento">Complemento</Label>
                      <Input
                        id="complemento"
                        name="complemento"
                        placeholder="Apto / Bloco"
                        value={formData.complemento}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Contato */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Contato
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <InputMask
                        mask="(99) 9999-9999"
                        maskPlaceholder={null}
                        value={formData.telefone}
                        onChange={handleInputChange}
                      >
                        {(inputProps: any) => (
                          <Input
                            {...inputProps}
                            id="telefone"
                            name="telefone"
                            placeholder="(00) 0000‑0000"
                            required
                          />
                        )}
                      </InputMask>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="celular">Celular</Label>
                      <InputMask
                        mask="(99) 9 9999-9999"
                        maskPlaceholder={null}
                        value={formData.celular}
                        onChange={handleInputChange}
                      >
                        {(inputProps: any) => (
                          <Input
                            {...inputProps}
                            id="celular"
                            name="celular"
                            placeholder="(00) 9 0000‑0000"
                            required
                          />
                        )}
                      </InputMask>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    📋 Próximos passos:
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Verificaremos a viabilidade técnica no seu endereço</li>
                    <li>• Entraremos em contato em até 24 horas</li>
                    <li>• Agendaremos a instalação gratuita</li>
                    <li>• Internet funcionando em até 48 horas</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="gradient" size="lg" className="flex-1">
                    Solicitar Contratação
                  </Button>
                  <Button type="button" variant="outline" size="lg" asChild>
                    <Link to="/">Voltar ao Site</Link>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Ao continuar, você concorda com nossos {" "}
                  <a href="#" className="text-primary hover:underline">
                    Termos de Uso
                  </a>{" "}
                  e {" "}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
