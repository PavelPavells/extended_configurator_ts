/**
 * Импорт зависимостей из NPM
 */
import React, { Suspense, lazy } from 'react';

/**
 * Импорт стилей
 */
import './Turnstile.scss';

/**
 * Импорт основных подмодулей
 */
import ModuleImage from './Image/moduleImage';
import ModuleList from './List/moduleList';
import ModuleButtons from './Buttons/moduleButtons';
import ModuleSelectors from './Selectors/moduleSelectors';
// import ModuleBasket from './Basket/moduleBasket';
import ModuleConfiguration from './Configuration/moduleConfiguration';
import ModuleEquipment from './Equipment/moduleEquipment';
import Loader from '../../__utils__/Loader/Loader';
const ModuleBasket = lazy(() => import('./Basket/moduleBasket'))

const Turnstile = () => {
    return (
        <Suspense fallback={<Loader />}>
            <section className="turnstile">
                <div className="turnstile__basket">
                    <ModuleBasket />
                </div>
                <div className="turnstile__primary primary">
                    <div className="primary__slider slider">
                        <div className="slider__image">
                            <ModuleImage />
                        </div>
                        <div className="slider__list">
                            <ModuleList />
                        </div>
                    </div>
                    <div className="priamry__basis basis">
                        <div className="basis__buttons">
                            <ModuleButtons />
                        </div>
                        <div className="basis__selectors">
                            <ModuleSelectors />
                        </div>
                    </div>
                </div>
                <div className="turnstile__configuration">
                    <ModuleConfiguration />
                </div>
                <div className="turnstile__equipment">
                    <ModuleEquipment />
                </div>
            </section>
        </Suspense>

    );
}

export default Turnstile;
