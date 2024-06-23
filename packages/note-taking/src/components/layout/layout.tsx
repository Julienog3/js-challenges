import type React from "react";

import { Header } from "./header";
import styles from "./layout.module.css"

export function Layout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <div className={styles['layout']}>
      <Header />
      <main className={styles['page']}>
        {children}
      </main>
    </div>
  )
}

