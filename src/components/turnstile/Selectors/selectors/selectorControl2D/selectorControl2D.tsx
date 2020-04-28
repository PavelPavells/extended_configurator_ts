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
import './selectorControl2D.scss';

/**
 * Импорт прелоадера
 */
const PopUp = lazy(() => import('../../../../popup/popup'));

/**
 * Интерфейс компонента SelectorControl2D
 */
interface SelectorControl2DProps {
    data: any,
    fetchDataTurnstile: (data: any, trigger: number) => void,
    togglePopupWindowTurnstile: () => void
}

interface SelectorControl2DState {
    selectSix: number
}

class SelectorControl2D extends React.PureComponent<SelectorControl2DProps, SelectorControl2DState> {
    static propTypes: {
        togglePopupWindowTurnstile: PropTypes.Validator<(...args: any[]) => any>;
        fetchDataTurnstile: PropTypes.Validator<(...args: any[]) => any>
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>;
        isFetching: PropTypes.Requireable<boolean>;
    };

    state: SelectorControl2DState = { selectSix: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    handleToggleModal = () => {
        this.props.togglePopupWindowTurnstile();
    }

    /**
    * Хэндлер для обработки запроса селектора 'Контроля по 2D-штрихкодам'
    */
    handleClickSixSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({
            selectSix: +!page_view.module_selectors[5].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 10,
                trigger_state: this.state.selectSix,
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
             * Селектор 'Контроль по 2D-штрихкодам'
             */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(5, 6).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors-module none">
                                <div className="selectors-module__left">
                                    <div className="selectors-module__icon one-visits" />
                                    <div className="selectors-module__text">Контроль разовых посещений по 2D штрих-кодам</div>
                                </div>
                                <div className="selectors-module__right">
                                    <div className="onoffswitch6">
                                        <input
                                            type="checkbox"
                                            className="onoffswitch6-checkbox"
                                            defaultChecked={false}
                                        />
                                        <label className="onoffswitch6-label" htmlFor="header6-checkbox">
                                            <span className="onoffswitch6-inner" />
                                            <span className="onoffswitch6-switch" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index.index} className="selectors-module">
                                <div className="selectors-module__left">
                                    <div className="selectors-module__icon one-visits" />
                                    <div className="selectors-module__text">Контроль разовых посещений по 2D штрих-кодам</div>
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
                                        {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                        {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                        {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                                        {turnstile.data.page_view.model_module_list[4] !== undefined && turnstile.data.page_view.model_module_list[4].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[4].price}
                                        {turnstile.data.page_view.model_module_list[5] !== undefined && turnstile.data.page_view.model_module_list[5].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[5].price}
                                        {turnstile.data.page_view.model_module_list[6] !== undefined && turnstile.data.page_view.model_module_list[6].name === 'qrguests' && '+ ' + turnstile.data.page_view.model_module_list[6].price}
                                    </div>
                                    <div className="onoffswitch6">
                                        <input
                                            type="checkbox"
                                            name="onoffswitch6"
                                            className="onoffswitch6-checkbox"
                                            id="header6-checkbox"
                                            onChange={this.handleClickSixSelect}
                                            checked={turnstile.data.page_view.module_selectors[5].state}
                                        />
                                        <label className="onoffswitch6-label" htmlFor="header6-checkbox">
                                            <span className="onoffswitch6-inner" />
                                            <span className="onoffswitch6-switch" />
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

SelectorControl2D.propTypes = {
    togglePopupWindowTurnstile: PropTypes.func.isRequired,
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile, togglePopupWindowTurnstile })(SelectorControl2D);
