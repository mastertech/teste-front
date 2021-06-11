import { FC, forwardRef, HTMLProps, InputHTMLAttributes } from 'react'
import './styles.scss'

type InputProps = HTMLProps<HTMLInputElement> & {
  title: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, ...props }, ref) => {
    return (
      <div className="wrapper">
        <input
          className="floating-input"
          ref={ref}
          placeholder={title}
          {...props}
        />
        <span className="floating-label">{title}</span>
      </div>
    )
  }
)
