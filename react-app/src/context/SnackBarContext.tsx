import {
  createContext,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { SnackBar } from '../components/Snackbar'

export const SnackBarContext = createContext({
  addAlert: (content: any) => {},
})

const AUTO_DISMISS = 2500

export const SnackBarProvider: FC = ({ children }) => {
  const [alerts, setAlerts] = useState<string[]>([])
  const activeAlertIds = alerts.join(',')
  useEffect(() => {
    if (activeAlertIds.length > 0) {
      const timer = setTimeout(
        () => setAlerts((alerts) => alerts.slice(0, alerts.length - 1)),
        AUTO_DISMISS
      )
      return () => clearTimeout(timer)
    }
  }, [activeAlertIds])

  const addAlert = useCallback(
    (content) => setAlerts((alerts) => [content, ...alerts]),
    []
  )

  const value = useMemo(() => ({ addAlert }), [addAlert])

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {alerts.map((alert) => (
        <SnackBar key={alert} title={alert} />
      ))}
    </SnackBarContext.Provider>
  )
}
