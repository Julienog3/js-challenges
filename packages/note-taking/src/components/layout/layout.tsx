import type React from "react";
import { Header } from "./header";
import { Aside } from "./aside";

export function Layout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <main className="container min-h-screen p-4">
          {children}
        </main>
      </div>
    </>
  )
}