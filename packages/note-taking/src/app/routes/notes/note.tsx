import { Link, createRoute, useNavigate } from "@tanstack/react-router"
import Markdown from 'react-markdown'

import { Button } from "../../../components/ui/button"
import { useNotesStore } from "../../../features/notes/hooks/use-notes-store"
import { notesRoute } from "../../routes"

import DeleteIcon from './../../../assets/icons/delete.svg?react'
import EditIcon from './../../../assets/icons/edit.svg?react'
import styles from "./note.module.css"

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
  const removeNote = useNotesStore((state) => state.removeNote)
  const navigate = useNavigate()

  if (!note) {
    throw new Error("Note not found")
  }

  async function deleteNote() {
    removeNote(noteId)
    await navigate({ to: '/' })
  }

  return (
    <>
      <div className={styles['noteHeader']}>
        <div className={styles['noteInformations']}>
          <h1 className={styles['noteTitle']}>{note.title}</h1>
          <div className={styles['noteDates']}>
            <p>Crée le {new Date(note.createdAt).toLocaleString()}</p> - 
            <p>Modifié le {new Date(note.updatedAt).toLocaleString()}</p>
          </div>
        </div>
        <div className={styles['noteDates']}>
          <Link to="/notes/$noteId/update" params={{ noteId: note.id }}>
            <Button><EditIcon />Modifier</Button>
          </Link>
          <Button onClick={deleteNote} variant="secondary"><DeleteIcon />Supprimer</Button>
        </div>
      </div>
      <div className={styles['noteContent']}>
        <Markdown>{note.content}</Markdown>
      </div>
    </>
  )
}