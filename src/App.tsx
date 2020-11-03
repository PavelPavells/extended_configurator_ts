import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';

import Layouts from './containers/Layouts';

import './App.scss';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="wrapper">
                    <Layouts />
                </div>
            </BrowserRouter>
        </Provider>
    );
}
export default App;
