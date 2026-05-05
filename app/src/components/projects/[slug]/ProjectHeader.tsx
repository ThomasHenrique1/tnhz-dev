// components/project/ProjectHeader.tsx
import { Sparkles, Calendar, Tag, Code, Layers, User } from "lucide-react";

interface ProjectHeaderProps {
  title: string;
  short?: string;
  featured?: boolean;
  status?: string;
  date?: string;
  tags?: string[];
  metadata?: {
    category?: string;
    complexity?: string;
    client?: string;
    role?: string;
  };
}

export function ProjectHeader({
  title,
  short,
  featured,
  status,
  date,
  tags = [],
  metadata
}: ProjectHeaderProps) {
  return (
    <header className="mb-12 animate-fade-up">
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {featured && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/20 border border-primary/30 shadow-sm animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Projeto em Destaque
            </span>
          </div>
        )}

        {status && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-sm font-semibold text-emerald-600">
              {status}
            </span>
          </div>
        )}

        {metadata?.category && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-sm font-semibold text-blue-600">
              {metadata.category}
            </span>
          </div>
        )}
      </div>

      {/* Título */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>

      {/* Descrição */}
      {short && (
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl animate-fade-up animate-delay-100">
          {short}
        </p>
      )}

      {/* Grid de metadados - ATUALIZADO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Data */}
        {date && (
          <MetadataCard
            icon={<Calendar className="w-5 h-5" />}
            label="Data"
            value={new Date(date).toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
            color="primary"
            delay={0}
          />
        )}
        {/* Tags count */}
        {tags.length > 0 && (
          <MetadataCard
            icon={<Tag className="w-5 h-5" />}
            label="Tecnologias"
            value={`${tags.length} tecnologias`}
            color="amber"
            delay={300}
          />
        )}

        {/* Categoria */}
        {metadata?.category && (
          <MetadataCard
            icon={<Layers className="w-5 h-5" />}
            label="Categoria"
            value={metadata.category}
            color="blue"
            delay={400}
          />
        )}

        {/* Complexidade */}
        {metadata?.complexity && (
          <MetadataCard
            icon={<Code className="w-5 h-5" />}
            label="Complexidade"
            value={metadata.complexity}
            color="indigo"
            delay={500}
          />
        )}

        {/* Cliente */}
        {metadata?.client && (
          <MetadataCard
            icon={<User className="w-5 h-5" />}
            label="Cliente"
            value={metadata.client}
            color="rose"
            delay={600}
          />
        )}

        {/* Função */}
        {metadata?.role && (
          <MetadataCard
            icon={<User className="w-5 h-5" />}
            label="Minha Função"
            value={metadata.role}
            color="teal"
            delay={700}
          />
        )}
      </div>
    </header>
  );
}

interface MetadataCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: 'primary' | 'purple' | 'emerald' | 'amber' | 'blue' | 'indigo' | 'rose' | 'teal';
  delay?: number;
}

function MetadataCard({ icon, label, value, color, delay = 0 }: MetadataCardProps) {
  const colorClasses = {
    primary: 'border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary',
    purple: 'border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 text-purple-500',
    emerald: 'border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-600',
    amber: 'border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 text-amber-600',
    blue: 'border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 text-blue-600',
    indigo: 'border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 text-indigo-600',
    rose: 'border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10 text-rose-600',
    teal: 'border-teal-500/20 bg-teal-500/5 hover:bg-teal-500/10 text-teal-600'
  };

  return (
    <div 
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl border
        transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
        ${colorClasses[color]}
        animate-fade-up
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-2 rounded-lg bg-white/5">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}