import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new EnzymeAdapter()
})
