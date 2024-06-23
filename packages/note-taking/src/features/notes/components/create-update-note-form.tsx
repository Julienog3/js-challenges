import type { Note, NoteDTO } from "../../../types/note"

import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"

import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import { useNotesStore } from "../hooks/use-notes-store"

import styles from "./create-update-note-form.module.css"

interface Props {
  note?: Note
}

export function CreateUpdateNoteForm(props: Props) {
  const { note } = props
  const navigate = useNavigate()

  const addNote = useNotesStore((state) => state.addNote)
  const updateNote = useNotesStore((state) => state.updateNote)

  const [newNote, setNewNote] = useState<NoteDTO>(note as NoteDTO ?? {
    title: '',
    content: ''
  })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (note) {
      updateNote(newNote as Note)
      return await navigate({ to: "/" })
    }

    addNote(newNote)
    return await navigate({ to: "/" })
  }  

  return (
    <form className={styles['noteForm']} onSubmit={handleSubmit}>
      <div className={styles['noteFormRow']}>
        <label className={styles['noteFormLabel']}>Titre</label>
        <Input type="text" value={newNote.title} onChange={(event) => setNewNote(note => ({
          ...note,
          title: event.target.value
        }))} placeholder="Intitulé de la note"/>
      </div>
      <div className={styles['noteFormRow']}>
        <label className={styles['noteFormLabel']}>Contenu</label>
        <Textarea value={newNote.content} onChange={(event) => setNewNote(note => ({
          ...note,
          content: event.target.value
        }))} placeholder="Lorem ipsum dolor sit amet..."></Textarea>
      </div>
      <Button type="submit">{note ? 'Modifier la note' : 'Ajouter une note'}</Button>
    </form>
  )
}