import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import App from './App'
import { render } from '@testing-library/react'
import TestProvider from '../__test__/testProvider';

const AppTest = () => (
  <TestProvider >
    <App />
  </TestProvider>
);


describe('App', () => {
  it('should render without crashing', () => {
    const component = render(<AppTest />)
    expect(component.asFragment()).toMatchSnapshot()
  })
})
