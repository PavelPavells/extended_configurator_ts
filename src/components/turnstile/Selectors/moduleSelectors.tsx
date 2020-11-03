import React, { Suspense, lazy } from 'react';
import './moduleSelectors.scss';
import Loader from '../../../__utils__/Loader/Loader';

const SelectorEP = lazy(() => import('./selectors/selectorEP/selectorEP'));
const SelectorEMMarin = lazy(() => import('./selectors/selectorEMMarin/selectorEMMarin'));
const SelectorMifire = lazy(() => import('./selectors/selectorMifire/selectorMifire'));
const SelectorBiometry = lazy(() => import('./selectors/selectorBiometry/selectorBiometry'));
const SelectorInfoTime = lazy(() => import('./selectors/selectorInfoTime/selectorInfoTime'));
const SelectorControl2D = lazy(() => import('./selectors/selectorControl2D/selectorControl2D'));
const SelectorGuest2D = lazy(() => import('./selectors/selectorGuest2D/selectorGuest2D'));
const SelectorSteelCase = lazy(() => import('./selectors/selectorSteelCase/selectorSteelCase'));
const SelectorRDU = lazy(() => import('./selectors/selectorRDU/selectorRDU'));



const ModuleSelectors = () => {
    return (
        <Suspense fallback={<Loader />}>
            <section className="selectors">
                <div className="selectors__text">Дополнительные модули</div>
                <SelectorEP />
                <SelectorEMMarin />
                <SelectorMifire />
                <SelectorBiometry />
                <SelectorInfoTime />
                <SelectorControl2D />
                <SelectorGuest2D />
                <SelectorSteelCase />
                <SelectorRDU />
            </section>
        </Suspense>
    );
}

export default ModuleSelectors;
