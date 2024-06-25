import type { Note } from "../../../types/note";

import { Link } from "@tanstack/react-router";

import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { useNotesStore } from "../hooks/use-notes-store";

import DeleteIcon from './../../../assets/icons/delete.svg?react'
import EditIcon from './../../../assets/icons/edit.svg?react'
import styles from "./note-card.module.css"
interface Props {
  note: Note
}

const CONTENT_LENGTH_LIMIT = 140

const formatToExcerpt = (content: string) => {
  if (content.length <= CONTENT_LENGTH_LIMIT) return content
  return content.slice(0,Math.max(0, CONTENT_LENGTH_LIMIT)) + '...';
}

export function NoteCard(props: Props) {
  const removeNote = useNotesStore((state) => state.removeNote)
  const { note } = props

  const handleRemove = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
    removeNote(note.id)
  }

  return (
    <Link to="/notes/$noteId" params={{ noteId: note.id }}>
      <Card data-testid="note-card">
        <div className={styles['noteCardBody']}>
          <h3 className={styles['noteCardTitle']}>{note.title}</h3>
          <p className={styles['noteCardDescription']}>{formatToExcerpt(note.content)}</p>
        </div>
        <footer className={styles['noteCardFooter']}>
          <Link to="/notes/$noteId/update" params={{ noteId: note.id }}>
            <Button><EditIcon /></Button>
          </Link>
          <Button onClick={handleRemove} variant="secondary"><DeleteIcon /></Button>
        </footer>
      </Card>
    </Link>
  )
}