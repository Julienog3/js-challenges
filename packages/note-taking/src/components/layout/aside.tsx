import { NotesList } from "../../features/notes/components/notes-list";
import { useNotesStore } from "../../features/notes/hooks/use-notes-store";

export function Aside() {
  const notes = useNotesStore(state => state.notes)

  return <aside className="w-96 border-r border-neutral-600 p-4 overflow-y-scroll">
    <h2 className="font-bold text-xl mb-2 text-white">Notes</h2>
    <NotesList notes={notes}  />
  </aside>
}