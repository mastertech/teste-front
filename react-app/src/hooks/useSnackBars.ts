import { useContext } from 'react'

import { SnackBarContext } from '../context/SnackBarContext'

const useSnackBars = () => useContext(SnackBarContext)

export { useSnackBars }
