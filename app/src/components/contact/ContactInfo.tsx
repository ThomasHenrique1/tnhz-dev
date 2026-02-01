import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContactInfoItem from "@/app/src/components/contact/ContactInfoItem";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactInfo() {
  return (
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
            <ContactInfoItem
              icon={Mail}
              label="Email"
              content="thomasnhenrique@gmail.com"
              href="mailto:thomasnhenrique@gmail.com"
              color="primary"
            />
            
            <ContactInfoItem
              icon={Phone}
              label="Telefone"
              content="+55 (11) 98984-4729"
              href="tel:+5511989844729"
              color="secondary"
            />
            
            <ContactInfoItem
              icon={MapPin}
              label="Localização"
              content="São Paulo, Brasil"
              color="accent"
            />
          </div>

          <SocialLinks />
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SocialLinks() {
  return (
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
  );
}