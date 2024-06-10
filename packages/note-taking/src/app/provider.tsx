import React from "react";

export function AppProvider({ children }: React.PropsWithChildren):  JSX.Element {
  return (
    <>
      <React.Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            Spinner
          </div>
        }
      >
        {children}
      </React.Suspense>
    </>
  )
}