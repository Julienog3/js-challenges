import type React from 'react'

import styles from './button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" 
}

interface PropsWithIcon extends Props {
  icon: React.ReactNode
}

export function Button(props: Props) {
  const { variant = 'primary' } = props

  return <button className={`${styles['button']} ${styles[variant]}`} {...props}>{props.children}</button>
}

export function ButtonWithIcon(props: PropsWithIcon) {
  const { icon, children } = props

  return <Button {...props}>{icon} <p>{children}</p></Button> 

}