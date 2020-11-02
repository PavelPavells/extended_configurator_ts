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
import './selectorChangeColor.scss';

/**
 * Импорт Popup-окна
 */
import ChangeColorPopUp from '../../../../popup/barrier-popup/changeColorPopup';

/**
 * Импорт Лоадера
 */
import Loader from '../../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента SelectorChangeColor
 */
interface SelectorChangeColorProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorChangeColorState {
    readonly selectSeven: number
}

class SelectorChangeColor extends React.PureComponent<SelectorChangeColorProps, SelectorChangeColorState> {

    state: SelectorChangeColorState = { selectSeven: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    /**
    * Хэндлер для обработки запроса селектора 'Замена цвета корпуса RAL7035 на RAL1016'
    */
    private handleClickSevenSelect = () => {
        const { page_view } = this.props.data.barrier.data;
        this.setState({
            selectSeven: +!page_view.module_selectors[6].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 11,
                trigger_state: this.state.selectSeven,
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
             * Селектор 'Замена цвета корпуса RAL7035 на RAL1016'
             */
            <Fragment>
                {barrier.data.page_view.module_selectors.slice(6, 7).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors__module module none">
                                <div className="module__left left">
                                    <div className="left__icon guest-access" />
                                    <div className="left__text">Замена цвета корпуса RAL7035 на RAL1016</div>
                                </div>
                                <div className="module__right right">
                                    <div className="onoffswitch7">
                                        <input
                                            type="checkbox"
                                            className="onoffswitch7-checkbox"
                                            defaultChecked={false}
                                        />
                                        <label className="onoffswitch7-label" htmlFor="header7-checkbox">
                                            <span className="onoffswitch7-inner" />
                                            <span className="onoffswitch7-switch" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index.index} className="selectors__module module">
                                <div className="module__left left">
                                    <div className="left__icon guest-access" />
                                    <div className="left__text">Замена цвета корпуса RAL7035 на RAL1016</div>
                                    <div className="left__info info">
                                        <div className="info__text">
                                            <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                        </div>
                                        <div className="info__arrow" />
                                    </div>
                                    {barrier.modal ? <ChangeColorPopUp /> : null}
                                </div>
                                <div className="module__right right">
                                    <div className="right__price">
                                        {barrier.data.page_view.model_module_list[1] !== undefined
                                            && barrier.data.page_view.model_module_list[1].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[1].price
                                        }
                                        {barrier.data.page_view.model_module_list[2] !== undefined
                                            && barrier.data.page_view.model_module_list[2].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[2].price
                                        }
                                        {barrier.data.page_view.model_module_list[3] !== undefined
                                            && barrier.data.page_view.model_module_list[3].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[3].price
                                        }
                                        {barrier.data.page_view.model_module_list[4] !== undefined
                                            && barrier.data.page_view.model_module_list[4].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[4].price
                                        }
                                        {barrier.data.page_view.model_module_list[5] !== undefined
                                            && barrier.data.page_view.model_module_list[5].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[5].price
                                        }
                                        {barrier.data.page_view.model_module_list[6] !== undefined
                                            && barrier.data.page_view.model_module_list[6].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[6].price
                                        }
                                        {barrier.data.page_view.model_module_list[7] !== undefined
                                            && barrier.data.page_view.model_module_list[7].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[7].price
                                        }
                                    </div>
                                    <div className="onoffswitch7">
                                        <input
                                            type="checkbox"
                                            name="onoffswitch7"
                                            className="onoffswitch7-checkbox"
                                            id="header7-checkbox"
                                            onChange={this.handleClickSevenSelect}
                                            checked={barrier.data.page_view.module_selectors[6].state}
                                        />
                                        <label className="onoffswitch7-label" htmlFor="header7-checkbox">
                                            <span className="onoffswitch7-inner" />
                                            <span className="onoffswitch7-switch" />
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
export default connect(
    mapStateToProps,
    {
        fetchDataBarrier,
        togglePopupWindowBarrier
    }
)(SelectorChangeColor);
