/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment } from 'react';

/**
 * Импорт модулей селекторов
 */
import SelectorChangeColor from './selectors/selectorChangeColor/selectorChangeColor';
import SelectorControlBlock from './selectors/selectorControlBlock/selectorControlBlock';
import SelectorEmergencySiren from './selectors/selectorEmergencySiren/selectorEmergencySiren';
import SelectorHeatingModule from './selectors/selectorHeatingModule/selectorHeatingModule';
import SelectorInductanceLoop from './selectors/selectorInductanceLoop/selectorInductanceLoop';
import SelectorRadioRemote from './selectors/selectorRadioRemote/selectorRadioRemote';
import SelectorSignalLamp from './selectors/selectorSignalLamp/selectorSignalLamp';

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
                 * Селектор Блок управления ABC-21PS
                 */}
                <Fragment>
                    {/*<SelectorControlBlock />*/}
                </Fragment>

                {/**
                 * Селектор Модуль обогрева MHP-B
                 */}
                <Fragment>
                    {/*<SelectorHeatingModule />*/}
                </Fragment>

                {/**
                 * Селектор Модуль радио пультов PRK 400-P
                 */}
                <Fragment>
                    {/*<SelectorRadioRemote />*/}
                </Fragment>

                {/**
                 * Селектор Сигнальная лампа LS-01
                 */}
                <Fragment>
                    {/*<SelectorSignalLamp />*/}
                </Fragment>

                {/**
                 * Селектор Аварийная сирена
                 */}
                <Fragment>
                    {/*<SelectorEmergencySiren />*/}
                </Fragment>

                {/**
                 * Селектор Модуль подключения петли индуктивности VLD-10-V
                 */}
                <Fragment>
                    {/*<SelectorInductanceLoop />*/}
                </Fragment>

                {/**
                 * Селектор Замена цвета корпуса RAL7035 на RAL1016
                 */}
                <Fragment>
                    {/*<SelectorChangeColor />*/}
                </Fragment>

            </section>
        );
    }
}

export default ModuleSelectors;
