import type React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {
  return <input className="p-2 text-white bg-neutral-700 border border-neutral-600 rounded-md" {...props}></input>
} 