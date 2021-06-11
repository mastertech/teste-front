import { Card } from '../../components/Card'
import notFoundImage from '../../assets/404.svg'
import './styles.scss'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { history } from '../../helpers/history'

export const NotFound = () => {
  return (
    <Card>
      <img
        src={notFoundImage}
        alt="NotFound image"
        className="not-found-image"
      />
      <Title>Atenção! atenção!</Title>
      <p className="not-found-subtitle">Essa página foi raptada!</p>
      <Button
        title="⬅️ Login"
        isLoading={false}
        onClick={() => history.push('/login')}
      />
    </Card>
  )
}
