/**
 * Импорт зависимостей из NPM
 */
import React, { lazy } from 'react';
// @ts-ignore
import { connect } from 'react-redux';

/**
 * Импорт стилей
 */
import './Turnstile.scss';

/**
 * Импорт основных подмодулей
 */
const ModuleImage = lazy(() => import('./Image/moduleImage'));
const ModuleList = lazy(() => import('./List/moduleList'));
const ModuleButtons = lazy(() => import('./Buttons/moduleButtons'));
const ModuleSelectors = lazy(() => import('./Selectors/moduleSelectors'));
const ModuleBasket = lazy(() => import('./Basket/moduleBasket'));
const ModuleConfiguration = lazy(() => import('./Configuration/moduleConfiguration'));
const ModuleEquipment = lazy(() => import ('./Equipment/moduleEquipment'));

class Turnstile extends React.PureComponent {
    render () {
        return (

            /**
             *  Модуль Турникеты
             */
            <section className="turnstile">

                {/**
                 * Обертка компонента 'Корзина'
                 */}
                <div className="turnstile-basket">
                    <ModuleBasket />
                </div>
                <div className="turnstile-main">
                    <div className="turnstile-main__slider">

                        {/**
                         * Обертка компонента 'Изображение'
                         */}
                        <div className="turnstile-main__slider-image">
                            <ModuleImage />
                        </div>

                        {/**
                         * Обертка компонента 'Список'
                         */}
                        <div className="turnstile-main__slider-list">
                            <ModuleList />
                        </div>
                    </div>
                    <div className="turnstile-main__basis">

                        {/**
                         * Обертка компонента выбора 'Серии/Исполнения'
                         */}
                        <div className="turnstile-main__basis-buttons">
                            <ModuleButtons />
                        </div>

                        {/**
                         * Обертка компонента 'Селекторы'
                         */}
                        <div className="turnstile-main__basis-selectors">
                            <ModuleSelectors />
                        </div>
                    </div>
                </div>

                {/**
                 * Обертка компонента 'Конфигурация'
                 */}
                <div className="turnstile-configuration">
                    <ModuleConfiguration />
                </div>

                {/**
                 * Обертка компонента 'Комплектующие'
                 */}
                <div className="turnstile-equipment">
                    <ModuleEquipment />
                </div>
            </section>

        );
    }
}
export default connect(null, null)(Turnstile);
