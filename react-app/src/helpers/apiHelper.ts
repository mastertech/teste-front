import axios, { AxiosRequestConfig } from 'axios'
import { api } from '../services/api'

type ApiHelperProps = {
  url: string
  options: AxiosRequestConfig
}

export const apiHelper = async ({ url, options }: ApiHelperProps) => {
  try {
    const { data } = await api(url, options)
    return { data, error: null }
  } catch (error) {
    const statusCode = error?.response?.status
    const errorDetail = error?.response?.data?.statusText

    if (statusCode && !errorDetail) {
      return { data: null, error: { statusCode, message: error.message } }
    }

    if (statusCode && errorDetail) {
      return { data: null, error: { statusCode, message: errorDetail } }
    }

    return { data: null, error: error }
  }
}
