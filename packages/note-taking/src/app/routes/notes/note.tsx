import { Link, createRoute, redirect } from "@tanstack/react-router"
import { notesRoute } from "../../routes"
import { useNotesStore } from "../../../features/notes/hooks/use-notes-store"

export const noteRoute = createRoute({
  getParentRoute: () => notesRoute,
  path: '$noteId',
   loader: ({ params }) => {
    return params
  },
  component: () => <NoteRoute />
})

function NoteRoute(): JSX.Element {
  const { noteId } = noteRoute.useLoaderData()
  const note = useNotesStore((state) => state.notes.find((note) => note.id === noteId))

  if (!note) return <></>

  return (
    <>
      <h1 className="text-white text-3xl font-bold mb-2">{note.title}</h1>
      <div className="flex gap-2">
        <p className="text-neutral-300">Crée le {new Date(note.createdAt).toLocaleString()}</p>
        <p className="text-neutral-300">Modifié le {new Date(note.updatedAt).toLocaleString()}</p>
      </div>
      <p>{note.content}</p>
      <Link to="/notes/$noteId/update" params={{ noteId: note.id }}>Modifier</Link>
    </>
  )
}