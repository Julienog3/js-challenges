import { Link, createRoute } from "@tanstack/react-router"

import { Button } from "../../../components/ui/button"
import { CreateUpdateNoteForm } from "../../../features/notes/components/create-update-note-form"
import { useNotesStore } from "../../../features/notes/hooks/use-notes-store"
import { notesRoute } from "../../routes"

import styles from './note.module.css'

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
      <div className={styles['noteHeader']}>
        <h1 className={styles['noteTitle']}>Modifier la note</h1>
        <div className={styles['noteDates']}>
          <Link to="/notes/$noteId" params={{ noteId }}>
            <Button>Annuler</Button>
          </Link>
          <Link to="/">
            <Button variant="secondary">Revenir aux notes</Button>
          </Link>
        </div>
      </div>
      <CreateUpdateNoteForm note={note} />
    </>
  )
}