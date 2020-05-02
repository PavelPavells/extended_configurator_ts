/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment } from 'react';
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
import './selectorSteelCase.scss';

/**
 * Импорт прелоадера
 */
import PopUp from '../../../../popup/popup';

/**
 * Интерфейс компонента SelectorBiometry
 */
interface SelectorSteelCaseProps {
    data: any,
    fetchDataTurnstile: (data: any, trigger: number) => void,
    togglePopupWindowTurnstile: () => void
}

interface SelectorSteelCaseState {
    selectEight: number
}

class SelectorSteelCase extends React.PureComponent<SelectorSteelCaseProps, SelectorSteelCaseState> {
    static propTypes: {
        togglePopupWindowTurnstile: PropTypes.Validator<(...args: any[]) => any>;
        fetchDataTurnstile: PropTypes.Validator<(...args: any[]) => any>
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>;
        isFetching: PropTypes.Requireable<boolean>;
    };

    state: SelectorSteelCaseState = { selectEight: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        this.props.togglePopupWindowTurnstile();
    }

    /**
    * Хэндлер для обработки запроса селектора 'Корпус'
    */
    private handleClickEightSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({
            selectEight: +!page_view.module_selectors[7].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 12,
                trigger_state: this.state.selectEight,
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

    public render () {
        /**
         * Данные из глобального стора
         */
        const { turnstile } = this.props.data;

        return (

            /**
             * Селектор 'Корпус'
             */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(7, 8).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors-module none">
                                <div className="selectors-module__left">
                                    <div className="selectors-module__icon steel" />
                                    <div className="selectors-module__text">Корпус кожуха из нержавеющей стали</div>
                                </div>
                                <div className="selectors-module__right">
                                    <div className="onoffswitch8">
                                        <input
                                            type="checkbox"
                                            className="onoffswitch8-checkbox"
                                            defaultChecked={false}
                                        />
                                        <label className="onoffswitch8-label" htmlFor="header8-checkbox">
                                            <span className="onoffswitch8-inner" />
                                            <span className="onoffswitch8-switch" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index.index} className="selectors-module">
                                <div className="selectors-module__left">
                                    <div className="selectors-module__icon steel" />
                                    <div className="selectors-module__text">Корпус кожуха из нержавеющей стали</div>
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
                                        {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                        {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                        {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                        {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                        {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                        {turnstile.data.page_view.model_module_list[6] !== undefined && turnstile.data.page_view.model_module_list[6].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[6].price}
                                        {turnstile.data.page_view.model_module_list[7] !== undefined && turnstile.data.page_view.model_module_list[7].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[7].price}
                                        {turnstile.data.page_view.model_module_list[8] !== undefined && turnstile.data.page_view.model_module_list[8].name === 'stainless' && '+ ' + turnstile.data.page_view.model_module_list[8].price}
                                    </div>
                                    <div className="onoffswitch8">
                                        <input
                                            type="checkbox"
                                            name="onoffswitch8"
                                            className="onoffswitch8-checkbox"
                                            id="header8-checkbox"
                                            onChange={this.handleClickEightSelect}
                                            checked={turnstile.data.page_view.module_selectors[7].state}
                                        />
                                        <label className="onoffswitch8-label" htmlFor="header8-checkbox">
                                            <span className="onoffswitch8-inner" />
                                            <span className="onoffswitch8-switch" />
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

SelectorSteelCase.propTypes = {
    togglePopupWindowTurnstile: PropTypes.func.isRequired,
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile, togglePopupWindowTurnstile })(SelectorSteelCase);
