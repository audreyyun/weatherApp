import '@testing-library/jest-dom/extend-expect';

import React from 'react'
import WeatherInfo from './WeatherInfo'
import { render } from '@testing-library/react'
import TestProvider from '../../__test__/TestProvider';
// eslint-disable-next-line jest/no-mocks-import
import mockWeather from '../../__mocks__/mockWeather';


// jest.mock('./mockWeather', () => {
    
//     return {
//         mockWeather: () => { 
//             return mockWeather
//         }
//     }
// })
const WeatherInfoTest = () => (
    <TestProvider>
        <WeatherInfo weather={mockWeather} />
    </TestProvider>
);


describe('WeatherInfo', () => {
    it('should render properly', () => {
        const component = render(<WeatherInfoTest />)
        expect(component.asFragment()).toMatchSnapshot()
    })
})
