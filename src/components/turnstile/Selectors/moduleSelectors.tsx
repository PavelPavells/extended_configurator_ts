/**
 * Импорт зависимостей из NPM
 */
import React from 'react';

/**
 * Импорт модулей селекторов
 */
import SelectorEP from './selectors/selectorEP/selectorEP';
import SelectorEMMarin from './selectors/selectorEMMarin/selectorEMMarin';
import SelectorMifire from './selectors/selectorMifire/selectorMifire';
import SelectorBiometry from './selectors/selectorBiometry/selectorBiometry';
import SelectorInfoTime from './selectors/selectorInfoTime/selectorInfoTime';
import SelectorControl2D from './selectors/selectorControl2D/selectorControl2D';
import SelectorGuest2D from './selectors/selectorGuest2D/selectorGuest2D';
import SelectorSteelCase from './selectors/selectorSteelCase/selectorSteelCase';
import SelectorRDU from './selectors/selectorRDU/selectorRDU';

/**
 * Импорт стилей контейнера модулей селекторов
 */
import './moduleSelectors.scss';

class ModuleSelectors extends React.PureComponent {
    
    public render () {
        return (

            /**
             * Модуль Селекторы
             */
            <section className="selectors">
                <div className="selectors__text">Дополнительные модули</div>

                {/**
                 * Селектор Универсальный сетевой контроллер расширения EP-2000
                 */}
                    <SelectorEP />
                
                {/**
                 * Селектор RFID идентификаторы EMMarine 125kHZ
                 */}
                    <SelectorEMMarin />

                {/**
                 * Селектор RFID идентификаторы Mifire 13.56MHz
                 */}
                    <SelectorMifire />

                {/**
                 * Селектор Биометрическая идентификация по отпечаткам пальцев
                 */}
                    <SelectorBiometry />

                {/**
                 * Селектор Информационный дисплей учета рабочего времени
                 */}
                    <SelectorInfoTime />

                {/**
                 * Селектор Контроль разовых посещений по 2D штрих-кодам
                 */}
                    <SelectorControl2D />

                {/**
                 * Селектор Гостевой доступ по 2D штрих-кодам
                 */}
                    <SelectorGuest2D />

                {/**
                 * Селектор Корпус кожуха из нержавеющей стали
                 */}
                    <SelectorSteelCase />

                {/**
                 * Селектор RDU
                 */}
                    <SelectorRDU />

            </section>
        );
    }
}

export default ModuleSelectors;
