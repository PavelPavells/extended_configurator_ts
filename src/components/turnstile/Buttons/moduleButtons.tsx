/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
import './moduleButtons.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleButtons
 */
interface ModuleButtonsProps {
    data: any,
    fetchDataTurnstile: (data: any, trigger: number) => void
}

class ModuleButtons extends React.PureComponent<ModuleButtonsProps> {
    static propTypes: { 
        fetchDataTurnstile: PropTypes.Validator<(...args: any[]) => any>; 
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>; 
        isFetching: PropTypes.Requireable<boolean>; 
    };
    
    /**
    * Запрос данных
    */
    public componentDidMount () {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: this.props.data.turnstile.trigger,
            trigger_state: 0,
            seria: 0,
            button_seria_state: page_view ? page_view.btn_seria : 0,
            button_corpse_state: page_view ? page_view.btn_corpse : 0,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view ? page_view.module_selectors[4].state : 0,
            selectSix: page_view ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view ? page_view.module_selectors[6].state : 0,
            selectEight: page_view ? page_view.module_selectors[7].state : 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }

    /**
    * Хэндлер для обработки запроса Серии STR
    */
    private handleClickSeriaSTR = () => {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 1,
            trigger_state: 0,
            seria: 0,
            button_seria_state: 0,
            button_corpse_state: page_view.btn_corpse,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view.module_selectors[4].state !== -1 ? page_view.module_selectors[4].state : 0,
            selectSix: page_view.module_selectors[5].state !== -1 ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view.module_selectors[6].state !== -1 ? page_view.module_selectors[6].state : 0,
            selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0

        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }

    /**
    * Хэндлер для обработки запроса Серии STX
    */
    private handleClickSeriaSTX = () => {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 2,
            trigger_state: 0,
            seria: 0,
            button_seria_state: 1,
            button_corpse_state: page_view.btn_corpse,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view.module_selectors[4].state !== -1 ? page_view.module_selectors[4].state : 0,
            selectSix: page_view.module_selectors[5].state !== -1 ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view.module_selectors[6].state !== -1 ? page_view.module_selectors[6].state : 0,
            selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }

    /**
    * Хэндлер для обработки запроса Исполнение STR
    */
    private handleClickExecutionCompact = () => {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 3,
            trigger_state: 0,
            seria: 0,
            button_seria_state: page_view.btn_seria,
            button_corpse_state: 0,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view.module_selectors[4].state !== -1 ? page_view.module_selectors[4].state : 0,
            selectSix: page_view.module_selectors[5].state !== -1 ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view.module_selectors[6].state !== -1 ? page_view.module_selectors[6].state : 0,
            selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }

    /**
    * Хэндлер для обработки запроса Исполнение STR
    */
    private handleClickExecutionThumb = () => {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 4,
            trigger_state: 0,
            seria: 0,
            button_seria_state: page_view.btn_seria,
            button_corpse_state: 1,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view.module_selectors[4].state !== -1 ? page_view.module_selectors[4].state : 0,
            selectSix: page_view.module_selectors[5].state !== -1 ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view.module_selectors[6].state !== -1 ? page_view.module_selectors[6].state : 0,
            selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }
    private handleClickResetSelectors = () => {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            trigger: this.props.data.turnstile.trigger,
            button_seria_state: page_view.btn_seria,
            button_corpse_state: page_view.btn_corpse,
            reset_model: 1,
            selectOne: 0,
            selectTwo: 0,
            selectThree: 0,
            selectFour: 0,
            selectFive: 0,
            selectSix: 0,
            selectSeven: 0,
            selectEight: 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }
    public render () {
        /**
        * Данные из Глобального Стора
        */
        const { turnstile, isFetching } = this.props.data;
        //console.log(this.props.data.turnstile.trigger)
        if (turnstile.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (

            /**
             *  Модуль выбора Серии/Исполнения
             */
            <section className="buttons">
                <div className="top">

                    {/**
                     * Описание
                     */}
                    <div className="top-captions">
                        <div className="top-captions__model">Модель</div>
                        <div className="top-captions__seria">Серия</div>
                        <div className="top-captions__summ">Итоговая стоимость</div>
                    </div>
                    <div className="top-select">
                        <div className="top-select__model">{turnstile.data.page_view.model_name}</div>

                        {/**
                         * Серия STR/STX
                         */}
                        <div className="top-select__seria">
                            {turnstile.data.page_view.btn_seria === 0 ?
                                <Fragment>
                                    <div onClick={this.handleClickSeriaSTR} className="top-select__seria-str open">STR</div>
                                </Fragment> :
                                <Fragment>
                                    <div onClick={this.handleClickSeriaSTR} className="top-select__seria-str">STR</div>
                                </Fragment>
                            }

                            {turnstile.data.page_view.btn_seria === 1 ?
                                <Fragment>
                                    <div onClick={this.handleClickSeriaSTX} className="top-select__seria-stx open">STX</div>
                                </Fragment> :
                                <Fragment>
                                    <div onClick={this.handleClickSeriaSTX} className="top-select__seria-stx">STX</div>
                                </Fragment>
                            }
                        </div>
                        <div className="top-select__price">{turnstile.data.page_view.model_price}</div>
                    </div>

                    {/**
                     * Серия STR/STX
                     */}
                    <div className="top-info">
                        <a
                            href={turnstile.data.page_view.download_broshure_button_link}
                            className="top-info__docs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ПОДРОБНЕЕ О МОДЕЛИ
                        </a>
                        <a
                            href={turnstile.data.page_view.model_base_model}
                            className="top-info__base"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            БАЗОВАЯ МОДЕЛЬ {turnstile.data.page_view.model_module_list.length - 1 >= 1 ? '(' + turnstile.data.page_view.model_module_list[0].price + ')' : null}
                        </a>
                    </div>
                    <div className="top-options">
                        <div className="top-options__value">
                            {turnstile.data.page_view.model_module_list.length - 1 === 1 ? String('+') + (turnstile.data.page_view.model_module_list.length - 1) + ' ОПЦИЯ' : null}
                            {turnstile.data.page_view.model_module_list.length - 1 > 1 ? String('+') + (turnstile.data.page_view.model_module_list.length - 1) + ' ОПЦИИ' : null}
                            {turnstile.data.page_view.model_module_list.length - 1 >= 5 ? String('+') + (turnstile.data.page_view.model_module_list.length - 1) + ' ОПЦИЙ' : null}
                        </div>
                        <div onClick={this.handleClickResetSelectors} className="top-options__reset">СБРОСИТЬ</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom-execution">Исполнение</div>

                    {/**
                     * Исполнение Компактный/Тумбовый
                     */}
                    <div className="bottom-buttons">
                        {turnstile.data.page_view.btn_corpse === 0 ?
                            <Fragment>
                                <div onClick={this.handleClickExecutionCompact} className="bottom-buttons__compact open">Компактный</div>
                            </Fragment> :
                            <Fragment>
                                <div onClick={this.handleClickExecutionCompact} className="bottom-buttons__compact">Компактный</div>
                            </Fragment>
                        }
                        {turnstile.data.page_view.btn_corpse === 1 ?
                            <Fragment>
                                <div onClick={this.handleClickExecutionThumb} className="bottom-buttons__thumb open">Тумбовый</div>
                            </Fragment> :
                            <Fragment>
                                <div onClick={this.handleClickExecutionThumb} className="bottom-buttons__thumb">Тумбовый</div>
                            </Fragment>
                        }
                    </div>
                </div>
            </section>
        );
    }
}

ModuleButtons.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleButtons);
