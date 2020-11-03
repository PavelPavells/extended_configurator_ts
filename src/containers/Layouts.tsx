import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Layouts.scss';

import Main from '../components/main/Main';
import Barrier from '../components/barrier/Barrier';
import Turnstile from '../components/turnstile/Turnstile';
import moduleOffer from '../components/turnstile/Offer/moduleOffer';

const Layout = () => {
    return (
        <Router>
            <div className="components">
                <Switch>
                    <Route path="/main" component={Main} />
                    <Route exact path="/turnstile" component={Turnstile} />
                    <Route path="/turnstile/offer" component={moduleOffer} />
                    <Route exact path="/barrier" component={Barrier} />
                </Switch>
            </div>
        </Router>
    );
}

export default Layout;
