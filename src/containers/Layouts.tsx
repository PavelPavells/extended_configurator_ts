/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// @ts-ignore
import { connect } from 'react-redux';

/**
 * Импорт стилей
 */
import './Layouts.scss';

/**
 * Импорт Компонентов
 */
import Main from '../components/main/Main';
import Barrier from '../components/barrier/Barrier';
import Turnstile from '../components/turnstile/Turnstile';
import moduleOffer from '../components/turnstile/Offer/Offer';

class Layout extends React.PureComponent {
    public render () {
        return (
            <Router>
                {/**
                    * Обертка для Компонентов
                    */}
                <div className="components">
                    <Switch>
                        <Route path="/main" component={Main} />
                        <Route exact path="/turnstile" component={Turnstile} />
                        <Route path="/turnstile/offer" component={moduleOffer} />
                        <Route path="/barrier" component={Barrier} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default connect(null, null)(Layout);
