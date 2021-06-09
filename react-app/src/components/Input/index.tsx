import { FC, InputHTMLAttributes } from 'react'
import './styles.scss'

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'placeholder' | 'classname'
> & {
  title: string
}

export const Input: FC<InputProps> = ({ title, ...props }) => {
  return (
    <div className="wrapper">
      <input className="floating-input" placeholder={title} {...props} />
      <span className="floating-label">{title}</span>
    </div>
  )
}
