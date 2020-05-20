/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment } from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';

/**
 * Импорт экшенов
 */
import {
    fetchDataTurnstile,
    //togglePopupWindowTurnstile
} from '../../../../../actions/dataTurnstileActions';

/**
 * Импорт стилей
 */
import './selectorMifire.scss';

/**
 * Импорт Popup-окна
 */
import MifirePopup from '../../../../popup/turnstile-popup/mifirePopup';

/**
 * Импорт Лоадера
 */
import Loader from '../../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента SelectorBiometry
 */
interface SelectorMifireProps {
    readonly data: any,
    readonly fetchDataTurnstile: (data: any, trigger: number) => void,
    //readonly togglePopupWindowTurnstile: () => void
}

interface SelectorMifireState {
    readonly selectThree: number,
    readonly toggleModal: boolean
}

class SelectorMifire extends React.PureComponent<SelectorMifireProps, SelectorMifireState> {

    state: SelectorMifireState = { selectThree: 0, toggleModal: false };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        //this.props.togglePopupWindowTurnstile();
        this.setState({ toggleModal: !this.state.toggleModal });
    }

    /**
    * Хэндлер для обработки запроса селектора 'Mifire'
    */
    private handleClickThreeSelect = () => {
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
                selectEight: page_view.module_selectors[7].state,
                //selectNine: page_view.module_selectors[8].state
            };
            this.props.fetchDataTurnstile(data, data.trigger);
        });
    }

    public render () {
        /**
         * Данные из глобального стора
         */
        const { turnstile, isFetching } = this.props.data;
        const { toggleModal } = this.state;
        if (turnstile.data.length === 0 && !isFetching) {
           return <Loader />;
        }

        return (
            /**
             * Селектор 'Mifire'
             */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(2, 3).map((index: { index: string | number | undefined; }) => (
                    <div key={index.index} className="selectors__module module">
                        <div className="module__left left">
                            <div className="left__icon mifire" />
                            <div className="left__text">RFID идентификаторы Mifire 13.56MHz</div>
                            <div className="left__info info">
                                <div className="info__text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                </div>
                                <div className="info__arrow" />
                            </div>
                            {toggleModal 
                                ? 
                                    <MifirePopup
                                        handleToggleModal={this.handleToggleModal}
                                        handleClickThreeSelect={this.handleClickThreeSelect}
                                    />
                                : null
                            }
                        </div>
                        <div className="module__right right">
                            <div className="right__price">
                                {turnstile.data.page_view.model_module_list[1] !== undefined
                                    && turnstile.data.page_view.model_module_list[1].name === 'mifare'
                                    && '+ ' + turnstile.data.page_view.model_module_list[1].price
                                }
                                {turnstile.data.page_view.model_module_list[2] !== undefined
                                    && turnstile.data.page_view.model_module_list[2].name === 'mifare'
                                    && '+ ' + turnstile.data.page_view.model_module_list[2].price
                                }
                                {turnstile.data.page_view.model_module_list[3] !== undefined
                                    && turnstile.data.page_view.model_module_list[3].name === 'mifare'
                                    && '+ ' + turnstile.data.page_view.model_module_list[3].price
                                }
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

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect<{}, {}, SelectorMifireProps>(
    mapStateToProps,
    {
        fetchDataTurnstile,
        //togglePopupWindowTurnstile
    }
)(SelectorMifire);
