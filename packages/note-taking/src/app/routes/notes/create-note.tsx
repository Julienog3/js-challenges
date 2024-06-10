import { CreateNoteForm } from "../../../features/notes/components/create-note-form"

export function CreateNoteRoute(): JSX.Element {
  return (
    <>
      <h1 className="font-bold text-xl mb-2 text-white">Ajouter une note</h1>
      <CreateNoteForm />
    </>
  )
}
