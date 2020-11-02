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
    fetchDataBarrier,
    togglePopupWindowBarrier
} from '../../../../../actions/BarrierActions/BarrierActions';

/**
 * Импорт стилей
 */
import './selectorSignalLamp.scss';

/**
 * Импорт Popup-окна
 */
import SignalLampPopup from '../../../../popup/barrier-popup/signalLampPopup';

/**
 * Импорт Лоадера
 */
import Loader from '../../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента SelectorSignalLamp
 */
interface SelectorSignalLampProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorSignalLampState {
    readonly selectFour: number
}

class SelectorSignalLamp extends React.PureComponent<SelectorSignalLampProps, SelectorSignalLampState> {

    state: SelectorSignalLampState = { selectFour: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    /**
    * Хэндлер для обработки запроса селектора 'Сигнальная лампа LS-01'
    */
    private handleClickFourSelect = () => {
        const { page_view } = this.props.data.barrier.data;
        this.setState({
            selectFour: +!page_view.module_selectors[3].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 8,
                trigger_state: this.state.selectFour,
                button_seria_state: page_view.btn_seria,
                button_corpse_state: page_view.btn_corpse,
                selectOne: page_view.module_selectors[0].state,
                selectTwo: page_view.module_selectors[1].state,
                selectThree: page_view.module_selectors[2].state,
                selectFour: page_view.module_selectors[3].state,
                selectFive: page_view.module_selectors[4].state,
                selectSix: page_view.module_selectors[5].state,
                selectSeven: page_view.module_selectors[6].state,
                //selectEight: page_view.module_selectors[7].state,
                //selectNine: page_view.module_selectors[8].state
            };
            this.props.fetchDataBarrier(data, data.trigger);
        });
    }

    public render () {
        /**
         * Данные из глобального стора
         */
        const { barrier, isFetching } = this.props.data;
        if (barrier.data.length === 0 && !isFetching) {
           return <Loader />;
        }

        return (

            /**
             * Селектор 'Сигнальная лампа LS-01'
             */
            <Fragment>
                {barrier.data.page_view.module_selectors.slice(3, 4).map((index: { index: string | number | undefined; }) => (
                    <div key={index.index} className="selectors__module module">
                        <div className="module__left left">
                            <div className="left__icon bio" />
                            <div className="left__text">Сигнальная лампа LS-01</div>
                            <div className="left__info info">
                                <div className="info__text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                </div>
                                <div className="info__arrow" />
                            </div>
                            {barrier.modal ? <SignalLampPopup /> : null}
                        </div>
                        <div className="module__right right">
                            <div className="right__price">
                                {barrier.data.page_view.model_module_list[1] !== undefined 
                                    && barrier.data.page_view.model_module_list[1].name === 'signallamp'
                                    && '+ ' + barrier.data.page_view.model_module_list[1].price
                                }
                                {barrier.data.page_view.model_module_list[2] !== undefined
                                    && barrier.data.page_view.model_module_list[2].name === 'signallamp'
                                    && '+ ' + barrier.data.page_view.model_module_list[2].price
                                }
                                {barrier.data.page_view.model_module_list[3] !== undefined
                                    && barrier.data.page_view.model_module_list[3].name === 'signallamp'
                                    && '+ ' + barrier.data.page_view.model_module_list[3].price
                                }
                                {barrier.data.page_view.model_module_list[4] !== undefined
                                    && barrier.data.page_view.model_module_list[4].name === 'signallamp'
                                    && '+ ' + barrier.data.page_view.model_module_list[4].price
                                }
                            </div>
                            <div className="onoffswitch4">
                                <input
                                    type="checkbox"
                                    name="onoffswitch4"
                                    className="onoffswitch4-checkbox"
                                    id="header4-checkbox"
                                    onChange={this.handleClickFourSelect}
                                    checked={barrier.data.page_view.module_selectors[3].state}
                                />
                                <label className="onoffswitch4-label" htmlFor="header4-checkbox">
                                    <span className="onoffswitch4-inner" />
                                    <span className="onoffswitch4-switch" />
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
export default connect(
    mapStateToProps,
    {
        fetchDataBarrier,
        togglePopupWindowBarrier
    }
)(SelectorSignalLamp);
