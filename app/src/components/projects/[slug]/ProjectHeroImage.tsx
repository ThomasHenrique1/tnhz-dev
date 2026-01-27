// components/project/ProjectHeroImage.tsx
import Image from "next/image";

interface ProjectHeroImageProps {
  src: string;
  alt: string;
}

export function ProjectHeroImage({ src, alt }: ProjectHeroImageProps) {
  return (
    <div className="relative h-72 md:h-96 lg:h-[500px] w-full mb-12 rounded-2xl overflow-hidden border border-border/50 shadow-2xl group animate-fade-up">
      {/* Gradiente sutil de fundo para carregamento */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 z-10" />

      <Image
        src={src}
        alt={alt}
        fill

        /* QUALIDADE */
        quality={92}

        /* BLUR */
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0iIzI3MjcyNyIgc3RvcC1vcGFjaXR5PSIwLjA1Ii8+CiAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzE3MTcxNyIgc3RvcC1vcGFjaXR5PSIwLjAyIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNzI3MjciIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg=="

        /* TAMANHO REAL */
        sizes="100vw"

        /* PERFORMANCE */
        priority
        loading="eager"

        /* VISUAL */
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"

        style={{
          objectPosition: "center center",
        }}
      />

      {/* Overlay hover sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

      {/* Gradiente inferior fixo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
      </div>
    </div>
  );
}
