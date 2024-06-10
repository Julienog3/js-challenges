interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: Props) {
  return <button className="bg-white rounded px-3 py-2 w-fit" {...props}>{props.children}</button>
}