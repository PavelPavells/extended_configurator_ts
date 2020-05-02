/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';

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

/**
 * Импорт стилей контейнера модулей селекторов
 */
import './moduleSelectors.scss';

/**
 * Импорт Лоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleSelectors
 */
interface ModuleSelectorsProps {
    data: any
}

class ModuleSelectors extends React.PureComponent<ModuleSelectorsProps> {
    static propTypes: {
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>;
        isFetching: PropTypes.Requireable<boolean>;
    };
    
    public render () {
        /**
         * Данные из Глобального Стора
         */
        const { turnstile, isFetching } = this.props.data;

        if (turnstile.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (

            /**
             * Модуль Селекторы
             */
            <section className="selectors">
                <div className="selectors-text">Дополнительные модули</div>

                {/**
                 * Селектор Универсальный сетевой контроллер расширения EP-2000
                 */}
                <Fragment>
                    <SelectorEP />
                </Fragment>

                {/**
                 * Селектор RFID идентификаторы EMMarine 125kHZ
                 */}
                <Fragment>
                    <SelectorEMMarin />
                </Fragment>

                {/**
                 * Селектор RFID идентификаторы Mifire 13.56MHz
                 */}
                <Fragment>
                    <SelectorMifire />
                </Fragment>

                {/**
                 * Селектор Биометрическая идентификация по отпечаткам пальцев
                 */}
                <Fragment>
                    <SelectorBiometry />
                </Fragment>

                {/**
                 * Селектор Информационный дисплей учета рабочего времени
                 */}
                <Fragment>
                    <SelectorInfoTime />
                </Fragment>

                {/**
                 * Селектор Контроль разовых посещений по 2D штрих-кодам
                 */}
                <Fragment>
                    <SelectorControl2D />
                </Fragment>

                {/**
                 * Селектор Гостевой доступ по 2D штрих-кодам
                 */}
                <Fragment>
                    <SelectorGuest2D />
                </Fragment>

                {/**
                 * Селектор Корпус кожуха из нержавеющей стали
                 */}
                <Fragment>
                    <SelectorSteelCase />
                </Fragment>
            </section>
        );
    }
}

ModuleSelectors.propTypes = {
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, null)(ModuleSelectors);
