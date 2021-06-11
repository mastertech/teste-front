import * as renderer from 'react-test-renderer'
import { SnackBar } from '../../src/components/Snackbar'

describe('<SnackBar /> component', () => {
  test('should renders correctly', async () => {
    const props = {
      title: 'Test',
    }
    const tree = renderer.create(<SnackBar {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
