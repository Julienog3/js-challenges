import styles from './textarea.module.css'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea(props: Props) {
  return <textarea className={styles['textarea']} {...props}>{props.children}</textarea>
}