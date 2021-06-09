import { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

type IProps = {
  url: string
  options: AxiosRequestConfig
}

export const useAxios = ({ url, options }: IProps) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await api(url, options)
      setResponse(response.data)
    } catch (error) {
      setError(error)
    }
    setloading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { response, error, loading }
}
