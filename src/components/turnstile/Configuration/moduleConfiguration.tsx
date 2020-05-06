/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';

/**
 * Импорт экшенов
 */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/**
 * Импорт стилей
 */
import './moduleConfiguration.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleConfiguration
 */
interface ModuleConfigurationProps {
    readonly data: any,
    readonly fetchDataTurnstile: () => void,
}

class ModuleConfiguration extends React.PureComponent<ModuleConfigurationProps> {

    /**
     *
     */
    private handleMinusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

    /**
     *
     */
    private handlePlusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

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
             *  Модуль Конфигурация
             */
            <section className="configuration">
                <div className="configuration-options">

                    {/**
                        * Количество
                     */}
                    <div className="configuration-options__amount">
                        <p className="configuration-options__amount-text">Количество:</p>
                        <span className="configuration-options__amount-value">{turnstile.data.page_view.model_module_list.length}</span>
                    </div>

                    {/**
                        * Добавить/Удалить Количетсво
                     */}
                    <div className="configuration-options__more">
                        <div onClick={this.handleMinusOptions} className="configuration-options__more-minus" />
                        <div onClick={this.handlePlusOptions} className="configuration-options__more-plus" />
                    </div>
                    <div className="configuration-options__summ">
                        <div className="configuration-options__summ-text">Сумма:</div>
                        <span className="configuration-options__summ-value">{turnstile.data.page_view.model_price}</span>
                    </div>
                </div>

                {/**
                    * Кнопка добавления конфигурации
                */}
                <div className="configuration-button">
                    <div className="configuration-button__icon" />
                    <div className="configuration-button__text">ДОБАВИТЬ ЭТУ КОНФИГУРАЦИЮ</div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect<{}, {}, ModuleConfigurationProps>(mapStateToProps, { fetchDataTurnstile })(ModuleConfiguration);
