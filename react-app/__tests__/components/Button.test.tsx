import * as renderer from 'react-test-renderer'
import { Button } from '../../src/components/Button'

describe('<Button /> component', () => {
  test('should renders correctly', async () => {
    const props = {
      title: 'Test',
      isLoading: false,
      onClick: () => {
        return
      },
    }

    const tree = renderer.create(<Button {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
