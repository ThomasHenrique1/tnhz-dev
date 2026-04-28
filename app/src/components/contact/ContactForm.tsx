/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import StatusMessage from "@/app/src/components/contact/StatusMessage";
import HoneypotField from "@/app/src/components/contact/HoneypotField";
import FormField from "@/app/src/components/contact/FormField";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
    _gotcha: string;
  };
  loading: boolean;
  status: "idle" | "success" | "error";
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({ 
  formData, 
  loading, 
  status, 
  onChange, 
  onSubmit 
}: ContactFormProps) {
  return (
    <motion.div variants={fadeUp} className="lg:col-span-2">
      <Card className="h-full border-primary/10 bg-gradient-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">Envie uma mensagem</CardTitle>
          <CardDescription>
            Preencha o formulário abaixo e entrarei em contato o mais rápido possível
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            <StatusMessage status={status} />
            <HoneypotField value={formData._gotcha} onChange={onChange} />
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                id="name"
                name="name"
                label="Nome *"
                type="text"
                placeholder="Seu nome completo"
                required
                value={formData.name}
                onChange={onChange}
              />
              
              <FormField
                id="email"
                name="email"
                label="Email *"
                type="email"
                placeholder="seu@email.com"
                required
                value={formData.email}
                onChange={onChange}
              />
            </div>

            <FormField
              id="subject"
              name="subject"
              label="Assunto"
              type="text"
              placeholder="Qual o motivo do seu contato?"
              value={formData.subject}
              onChange={onChange}
            />

            <FormField
              id="message"
              name="message"
              label="Mensagem *"
              type="textarea"
              placeholder="Descreva seu projeto, dúvida ou proposta..."
              required
              rows={6}
              value={formData.message}
              onChange={onChange}
            />

            <SubmitButton loading={loading} />
            
            <FormFooter />
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SubmitButton({ loading }: { loading: boolean }) {
  return (
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
  );
}

function FormFooter() {
  return (
    <p className="text-xs text-muted-foreground text-center">
      * Campos obrigatórios. Geralmente respondo em até 24 horas.
    </p>
  );
}