import { FC } from 'react'
import './styles.scss'

type SnackBarProps = {
  title: string
}

export const SnackBar: FC<SnackBarProps> = ({ title }) => {
  return <div className="snackbar">{title}</div>
}
