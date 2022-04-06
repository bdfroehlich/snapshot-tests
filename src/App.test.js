import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'


//Jest will look in a special directory, __snapshots__, for a snapshot that matches the test file currently running
test('renders a snapshot', () => {
  //pass a React element in JSX form, App, to renderer.create. 
  //renderer.create renders the element and creates a special output that has a toJSON method
  const tree = renderer.create(<App />).toJSON()
  // console.log(tree)
  //compares the new snapshot in tree to the saved snapshot if one already exists
  expect(tree).toMatchSnapshot()
})
