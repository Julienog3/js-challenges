/* eslint-disable n/no-unsupported-features/node-builtins */
import type { Note, NoteDTO } from "../../../types/note";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  notes: Array<Note>
  addNote: (newNote: NoteDTO) => void
  removeNote: (id: string) => void
  updateNote: (updatedNote: Note) => void
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
      updateNote: (updatedNote: Note) => {
        const oldNote = get().notes.find((note) => note.id === updatedNote.id)

        if (!oldNote) return

        const updatedNotes = get().notes.map((_note) => {
          if (updatedNote.id !== _note.id) {
            return _note;
          }

          return {
            ...updatedNote,
            updatedAt: new Date().toString()
          };
        })

        set({ notes: updatedNotes })
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