import '@testing-library/jest-dom/extend-expect';

import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import TestProvider from '../../__test__/TestProvider';


const WeatherTest = () => (
    <TestProvider>
        <Weather />
    </TestProvider>
);


describe('Weather', () => {
    it('should render without crashing', () => {
        const component = render(<WeatherTest />)
        expect(component.asFragment()).toMatchSnapshot()
    })
})
