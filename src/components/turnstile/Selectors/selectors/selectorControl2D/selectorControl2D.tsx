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
import './selectorControl2D.scss';

/**
 * Импорт Popup-окна
 */
import Control2DPopup from '../../../../popup/turnstile-popup/control2DPopup';

/**
 * Импорт Лоадера
 */
import Loader from '../../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента SelectorControl2D
 */
interface SelectorControl2DProps {
    readonly data: any,
    readonly fetchDataTurnstile: (data: any, trigger: number) => void,
    //readonly togglePopupWindowTurnstile: () => void
}

interface SelectorControl2DState {
    readonly selectSix: number,
    readonly toggleModal: boolean
}

class SelectorControl2D extends React.PureComponent<SelectorControl2DProps, SelectorControl2DState> {

    state: SelectorControl2DState = { selectSix: 0, toggleModal: false };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        //this.props.togglePopupWindowTurnstile();
        this.setState({ toggleModal: !this.state.toggleModal });
    }

    /**
    * Хэндлер для обработки запроса селектора 'Контроля по 2D-штрихкодам'
    */
    private handleClickSixSelect = () => {
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
             * Селектор 'Контроль по 2D-штрихкодам'
             */
            <Fragment>
                {turnstile.data.page_view.module_selectors.slice(5, 6).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors__module module none">
                                <div className="module__left left">
                                    <div className="left__icon one-visits" />
                                    <div className="left__text">Контроль разовых посещений по 2D штрих-кодам</div>
                                </div>
                                <div className="module__right right">
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
                            <div key={index.index} className="selectors__module module">
                                <div className="module__left left">
                                    <div className="left__icon one-visits" />
                                    <div className="left__text">Контроль разовых посещений по 2D штрих-кодам</div>
                                    <div className="left__info info">
                                        <div className="info__text">
                                            <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                        </div>
                                        <div className="info__arrow" />
                                    </div>
                                    {toggleModal
                                        ?
                                            <Control2DPopup
                                                handleToggleModal={this.handleToggleModal}
                                                handleClickSixSelect={this.handleClickSixSelect}
                                            />
                                        : null
                                    }
                                </div>
                                <div className="module__right right">
                                    <div className="right__price">
                                        {turnstile.data.page_view.model_module_list[1] !== undefined
                                            && turnstile.data.page_view.model_module_list[1].name === 'qrguests'
                                            && '+ ' + turnstile.data.page_view.model_module_list[1].price
                                        }
                                        {turnstile.data.page_view.model_module_list[2] !== undefined
                                            && turnstile.data.page_view.model_module_list[2].name === 'qrguests'
                                            && '+ ' + turnstile.data.page_view.model_module_list[2].price
                                        }
                                        {turnstile.data.page_view.model_module_list[3] !== undefined
                                            && turnstile.data.page_view.model_module_list[3].name === 'qrguests'
                                            && '+ ' + turnstile.data.page_view.model_module_list[3].price
                                        }
                                        {turnstile.data.page_view.model_module_list[4] !== undefined
                                            && turnstile.data.page_view.model_module_list[4].name === 'qrguests'
                                            && '+ ' + turnstile.data.page_view.model_module_list[4].price
                                        }
                                        {turnstile.data.page_view.model_module_list[5] !== undefined
                                            && turnstile.data.page_view.model_module_list[5].name === 'qrguests'
                                            && '+ ' + turnstile.data.page_view.model_module_list[5].price
                                        }
                                        {turnstile.data.page_view.model_module_list[6] !== undefined
                                            && turnstile.data.page_view.model_module_list[6].name === 'qrguests'
                                            && '+ ' + turnstile.data.page_view.model_module_list[6].price
                                        }
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

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect<{}, {}, SelectorControl2DProps>(
    mapStateToProps,
    {
        fetchDataTurnstile,
        //togglePopupWindowTurnstile
    }
)(SelectorControl2D);
