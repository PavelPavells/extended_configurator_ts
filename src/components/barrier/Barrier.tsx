/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';

/**
 * Импорт стилей
 */
import './Barrier.scss';

/**
 * Импорт основных подмодулей
 */
//import ModuleImage from './Image/moduleImage';
//import ModuleList from './List/moduleList';
//import ModuleButtons from './Buttons/moduleButtons';
//import ModuleSelectors from './Selectors/moduleSelectors';
//import ModuleBasket from './Basket/moduleBasket';
//import ModuleConfiguration from './Configuration/moduleConfiguration';
//import ModuleEquipment from './Equipment/moduleEquipment';

class Barrier extends React.PureComponent {
    public render () {
        return (

            /**
             *  Модуль Турникеты
             */
            <section className="barrier">

                {/**
                 * Обертка компонента 'Корзина'
                 */}
                <div className="barrier__basket">
                    {/** <ModuleBasket /> */}
                </div>
                <div className="barrier__primary primary">
                    <div className="primary__slider slider">

                        {/**
                         * Обертка компонента 'Изображение'
                         */}
                        <div className="slider__image">
                            {/** <ModuleImage /> */}
                        </div>

                        {/**
                         * Обертка компонента 'Список'
                         */}
                        <div className="slider__list">
                            {/** <ModuleList /> */}
                        </div>
                    </div>
                    <div className="primary__basis basis">

                        {/**
                         * Обертка компонента выбора 'Серии/Исполнения'
                         */}
                        <div className="basis__buttons">
                            {/** <ModuleButtons /> */}
                        </div>

                        {/**
                         * Обертка компонента 'Селекторы'
                         */}
                        <div className="basis__selectors">
                            {/** <ModuleSelectors /> */}
                        </div>
                    </div>
                </div>

                {/**
                 * Обертка компонента 'Конфигурация'
                 */}
                <div className="barrier__configuration">
                    {/** <ModuleConfiguration /> */}
                </div>

                {/**
                 * Обертка компонента 'Комплектующие'
                 */}
                <div className="barrier__equipment">
                    {/** <ModuleEquipment /> */}
                </div>
            </section>
        )
    }
}

export default Barrier;
