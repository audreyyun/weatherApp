import '@testing-library/jest-dom/extend-expect';

import React from 'react'
import WeatherInfo from './WeatherInfo'
import { render } from '@testing-library/react'
import TestProvider from '../../__test__/testProvider';


const WeatherInfoTest = () => (
    <TestProvider>
        <WeatherInfo />
    </TestProvider>
);


describe('WeatherInfo', () => {
    it('should render properly', () => {
        const component = render(<WeatherInfoTest />)
        expect(component.asFragment()).toMatchSnapshot()
    })
})
