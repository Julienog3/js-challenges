import { useState } from "react"
import { useNotesStore } from "../hooks/use-notes-store"
import type { NoteDTO } from "../../../types/note"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { useNavigate } from "@tanstack/react-router"

export function CreateNoteForm() {
  const navigate = useNavigate()

  const addNote = useNotesStore((state) => state.addNote)
  const [note, setNote] = useState<NoteDTO>({
    title: '',
    content: '',
  })

  function createNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addNote(note)
    navigate({ to: "/" })
  }

  return (
    <form className="flex flex-col gap-4 item-start" onSubmit={createNote}>
      <Input type="text" value={note.title} onChange={(e) => setNote(note => ({
        ...note,
        title: e.target.value
      }))} />
      <textarea value={note.content} onChange={(e) => setNote(note => ({
        ...note,
        content: e.target.value
      }))}></textarea>
      <Button type="submit">Ajouter une note</Button>
    </form>
  )
}