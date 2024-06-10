import { Link } from "@tanstack/react-router";
import { Card } from "../../../components/ui/card";
import type { Note } from "../../../types/note";
import { Button } from "../../../components/ui/button";
import { useNotesStore } from "../hooks/use-notes-store";

interface Props {
  note: Note
}

const CONTENT_LENGTH_LIMIT = 140

export function NoteCard(props: Props) {
  const removeNote = useNotesStore((state) => state.removeNote)
  const { note } = props

  const formatToExcerpt = (content: string) => {
    if (content.length <= CONTENT_LENGTH_LIMIT) return content
    return content.substring(0,CONTENT_LENGTH_LIMIT) + '...';
  }

  const handleRemove = () => {
    removeNote(note.id)
  }

  return (
    <Link to="/notes/$noteId" params={{ noteId: note.id }}>
      <Card>
        <h3 className="text-lg font-semibold text-white">{note.title}</h3>
        <p className="text-neutral-400 mb-2">{formatToExcerpt(note.content)}</p>
        <Button onClick={handleRemove}>Supprimer</Button>
      </Card>
    </Link>
  )
}