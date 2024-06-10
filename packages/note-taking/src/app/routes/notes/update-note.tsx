import { Link, createRoute } from "@tanstack/react-router"
import { notesRoute } from "../../routes"
import { useNotesStore } from "../../../features/notes/hooks/use-notes-store"

export const updateNoteRoute = createRoute({
  getParentRoute: () => notesRoute,
  path: '$noteId/update',
   loader: ({ params }) => {
    return params
  },
  component: () => <UpdateNoteRoute />
})

function UpdateNoteRoute(): JSX.Element {
  const { noteId } = updateNoteRoute.useLoaderData()
  const note = useNotesStore((state) => state.notes.find((note) => note.id === noteId))

  if (!note) return <></>

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold mb-2">{note.title}</h1>
        <div className="flex gap-2 items-center">
          <p className="px-3 py-2 bg-neutral-600 border border-neutral-300 text-neutral-300 rounded-full">Edition mode</p>
          <Link to=".." params={ noteId } className="text-white">Quitter le mode édition</Link>
        </div>
      </div>
      
    </>
  )
}