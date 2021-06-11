import { FC } from 'react'
import './styles.scss'

export const Card: FC = ({ children }) => {
  return <div className="container">{children}</div>
}
