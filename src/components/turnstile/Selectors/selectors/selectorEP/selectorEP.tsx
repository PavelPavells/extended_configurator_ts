/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';

/**
 * Импорт экшенов
 */
import {
    fetchDataTurnstile,
    //togglePopupWindowTurnstile
} from '../../../../../actions/TurnstileActions/TurnstileActions';

/**
 * Импорт стилей
 */
import './selectorEP.scss';

/**
 * Импорт Popup-окна
 */
import EPpopup from '../../../../popup/turnstile-popup/epPopup';

/**
 * Импорт Лоадера
 */
import Loader from '../../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента SelectorBiometry
 */
interface SelectorEPProps {
    readonly data: any,
    readonly fetchDataTurnstile: (data: any, trigger: number) => void,
    //readonly togglePopupWindowTurnstile: () => void
}

interface SelectorEPState {
    readonly selectOne: number,
    readonly toggleModal: boolean
}

class SelectorEP extends React.PureComponent<SelectorEPProps, SelectorEPState> {

    state: SelectorEPState = { selectOne: 0, toggleModal: false };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        //this.props.togglePopupWindowTurnstile();
        this.setState({ toggleModal: !this.state.toggleModal });
    }

    /**
    * Хэндлер для обработки запроса селектора 'EP-2000'
    */
    private handleClickOneSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({
            selectOne: +!page_view.module_selectors[0].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 5,
                trigger_state: this.state.selectOne,
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
        /**
         * Данные из локального стейта
         */
        const { toggleModal } = this.state;
        if (turnstile.data.length === 0 && !isFetching) {
           return <Loader />;
        }
        
        return (
            /**
             * Селектор 'EP-2000'
             */
            <div>
                {turnstile.data.page_view.module_selectors.slice(0, 1).map((index: { index: string | number | undefined; }) => (
                    <div key={index.index} className="selectors__module module">
                        <div className="module__left left">
                            <div className="left__icon ep" />
                            <div className="left__text">Универсальный сетевой контроллер расширения EP-2000</div>
                            <div className="left__info info">
                                <div className="info__text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                </div>
                                <div className="info__arrow" />
                            </div>
                            {toggleModal 
                                ? 
                                    <EPpopup 
                                        handleToggleModal={this.handleToggleModal}
                                        handleClickOneSelect={this.handleClickOneSelect}
                                    /> 
                                : null
                            }
                        </div>
                        <div className="module__right right">
                            <div className="right__price">
                                {turnstile.data.page_view.model_module_list[1] !== undefined
                                    && turnstile.data.page_view.model_module_list[1].name === 'ep2000'
                                    && '+ ' + turnstile.data.page_view.model_module_list[1].price
                                }
                            </div>
                            <div className="onoffswitch">
                                <input
                                    type="checkbox"
                                    name="onoffswitch"
                                    className="onoffswitch-checkbox"
                                    id="header-checkbox"
                                    onChange={this.handleClickOneSelect}
                                    checked={turnstile.data.page_view.module_selectors[0].state}
                                />
                                <label className="onoffswitch-label" htmlFor="header-checkbox">
                                    <span className="onoffswitch-inner" />
                                    <span className="onoffswitch-switch" />
                                </label>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        );
    }
}

const mapStateToPtops = (state: ConfiguratorState) => ({
    data: state
});
export default connect(
    mapStateToPtops,
    {
        fetchDataTurnstile,
        //togglePopupWindowTurnstile
    }
)(SelectorEP);
