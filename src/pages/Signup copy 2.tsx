/* eslint-disable react-hooks/exhaustive-deps */
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
import { Wifi, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logoanet.svg?url";
import InputMask from "react-input-mask";

/* ------------------------------------------------------------------------- */
/* Helper para buscar endereço no ViaCEP                                     */
/* ------------------------------------------------------------------------- */
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

/* ------------------------------------------------------------------------- */
/* Componente principal                                                      */
/* ------------------------------------------------------------------------- */
const Signup = () => {
  const [formData, setFormData] = useState({
    nome: "",
    login: "",
    senha: "",
    email: "",
    cpf: "",
    rg: "",
    telefone: "",
    celular: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  /* --------------------------------------------------------------------- */
  /* Autocompletar endereço quando o CEP for digitado                       */
  /* --------------------------------------------------------------------- */
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
    }, 400); // espera 400 ms após digitar
    return () => clearTimeout(timer);
  }, [formData.cep]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // aqui você envia para API ou n8n 💡
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-muted/40 py-8">
      <Card className="w-full max-w-5xl">
        <CardHeader className="flex flex-col items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 self-start text-sm font-medium text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-md">
              <img src={logo} alt="Logo ANet" className="w-8 h-8" />
            </div>
            <span className="text-2xl font-bold text-[#0050CC] dark:text-white">
              ANet Fibra
            </span>
          </div>

          <CardTitle className="text-center">Assinar Plano</CardTitle>
          <CardDescription className="text-center">
            Preencha seus dados para criar sua conta e instalar a fibra.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* DADOS PESSOAIS ------------------------------------------------ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
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
                  type="text"
                  placeholder="Usuário"
                  value={formData.login}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="********"
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

              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <InputMask
                  mask="999.999.999-99"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  maskPlaceholder={null}
                >
                  {(inputProps: any) => (
                    <Input
                      {...inputProps}
                      id="cpf"
                      name="cpf"
                      type="text"
                      placeholder="000.000.000-00"
                      required
                    />
                  )}
                </InputMask>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rg">RG</Label>
                <InputMask
                  mask="99.999.999-9"
                  value={formData.rg}
                  onChange={handleInputChange}
                >
                  {(inputProps: any) => (
                    <Input
                      {...inputProps}
                      id="rg"
                      name="rg"
                      type="text"
                      placeholder="00.000.000-0"
                      required
                    />
                  )}
                </InputMask>
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <InputMask
                  mask="(99) 9999-9999"
                  value={formData.telefone}
                  onChange={handleInputChange}
                >
                  {(inputProps: any) => (
                    <Input
                      {...inputProps}
                      id="telefone"
                      name="telefone"
                      type="text"
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
                  value={formData.celular}
                  onChange={handleInputChange}
                >
                  {(inputProps: any) => (
                    <Input
                      {...inputProps}
                      id="celular"
                      name="celular"
                      type="text"
                      placeholder="(00) 9 0000‑0000"
                      required
                    />
                  )}
                </InputMask>
              </div>
            </div>

            {/* ENDEREÇO ------------------------------------------------------ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cep">CEP</Label>
                <InputMask
                  mask="99999-999"
                  value={formData.cep}
                  onChange={handleInputChange}
                >
                  {(inputProps: any) => (
                    <Input
                      {...inputProps}
                      id="cep"
                      name="cep"
                      type="text"
                      placeholder="00000‑000"
                      required
                    />
                  )}
                </InputMask>
              </div>

              <div className="space-y-2">
                <Label htmlFor="endereco">Endereço</Label>
                <Input
                  id="endereco"
                  name="endereco"
                  type="text"
                  placeholder="Rua / Av."
                  value={formData.endereco}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="numero">Número</Label>
                <Input
                  id="numero"
                  name="numero"
                  type="text"
                  placeholder="123"
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
                  type="text"
                  placeholder="Apto / Bloco"
                  value={formData.complemento}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bairro">Bairro</Label>
                <Input
                  id="bairro"
                  name="bairro"
                  type="text"
                  placeholder="Bairro"
                  value={formData.bairro}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  name="cidade"
                  type="text"
                  placeholder="Cidade"
                  value={formData.cidade}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="estado">Estado</Label>
                <Input
                  id="estado"
                  name="estado"
                  type="text"
                  placeholder="UF"
                  value={formData.estado}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <Button type="submit" size="lg" variant="gradient" className="w-full">
              Finalizar Assinatura
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
