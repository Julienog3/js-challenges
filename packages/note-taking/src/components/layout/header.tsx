import { Link } from "@tanstack/react-router";

export function Header() {
  return <header className="border-b border-neutral-600 w-full p-4 flex justify-between items-center bg-neutral-800">
    <Link to="/">
      <h1 className="text-white">Note taking app</h1>
    </Link>
    <Link to="/notes/create" className="bg-white rounded px-3 py-2">Ajouter une note</Link>
  </header>
}