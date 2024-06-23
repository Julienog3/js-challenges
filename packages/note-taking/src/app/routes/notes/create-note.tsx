import { Link } from "@tanstack/react-router";

import { Button } from "../../../components/ui/button";
import { CreateUpdateNoteForm } from "../../../features/notes/components/create-update-note-form";

import styles from './note.module.css'

export function CreateNoteRoute(): JSX.Element {
  return (
    <>
      <div className={styles['noteHeader']}>
        <h1 className={styles['noteTitle']}>Ajouter une note</h1>
        <Link to="/">
          <Button>Revenir aux notes</Button>
        </Link>
      </div>
      <CreateUpdateNoteForm />
    </>
  )
}
