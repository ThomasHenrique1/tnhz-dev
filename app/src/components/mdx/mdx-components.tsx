import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const mdxComponents = {
  h2: ({ children }: Props) => (
    <section className="mt-16 mb-10 scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight mb-4">
        {children}
      </h2>
      <div className="h-1 w-12 bg-primary rounded-full" />
    </section>
  ),

  p: ({ children }: Props) => (
    <p className="text-foreground/85 leading-relaxed mb-6">
      {children}
    </p>
  ),

  ul: ({ children }: Props) => (
    <ul className="grid gap-4 my-6">
      {children}
    </ul>
  ),

  li: ({ children }: Props) => (
    <li className="p-5 rounded-xl border bg-card shadow-sm">
      {children}
    </li>
  ),
};
