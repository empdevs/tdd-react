import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  render(<App />);//render component App
  const linkElement = screen.getByText(/learn react/i);//get text learn react in screen
  expect(linkElement).toBeInTheDocument();//expect is link to be in the document
});

it('renders without crashing', () => {
  const div = document.createElement('div');//create element div
  ReactDOM.render(<App />, div);//render element div in App Component
  ReactDOM.unmountComponentAtNode(div);//unmount component div in component App
});
