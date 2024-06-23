import type { PropsWithChildren } from "react";

import styles from "./card.module.css"

export function Card(props: PropsWithChildren) {
  const { children } = props

  return <article className={styles['card']}>{children}</article>
} 