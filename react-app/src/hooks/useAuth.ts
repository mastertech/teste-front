import { FC, useEffect, useState } from 'react'
import config from '../config'
import { apiHelper } from '../helpers/apiHelper'
import { history } from '../helpers/history'
import { isValidUrl } from '../utils/isValidUrl'
import { useLocalStorage } from './useLocalStorage'

/*
  Por "segurança", faço uma verificação se no localstorage existe uma chave chamada
  token, que nada mais é a url da imagem do user,
  apenas pra não ficar algo e estar autorizado apenas trocando o valor do boolean "isAuth"
*/

type FormDataProps = {
  email: string
  password: string
}

type ResponseData = {
  birthday: string
  email: string
  gender: string
  id: number
  name: string
  state: string
  avatar: string
}

export const useAuth = () => {
  const [isAuth, setIsAuth] = useLocalStorage('isAuth', false)
  const [isLoading, setIsLoading] = useState(false)
  const baseUrl = config.baseURL

  useEffect(() => {
    setIsLoading(true)
    const fakeToken = localStorage.getItem('token')

    if (fakeToken && isValidUrl(JSON.parse(fakeToken))) {
      setIsAuth(true)
      return history.push('/dashboard')
    }

    setIsAuth(false)
    setIsLoading(false)
  }, [])

  const handleLogin = async (formData: FormDataProps) => {
    setIsLoading(true)
    const { email, password } = formData
    const { data, error } = await apiHelper({
      url: `${baseUrl}/login`,
      options: {
        method: 'POST',
        data: {
          email,
          password,
        },
      },
    })

    if (error) {
      setIsLoading(false)
      console.log(error)

      if (error.statusCode) {
        return alert(`Erro com status : ${error.statusCode}`)
      }

      return setIsLoading(false)
    }

    const { avatar } = data
    localStorage.setItem('token', JSON.stringify(avatar))

    setIsAuth(true)
    setIsLoading(false)
    return history.push('/dashboard', {
      user: data,
    })
  }

  const handleLogout = () => {
    setIsLoading(true)
    setIsAuth(false)
    localStorage.clear()
    history.push('/login')
    setIsLoading(false)
  }

  return {
    handleLogin,
    handleLogout,
    isAuth,
    isLoading,
  }
}
