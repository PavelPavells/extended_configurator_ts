/**
 * Импорт зависимостей из NPM
 */
import React from 'react';

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
import ModuleBasket from './Basket/moduleBasket';
import ModuleConfiguration from './Configuration/moduleConfiguration';
import ModuleEquipment from './Equipment/moduleEquipment';

class Turnstile extends React.PureComponent {
    public render () {
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

export default Turnstile;
