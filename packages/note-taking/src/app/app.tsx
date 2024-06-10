import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";
import { AppProvider } from "./provider";

export function App() {
  return <>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </>
}