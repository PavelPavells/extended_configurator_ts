/**
 * Импорт зависимостей из NPM
 */
import React, { Suspense, lazy } from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// @ts-ignore
import { connect } from 'react-redux';

/**
 * Импорт прелоадера
 */
import Loader from '../__utils__/Loader/Loader';

/**
 * Импорт стилей
 */
import './Layouts.scss';

/**
 * Импорт Компонентов
 */
const Main = lazy(() => import('../components/main/Main'));
// @ts-ignore
const Barrier = lazy(() => import('../components/barrier/Barrier'));
const Turnstile = lazy(() => import('../components/turnstile/Turnstile'));
const moduleOffer = lazy(() => import('../components/turnstile/Offer/Offer'));

class Layout extends React.PureComponent {
    render () {
        return (
            <Router>
                <Suspense fallback={<div><Loader /></div>}>

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
                </Suspense>
            </Router>
        );
    }
}
export default connect(null, null)(Layout);
