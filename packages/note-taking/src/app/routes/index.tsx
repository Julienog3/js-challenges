import { useNotesStore } from "../../features/notes/hooks/use-notes-store"
import { Link } from "@tanstack/react-router"

export function AppRoot() {
  const notes = useNotesStore(state => state.notes)
  const hasNotes = notes.length > 0

  return (
    <>
      {hasNotes 
        ? <p className="text-white">Auncun fichier n'est ouvert</p> 
        : <p className="text-white">Vous n'avez pas encore de notes, <Link to="/notes/create" className="text-blue-500">ajoutez-en une</Link></p>
      }
    </>
  )
}