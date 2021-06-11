import * as renderer from 'react-test-renderer'
import { Input } from '../../src/components/Input'

describe('<Input /> component', () => {
  test('should renders correctly', async () => {
    const props = {
      title: 'Email',
      ref: null,
    }

    const tree = renderer.create(<Input {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
