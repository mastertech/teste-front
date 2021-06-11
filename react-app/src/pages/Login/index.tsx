import { FC, FormEvent, useCallback, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import { AuthContext } from '../../context/AuthContext'
import { isValidEmail } from '../../utils/isValidEmail'
import './styles.scss'

export const Login: FC = () => {
  const { handleLogin, isLoading } = useContext(AuthContext)
  const inputEmailRef = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const validateForm = (email: string, password: string) => {
    if (isValidEmail(email) && typeof password === 'string') {
      return true
    }

    return false
  }

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()

    const email = inputEmailRef.current?.value
    const password = inputPassword.current?.value

    if (!email) {
      return alert('Preencha o campo email')
    }

    if (!password) {
      return alert('Preencha o campo senha')
    }

    const isValidForm = validateForm(email, password)

    if (!isValidForm) {
      return alert('O email digitado não é válido!')
    }

    await handleLogin({ email, password })
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Title>Login</Title>
        <Input
          title="Email"
          type="email"
          name="email"
          inputMode="email"
          ref={inputEmailRef}
        />
        <Input
          title="Senha"
          type="password"
          name="password"
          inputMode="text"
          ref={inputPassword}
        />
        <Button type="submit" title="Login ➡️" isLoading={isLoading} />
        <Link to="/any-route" className="easter-egg">
          Clica aqui vai
        </Link>
      </Card>
    </form>
  )
}
