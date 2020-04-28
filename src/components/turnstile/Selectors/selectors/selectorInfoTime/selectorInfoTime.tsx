/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment, lazy } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';

/**
 * Импорт экшенов
 */
import {
    fetchDataTurnstile,
    togglePopupWindowTurnstile
} from '../../../../../actions/dataTurnstileActions';

/**
 * Импорт стилей
 */
import './selectorInfoTime.scss';

/**
 * Импорт прелоадера
 */
const PopUp = lazy(() => import('../../../../popup/popup'));

/**
 * Интерфейс компонента SelectorBiometry
 */
interface SelectorInfoTimeProps {
    data: any,
    fetchDataTurnstile: (data: any, trigger: number) => void,
    togglePopupWindowTurnstile: () => void
}

interface SelectorInfoTimeState {
    selectFive: number
}

class SelectorInfoTime extends React.PureComponent<SelectorInfoTimeProps, SelectorInfoTimeState> {
    static propTypes: {
        togglePopupWindowTurnstile: PropTypes.Validator<(...args: any[]) => any>;
        fetchDataTurnstile: PropTypes.Validator<(...args: any[]) => any>
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>;
        isFetching: PropTypes.Requireable<boolean>;
    };

    state: SelectorInfoTimeState = { selectFive: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    handleToggleModal = () => {
        this.props.togglePopupWindowTurnstile();
    }

    /**
     * Хэндлер для обработки запроса селектора 'Информационный дисплей учета рабочего времени'
     */
    handleClickFiveSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({
            selectFive: +!page_view.module_selectors[4].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 9,
                trigger_state: this.state.selectFive,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: page_view.module_selectors[0].state,
                selectTwo: page_view.module_selectors[1].state,
                selectThree: page_view.module_selectors[2].state,
                selectFour: page_view.module_selectors[3].state,
                selectFive: page_view.module_selectors[4].state,
                selectSix: page_view.module_selectors[5].state,
                selectSeven: page_view.module_selectors[6].state,
                selectEight: page_view.module_selectors[7].state
            };
            this.props.fetchDataTurnstile(data, data.trigger);
        });
    }

    render () {
        /**
         * Данные из глобального стора
         */
        const { turnstile } = this.props.data;

        return (

            /**
             * Селектор 'Информационный дисплей учета рабочего времени'
             */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(4, 5).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors-module none">
                                <div className="selectors-module__left">
                                    <div className="selectors-module__icon time" />
                                    <div className="selectors-module__text">Информационный дисплей учета рабочего времени</div>
                                </div>
                                <div className="selectors-module__right">
                                    <div className="onoffswitch5">
                                        <input
                                            type="checkbox"
                                            className="onoffswitch5-checkbox"
                                            defaultChecked={false}
                                        />
                                        <label className="onoffswitch5-label" htmlFor="header5-checkbox">
                                            <span className="onoffswitch5-inner" />
                                            <span className="onoffswitch5-switch" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index.index} className="selectors-module">
                                <div className="selectors-module__left">
                                    <div className="selectors-module__icon time" />
                                    <div className="selectors-module__text">Информационный дисплей учета рабочего времени</div>
                                    <div className="selectors-module__info">
                                        <div className="selectors-module__info-text">
                                            <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                            {turnstile.modal ? <PopUp /> : null}
                                        </div>
                                        <div className="selectors-module__info-arrow" />
                                    </div>
                                </div>
                                <div className="selectors-module__right">
                                    <div className="selectors-module__price">
                                        {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                        {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                        {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                        {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                        {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'display' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                    </div>
                                    <div className="onoffswitch5">
                                        <input
                                            type="checkbox"
                                            name="onoffswitch5"
                                            className="onoffswitch5-checkbox"
                                            id="header5-checkbox"
                                            onChange={this.handleClickFiveSelect}
                                            checked={turnstile.data.page_view.module_selectors[4].state}
                                        />
                                        <label className="onoffswitch5-label" htmlFor="header5-checkbox">
                                            <span className="onoffswitch5-inner" />
                                            <span className="onoffswitch5-switch" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })
                }
            </Fragment>
        );
    }
}

SelectorInfoTime.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    togglePopupWindowTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile, togglePopupWindowTurnstile })(SelectorInfoTime);
