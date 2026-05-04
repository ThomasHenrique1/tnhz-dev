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
    <div className="relative py-8 bg-gradient-to-r from-primary/10 via-background to-secondary/10 border-y border-border/50">
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center justify-center text-center 
                         p-4 rounded-xl border border-border/50 bg-background/60
                         hover:border-primary/40 hover:shadow-md hover:shadow-primary/10
                         transition-all duration-300"
            >
              
              {/* Icon + Label */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <div className="text-primary">
                  {stat.icon}
                </div>
                <span className="font-medium">
                  {stat.label}
                </span>
              </div>

              {/* Value */}
              <div className="text-2xl sm:text-3xl font-bold 
                              bg-gradient-to-r from-primary to-secondary 
                              bg-clip-text text-transparent">
                {stat.value}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}