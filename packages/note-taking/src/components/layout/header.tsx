import { Link } from "@tanstack/react-router";

import { Button } from "../ui/button";

import AddIcon from './../../assets/icons/add.svg?react'
import styles from './header.module.css';

export function Header() {
  return <header className={styles['header']}>
    <Link to="/">
      <h1 className={styles['headerTitle']}>Note taking app</h1>
    </Link>
    <Link to="/notes/create">
      <Button><AddIcon />Ajouter une note</Button>
    </Link>
  </header>
}