import React from 'react';
import { Provider } from 'react-redux';

import App from '../App/App';

const Root = ({ store } : any) => (
    <Provider store={store}>
            <App />
    </Provider>
);

export default Root;