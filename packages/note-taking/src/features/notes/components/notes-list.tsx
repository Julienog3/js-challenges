import type { Note } from "../../../types/note"

import { NoteCard } from "./note-card";
import styles from "./notes-list.module.css"

interface Props {
  notes: Array<Note>
}

export function NotesList(props: Props): JSX.Element {
  const { notes } = props

  return (
    <ul data-testid="notes-list" className={styles['notesList']}>
      {notes.map((note) => <li key={note.id}>
        <NoteCard note={note} />
      </li>)}
    </ul>
  )
}