import { LucideIcon } from "lucide-react";

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  content: string;
  href?: string;
  color: "primary" | "secondary" | "accent";
}

export default function ContactInfoItem({ 
  icon: Icon, 
  label, 
  content, 
  href, 
  color 
}: ContactInfoItemProps) {
  const colorClasses = {
    primary: "bg-primary/5 border-primary/10",
    secondary: "bg-secondary/5 border-secondary/10",
    accent: "bg-accent/5 border-accent/10"
  };

  const iconColorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent"
  };

  const contentElement = href ? (
    <a 
      href={href} 
      className={`text-foreground hover:text-${color} transition-colors`}
    >
      {content}
    </a>
  ) : (
    <p className="text-foreground">{content}</p>
  );

  return (
    <div className={`flex items-start gap-4 p-3 rounded-lg ${colorClasses[color]}`}>
      <div className={`p-2 rounded-md ${iconColorClasses[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="font-medium text-sm text-muted-foreground">{label}</p>
        {contentElement}
      </div>
    </div>
  );
}   