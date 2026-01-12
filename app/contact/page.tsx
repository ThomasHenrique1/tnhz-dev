"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Loader2,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    hp: "" // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        hp: ""
      });
      
      // Auto-reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Vamos trabalhar juntos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a discutir novos projetos, oportunidades criativas ou 
              fazer parte da sua visão.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div variants={fadeUp} className="lg:col-span-1">
              <Card className="h-full border-primary/10 bg-gradient-card backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Informações de Contato</CardTitle>
                  <CardDescription>
                    Entre em contato através dos canais abaixo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="p-2 rounded-md bg-primary/10">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">Email</p>
                        <a 
                          href="mailto:thomasnhenrique@gmail.com" 
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          thomasnhenrique@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                      <div className="p-2 rounded-md bg-secondary/10">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">Telefone</p>
                        <a 
                          href="tel:+5511989844729" 
                          className="text-foreground hover:text-secondary transition-colors"
                        >
                          +55 (11) 98984-4729
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3 rounded-lg bg-accent/5 border border-accent/10">
                      <div className="p-2 rounded-md bg-accent/10">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">Localização</p>
                        <p className="text-foreground">São Paulo, Brasil</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <p className="font-medium text-sm text-muted-foreground mb-4">Redes Sociais</p>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        asChild
                        className="rounded-lg hover:bg-primary/10 hover:border-primary/30"
                      >
                        <Link href="https://linkedin.com" target="_blank">
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        asChild
                        className="rounded-lg hover:bg-secondary/10 hover:border-secondary/30"
                      >
                        <Link href="https://github.com" target="_blank">
                          <Github className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <Card className="h-full border-primary/10 bg-gradient-card backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Envie uma mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entrarei em contato o mais rápido possível
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Status Messages */}
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div>
                          <p className="font-medium text-green-800 dark:text-green-300">Mensagem enviada!</p>
                          <p className="text-sm text-green-700 dark:text-green-400">
                            Obrigado pelo contato. Responderei em breve.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        <div>
                          <p className="font-medium text-red-800 dark:text-red-300">Erro ao enviar</p>
                          <p className="text-sm text-red-700 dark:text-red-400">
                            Houve um problema. Tente novamente ou entre em contato por email.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Honeypot Field (hidden) */}
                    <input
                      type="text"
                      name="hp"
                      value={formData.hp}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Seu nome completo"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-border/50 focus:border-primary focus:ring-primary/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="border-border/50 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Assunto
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Qual o motivo do seu contato?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="border-border/50 focus:border-primary focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Descreva seu projeto, dúvida ou proposta..."
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-border/50 focus:border-primary focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full py-6 text-base font-medium bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Enviar mensagem
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <p className="text-xs text-muted-foreground text-center">
                      * Campos obrigatórios. Geralmente respondo em até 24 horas.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}