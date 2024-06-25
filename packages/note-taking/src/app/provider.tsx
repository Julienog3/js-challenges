import React from "react";

export function AppProvider({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <>
      <React.Suspense
        fallback={
          <div className="">
            Spinner
          </div>
        }
      >
        {children}
      </React.Suspense>
    </>
  )
}