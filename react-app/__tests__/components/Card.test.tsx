import * as renderer from 'react-test-renderer'
import { Card } from '../../src/components/Card'

describe('<Card /> component', () => {
  test('should renders correctly', async () => {
    const tree = renderer.create(<Card />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
