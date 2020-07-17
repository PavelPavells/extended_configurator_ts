/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment } from 'react';
// @ts-ignore
import { connect } from '../selectorSignalLamp/node_modules/react-redux';
import { ConfiguratorState } from '../../../../../store/store';

/**
 * Импорт экшенов
 */
import {
    fetchDataBarrier,
    togglePopupWindowBarrier
} from '../../../../../actions/dataBarrierActions';

/**
 * Импорт стилей
 */
import './selectorEmergencySiren.scss';

/**
 * Импорт Popup-окна
 */
import EmergencySirenPopup from '../../../../popup/barrier-popup/emergencySirenPopup';

/**
 * Импорт Лоадера
 */
import Loader from '../../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента SelectorEmergencySiren
 */
interface SelectorEmergencySirenProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorEmergencySirenState {
    readonly selectFive: number
}

class SelectorEmergencySiren extends React.PureComponent<SelectorEmergencySirenProps, SelectorEmergencySirenState> {

    state: SelectorEmergencySirenState = { selectFive: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    /**
     * Хэндлер для обработки запроса селектора 'Аварийная сирена'
     */
    private handleClickFiveSelect = () => {
        const { page_view } = this.props.data.barrier.data;
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
             * Селектор 'Аварийная сирена'
             */
            <Fragment>
                {barrier.data.page_view.module_selectors.slice(4, 5).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors__module module none">
                                <div className="module__left left">
                                    <div className="left__icon time" />
                                    <div className="left__text">Аварийная сирена</div>
                                </div>
                                <div className="module__right right">
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
                            <div key={index.index} className="selectors__module module">
                                <div className="module__left left">
                                    <div className="left__icon time" />
                                    <div className="left__text">Аварийная сирена</div>
                                    <div className="left__info info">
                                        <div className="info__text">
                                            <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                        </div>
                                        <div className="info__arrow" />
                                    </div>
                                    {barrier.modal ? <EmergencySirenPopup /> : null}
                                </div>
                                <div className="module__right right">
                                    <div className="right__price">
                                        {barrier.data.page_view.model_module_list[1] !== undefined
                                            && barrier.data.page_view.model_module_list[1].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[1].price
                                        }
                                        {barrier.data.page_view.model_module_list[2] !== undefined
                                            && barrier.data.page_view.model_module_list[2].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[2].price
                                        }
                                        {barrier.data.page_view.model_module_list[3] !== undefined
                                            && barrier.data.page_view.model_module_list[3].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[3].price
                                        }
                                        {barrier.data.page_view.model_module_list[4] !== undefined
                                            && barrier.data.page_view.model_module_list[4].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[4].price
                                        }
                                        {barrier.data.page_view.model_module_list[5] !== undefined
                                            && barrier.data.page_view.model_module_list[5].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[5].price
                                        }
                                    </div>
                                    <div className="onoffswitch5">
                                        <input
                                            type="checkbox"
                                            name="onoffswitch5"
                                            className="onoffswitch5-checkbox"
                                            id="header5-checkbox"
                                            onChange={this.handleClickFiveSelect}
                                            checked={barrier.data.page_view.module_selectors[4].state}
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

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect<{}, {}, SelectorEmergencySirenProps>(
    mapStateToProps,
    {
        fetchDataBarrier,
        togglePopupWindowBarrier
    }
)(SelectorEmergencySiren);
