/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment, lazy } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { connect } from 'react-redux';

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
import './selectorMifire.scss';

/**
 * Импорт прелоадера
 */
const PopUp = lazy(() => import('../../../../popup/popup'));

class SelectorMifire extends React.PureComponent {
    state = { selectThree: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    handleToggleModal = () => {
        // @ts-ignore
        this.props.togglePopupWindowTurnstile();
    }

    /**
    * Хэндлер для обработки запроса селектора 'Mifire'
    */
    handleClickThreeSelect = () => {
        // @ts-ignore
        const { page_view } = this.props.data.turnstile.data;
        this.setState({
            selectThree: +!page_view.module_selectors[2].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 7,
                trigger_state: this.state.selectThree,
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
            // @ts-ignore
            this.props.fetchDataTurnstile(data, data.trigger);
        });
    }

    render () {
        /**
         * Данные из глобального стора
         */
        // @ts-ignore
        const { turnstile } = this.props.data;
        //console.log(turnstile);
        return (
            /**
             * Селектор 'Mifire'
             */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(2, 3).map(
                    // @ts-ignore
                    (index, key) => (
                    <div key={index.index} className="selectors-module">
                        <div className="selectors-module__left">
                            <div className="selectors-module__icon mifire" />
                            <div className="selectors-module__text">RFID идентификаторы Mifire 13.56MHz</div>
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
                                {turnstile.data.page_view.model_module_list[1] !== undefined && turnstile.data.page_view.model_module_list[1].name === 'mifare' && '+ ' + turnstile.data.page_view.model_module_list[1].price}
                                {turnstile.data.page_view.model_module_list[2] !== undefined && turnstile.data.page_view.model_module_list[2].name === 'mifare' && '+ ' + turnstile.data.page_view.model_module_list[2].price}
                                {turnstile.data.page_view.model_module_list[3] !== undefined && turnstile.data.page_view.model_module_list[3].name === 'mifare' && '+ ' + turnstile.data.page_view.model_module_list[3].price}
                            </div>
                            <div className="onoffswitch3">
                                <input
                                    type="checkbox"
                                    name="onoffswitch3"
                                    className="onoffswitch3-checkbox"
                                    id="header3-checkbox"
                                    onChange={this.handleClickThreeSelect}
                                    checked={turnstile.data.page_view.module_selectors[2].state}
                                />
                                <label className="onoffswitch3-label" htmlFor="header3-checkbox">
                                    <span className="onoffswitch3-inner" />
                                    <span className="onoffswitch3-switch" />
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
// @ts-ignore
SelectorMifire.propTypes = {
    togglePopupWindowTurnstile: PropTypes.func.isRequired,
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};
// @ts-ignore
const mapStateToProps = state => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile, togglePopupWindowTurnstile })(SelectorMifire);
