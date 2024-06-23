import styles from './button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" 
}

export function Button(props: Props) {
  const { variant = 'primary' } = props

  return <button className={`${styles['button']} ${styles[variant]}`} {...props}>{props.children}</button>
}