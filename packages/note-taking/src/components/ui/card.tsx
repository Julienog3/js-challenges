import type { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren) {
  const { children } = props

  return <article className="bg-neutral-700 border border-neutral-600 rounded-md p-3">{children}</article>
} 