import { NotFoundRoute, Outlet, ScrollRestoration, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

import { Layout } from "../components/layout/layout";

import { AppRoot } from "./routes/index";
import { CreateNoteRoute } from "./routes/notes/create-note";
import { noteRoute } from "./routes/notes/note";
import { updateNoteRoute } from "./routes/notes/update-note";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  )
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <AppRoot />
})

export const notesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'notes'
})

const createNoteRoute = createRoute({
  getParentRoute: () => notesRoute,
  path: '/create',
  component: () => <CreateNoteRoute />
})

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => '404 Page introuvable',
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  notFoundRoute,
  notesRoute.addChildren([
    noteRoute,
    createNoteRoute,
    updateNoteRoute,
  ])
])

export const router = createRouter({ routeTree })