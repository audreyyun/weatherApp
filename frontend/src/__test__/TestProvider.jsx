import React from 'react'
import { Provider } from 'react-redux';
import configureStore from '../store/store';

const store = configureStore();

const TestProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default TestProvider;