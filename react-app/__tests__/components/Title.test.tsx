import * as renderer from 'react-test-renderer'
import { Title } from '../../src/components/Title'

describe('<Title /> component', () => {
  test('should renders correctly', async () => {
    const tree = renderer.create(<Title>Test</Title>).toJSON()
    expect(tree).toMatchSnapshot({
      children: expect.arrayContaining(['Test']),
    })
  })
})
