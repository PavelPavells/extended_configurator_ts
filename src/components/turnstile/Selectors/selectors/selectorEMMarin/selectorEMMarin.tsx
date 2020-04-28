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
import './selectorEMMarin.scss';

/**
 * Импорт прелоадера
 */
const PopUp = lazy(() => import('../../../../popup/popup'));

/**
 * Интерфейс компонента SelectorEMMarin
 */
interface SelectorEMMarinProps {
    data: any,
    fetchDataTurnstile: (data: any, trigger: number) => void,
    togglePopupWindowTurnstile: () => void
}

interface SelectorEMMarinState {
    selectTwo: number
}

class SelectorEMMarin extends React.PureComponent<SelectorEMMarinProps, SelectorEMMarinState> {
    static propTypes: {
        togglePopupWindowTurnstile: PropTypes.Validator<(...args: any[]) => any>;
        fetchDataTurnstile: PropTypes.Validator<(...args: any[]) => any>
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>;
        isFetching: PropTypes.Requireable<boolean>;
    };

    state: SelectorEMMarinState = { selectTwo: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    handleToggleModal = () => {
        this.props.togglePopupWindowTurnstile();
    }

    /**
    * Хэндлер для обработки запроса селектора 'EMMarin'
    */
    handleClickTwoSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({
            selectTwo: +!page_view.module_selectors[1].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 6,
                trigger_state: this.state.selectTwo,
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
             * Селектор 'EMMarin'
             */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(1, 2).map((index: { index: string | number | undefined; }) => (
                    <div key={index.index} className="selectors-module">
                        <div className="selectors-module__left">
                            <div className="selectors-module__icon emmarine" />
                            <div className="selectors-module__text">RFID идентификаторы EMMarine 125kHZ</div>
                            <div className="selectors-module__info">
                                <div className="selectors-module__info-text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                    {turnstile.modal ? <PopUp turnstile={turnstile} /> : null}
                                </div>
                                <div className="selectors-module__info-arrow" />
                            </div>
                        </div>
                        <div className="selectors-module__right">
                            <div className="selectors-module__price">
                                {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'emarine' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'emarine' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'emarine' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                            </div>
                            <div className="onoffswitch2">
                                <input
                                    type="checkbox"
                                    name="onoffswitch2"
                                    className="onoffswitch2-checkbox"
                                    id="header2-checkbox"
                                    onChange={this.handleClickTwoSelect}
                                    checked={turnstile.data.page_view.module_selectors[1].state}
                                />
                                <label className="onoffswitch2-label" htmlFor="header2-checkbox">
                                    <span className="onoffswitch2-inner" />
                                    <span className="onoffswitch2-switch" />
                                </label>
                            </div>
                        </div>
                    </div>
                )
                )}
            </Fragment>
        );
    }
}

SelectorEMMarin.propTypes = {
    togglePopupWindowTurnstile: PropTypes.func.isRequired,
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile, togglePopupWindowTurnstile })(SelectorEMMarin);
