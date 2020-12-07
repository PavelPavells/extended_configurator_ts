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
import { fetchDataBarrier } from '../../../actions/BarrierActions/BarrierActions';

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
    readonly fetchDataBarrier: () => void,
}

class ModuleConfiguration extends React.PureComponent<any> {
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
        const { barrier, isFetching } = this.props.data;

        if (barrier.data.length === 0 && !isFetching) {
           return <Loader />;
        }
        return (
            /**
             *  Модуль Конфигурация
             */
            <section className="configuration">
                <div className="configuration__options options">

                    {/**
                        * Количество
                     */}
                    <div className="options__amount amount">
                        <p className="amount__text">Количество:</p>
                        <span className="amount__value">{barrier.data.page_view.model_module_list.length}</span>
                    </div>

                    {/**
                        * Добавить/Удалить Количетсво
                     */}
                    <div className="options__more more">
                        <div onClick={this.handleMinusOptions} className="more__minus" />
                        <div onClick={this.handlePlusOptions} className="more__plus" />
                    </div>
                    <div className="options__summ summ">
                        <div className="summ__text">Сумма:</div>
                        <span className="summ__value">{barrier.data.page_view.model_price}</span>
                    </div>
                </div>

                {/**
                    * Кнопка добавления конфигурации
                */}
                <div className="configuration__button button">
                    <div className="button__icon" />
                    <div className="button__text">ДОБАВИТЬ ЭТУ КОНФИГУРАЦИЮ</div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect(
    mapStateToProps,
    {
        fetchDataBarrier
    }
)(ModuleConfiguration as any);