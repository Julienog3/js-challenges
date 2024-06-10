import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Note, NoteDTO } from "../../../types/note";

interface State {
  notes: Note[]
  addNote: (newNote: NoteDTO) => void
  removeNote: (id: string) => void
}

export const useNotesStore = create<State>()(
  persist(
    (set, get) => ({
      notes: [],
      addNote: (newNote: NoteDTO) => {
        const note: Note = {
          id: crypto.randomUUID(),
          createdAt: new Date().toString(),
          updatedAt: new Date().toString(),
          ...newNote, 
        }
        set({ notes: [...get().notes, note ]})
      },
      removeNote: (id: string) => {
        const newNotes = get().notes.filter((note) => note.id !== id)
        set({ notes: newNotes })
      },
    }),
    {
      name: 'notes-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)