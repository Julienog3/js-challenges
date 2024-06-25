import { Link } from "@tanstack/react-router";

import { ButtonWithIcon } from "../ui/button";

import AddIcon from './../../assets/icons/add.svg?react'
import styles from './header.module.css';

export function Header() {
  return <header className={styles['header']}>
    <Link to="/">
      <h1 className={styles['headerTitle']}>Note taking app</h1>
    </Link>
    <Link to="/notes/create">
      <ButtonWithIcon data-testid="add-note-btn" icon={<AddIcon />}>Ajouter une note</ButtonWithIcon>
    </Link>
  </header>
}