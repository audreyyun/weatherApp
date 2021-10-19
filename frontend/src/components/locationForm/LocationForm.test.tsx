import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import LocationForm from './LocationForm'
import TestProvider from '../../__test__/TestProvider';


const LocationFormTest = () => (
    <TestProvider>
        <LocationForm />
    </TestProvider>
);


describe('LocationForm', () => {
    it('should render without crashing', () => {
        const component = render(<LocationFormTest />)
        expect(component.asFragment()).toMatchSnapshot()
    })
})


it('accepts an input value', () => {
    const component = render(<LocationForm />)
    
    const searchInput = component.getByPlaceholderText('Enter City Name') as HTMLInputElement
    fireEvent.input(searchInput, { target: { value: 'Los Angeles' } })
    expect(searchInput.value).toBe('Los Angeles')
})