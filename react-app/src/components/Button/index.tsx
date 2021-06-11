import { ButtonHTMLAttributes, FC } from 'react'
import './index.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  isLoading: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  title,
  isLoading,
  ...props
}) => {
  return (
    <button className="button" {...props}>
      {isLoading ? <div className="donut-spinner" /> : title}
    </button>
  )
}
