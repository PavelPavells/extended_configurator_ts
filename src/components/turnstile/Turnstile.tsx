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
                <div className="turnstile__basket">
                    <ModuleBasket />
                </div>
                <div className="turnstile__primary primary">
                    <div className="primary__slider slider">

                        {/**
                         * Обертка компонента 'Изображение'
                         */}
                        <div className="slider__image">
                            <ModuleImage />
                        </div>

                        {/**
                         * Обертка компонента 'Список'
                         */}
                        <div className="slider__list">
                            <ModuleList />
                        </div>
                    </div>
                    <div className="priamry__basis basis">

                        {/**
                         * Обертка компонента выбора 'Серии/Исполнения'
                         */}
                        <div className="basis__buttons">
                            <ModuleButtons />
                        </div>

                        {/**
                         * Обертка компонента 'Селекторы'
                         */}
                        <div className="basis__selectors">
                            <ModuleSelectors />
                        </div>
                    </div>
                </div>

                {/**
                 * Обертка компонента 'Конфигурация'
                 */}
                <div className="turnstile__configuration">
                    <ModuleConfiguration />
                </div>

                {/**
                 * Обертка компонента 'Комплектующие'
                 */}
                <div className="turnstile__equipment">
                    <ModuleEquipment />
                </div>
            </section>

        );
    }
}

export default Turnstile;
