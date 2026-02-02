interface StatItem {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

interface StatsBarProps {
  stats: StatItem[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="relative py-6 sm:py-8 bg-linear-to-r from-primary/5  to-secondary/5 border-y border-border/50">
      <div className="absolute inset-0 opacity-5" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group px-2 sm:px-0">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-muted-foreground mb-2">
                <div className="flex items-center justify-center mb-1 sm:mb-0">
                  {stat.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium leading-tight sm:leading-normal">
                  {stat.label}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}