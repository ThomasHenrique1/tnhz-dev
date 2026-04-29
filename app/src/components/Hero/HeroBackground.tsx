"use client";

export const HeroBackground = () => {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Gradiente principal bem suave */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(120,120,255,0.08),transparent_70%)]" />

      {/* Iluminação secundária (bem sutil) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,rgba(0,200,255,0.06),transparent_70%)]" />

      {/* Fade natural */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
    </>
  );
}; 