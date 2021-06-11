import { FC } from 'react'
import './styles.scss'

export const Title: FC = ({ children }) => {
  return <h1 className="title">{children}</h1>
}
