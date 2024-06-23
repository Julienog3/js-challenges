import { Link } from "@tanstack/react-router"

import { NotesList } from "../../features/notes/components/notes-list"
import { useNotesStore } from "../../features/notes/hooks/use-notes-store"

import styles from "./notes/note.module.css"
export function AppRoot() {
  const notes = useNotesStore(state => state.notes)
  const hasNotes = notes.length > 0

  return (
    <>
      <div className={styles['noteHeader']}>
        <h1 className={styles['noteTitle']}>Toutes les notes</h1>
      </div>
      {hasNotes 
        ? <NotesList notes={notes} />
        : (
          <div className={styles['noteEmpty']}>
            <p className="text-white">Vous n&apos; avez pas encore de notes, <Link to="/notes/create" className="text-blue-500">ajoutez-en une</Link></p>
          </div>
        )
      }
    </>
  )
}