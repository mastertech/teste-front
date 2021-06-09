import { FC, useState } from 'react'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { Title } from './components/Title'

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = () => setIsLoading(!isLoading)

  return (
    <Card>
      <Title>Login</Title>
      <Input title="Email" type="email" name="email" inputMode="email" />
      <Input title="Senha" type="password" name="password" inputMode="text" />
      <Button title="Login" isLoading={isLoading} onClick={handleClick} />
    </Card>
  )
}
