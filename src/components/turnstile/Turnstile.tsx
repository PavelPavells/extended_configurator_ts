import React, { Suspense, lazy } from 'react';
import './Turnstile.scss';

import Loader from '../../__utils__/Loader/Loader';

// const ModuleBasket = lazy(() => import('./Basket/moduleBasket'));
const ModuleImage = lazy(() => import('./Image/moduleImage'));
const ModuleList = lazy(() => import('./List/moduleList'));
const ModuleButtons = lazy(() => import('./Buttons/moduleButtons'));
const ModuleSelectors = lazy(() => import('./Selectors/moduleSelectors'));
// const ModuleConfiguration = lazy(() => import('./Configuration/moduleConfiguration'));
// const ModuleEquipment = lazy(() => import('./Equipment/moduleEquipment'));

const Turnstile = () => {
    return (
        <Suspense fallback={<Loader />}>
            <section className="turnstile">
                {/* 
                <div className="turnstile__basket">
                    <ModuleBasket />
                </div>
                */}
                <div className="turnstile__primary">
                    <div className="primary__slider">
                        <div className="slider__image">
                            <ModuleImage />
                        </div>
                        <div className="slider__list">
                            <ModuleList />
                        </div>
                    </div>
                    <div className="primary__basis">
                        <div className="basis__buttons">
                            <ModuleButtons />
                        </div>
                        <div className="basis__selectors">
                            <ModuleSelectors />
                        </div>
                    </div>
                </div>
                {/*
                <div className="turnstile__configuration">
                    <ModuleConfiguration />
                </div>
                <div className="turnstile__equipment">
                    <ModuleEquipment />
                </div>
                */}
            </section>
        </Suspense>

    );
}

export default Turnstile;
