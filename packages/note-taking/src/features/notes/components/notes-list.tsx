import type { Note } from "../../../types/note"
import { NoteCard } from "./note-card";

interface Props {
  notes: Note[]
}

export function NotesList(props: Props): JSX.Element {
  const { notes } = props

  return (
    <ul className="flex flex-col gap-4">
      {notes.map((note) => <li key={note.id}>
        <NoteCard note={note} />
      </li>)}
    </ul>
  )
}