/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment } from 'react';

/**
 * Импорт модулей селекторов
 */
// import SelectorColor from './selectors/selectorColor/selectorColor';
// import SelectorControlBlock from './selectors/selectorControlBlock/selectorControlBlock';
// import SelectorEmergencySiren from './selectors/selectorEmergencySiren/selectorEmergencySiren';
// import SelectorHeatingModule from './selectors/selectorHeatingModule/selectorHeatingModule';
// import SelectorInductanceLoop from './selectors/selectorInductanceLoop/selectorInductanceLoop';
// import SelectorRadioRemote from './selectors/selectorRadioRemote/selectorRadioRemote';
// import SelectorSignalLamp from './selectors/selectorSignalLamp/selectorSignalLamp';

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
                 * Селектор Блок управления 21PS-A
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
                 * Селектор Цвет вместо 7035 желтый-G
                 */}
                <Fragment>
                    {/*<SelectorColor />*/}
                </Fragment>

                {/**
                 * Селектор Сигнальная лампа LS-01-L
                 */}
                <Fragment>
                    {/*<SelectorSignalLamp />*/}
                </Fragment>

                {/**
                 * Селектор Модуль радио пультов PRK 400-P
                 */}
                <Fragment>
                    {/*<SelectorRadioRemote />*/}
                </Fragment>

                {/**
                 * Селектор Аварийная сирена-S
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

            </section>
        );
    }
}

export default ModuleSelectors;
