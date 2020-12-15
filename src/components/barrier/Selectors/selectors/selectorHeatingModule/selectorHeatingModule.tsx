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
} from '../../../../../actions/BarrierActions/BarrierActions';

/**
 * Импорт стилей
 */
import './selectorHeatingModule.scss';

/**
 * Импорт Popup-окна
 */
import HeatingModulePopUp from '../../../../popup/barrier-popup/heatingModulePopup';

/**
 * Импорт Лоадера
 */
import Loader from '../../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента SelectorHeatingModule
 */
interface SelectorHeatingModuleProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorHeatingModuleState {
    readonly selectTwo: number
}

class SelectorHeatingModule extends React.PureComponent<SelectorHeatingModuleProps, SelectorHeatingModuleState> {

    state: SelectorHeatingModuleState = { selectTwo: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    /**
    * Хэндлер для обработки запроса селектора 'Модуль обогрева MHP'
    */
    private handleClickTwoSelect = () => {
        const { page_view } = this.props.data.barrier.data;
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
             * Селектор 'Модуль обогрева MHP-B'
             */
            <Fragment>
                {barrier.data.page_view.module_selectors.slice(1, 2).map((index: { index: string | number | undefined; }) => (
                    <div key={index.index} className="selectors__module module">
                        <div className="module__left left">
                            <div className="left__icon emmarine" />
                            <div className="left__text">Модуль обогрева MHP</div>
                            <div className="left__info info">
                                <div className="info__text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                </div>
                                <div className="info__arrow" />
                            </div>
                            {barrier.modal ? <HeatingModulePopUp /> : null}
                        </div>
                        <div className="module__right right">
                            <div className="right__price">
                                {barrier.data.page_view.model_module_list[1] !== undefined
                                    && barrier.data.page_view.model_module_list[1].name === 'heating'
                                    && '+ ' + barrier.data.page_view.model_module_list[1].price
                                }
                                {barrier.data.page_view.model_module_list[2] !== undefined
                                    && barrier.data.page_view.model_module_list[2].name === 'heating'
                                    && '+ ' + barrier.data.page_view.model_module_list[2].price
                                }
                                {barrier.data.page_view.model_module_list[3] !== undefined
                                    && barrier.data.page_view.model_module_list[3].name === 'heating'
                                    && '+ ' + barrier.data.page_view.model_module_list[3].price
                                }
                            </div>
                            <div className="onoffswitch2">
                                <input
                                    type="checkbox"
                                    name="onoffswitch2"
                                    className="onoffswitch2-checkbox"
                                    id="header2-checkbox"
                                    onChange={this.handleClickTwoSelect}
                                    checked={barrier.data.page_view.module_selectors[1].state}
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

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(
    mapStateToProps,
    {
        fetchDataBarrier,
        togglePopupWindowBarrier
    }
)(SelectorHeatingModule);
