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
} from '../../../../../actions/dataBarrierActions';

/**
 * Импорт стилей
 */
import './selectorSteelCase.scss';

/**
 * Импорт прелоадера
 */
import PopUp from '../../../../popup/popup';

/**
 * Импорт Лоадера
 */
import Loader from '../../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента SelectorBiometry
 */
interface SelectorSteelCaseProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorSteelCaseState {
    readonly selectEight: number
}

class SelectorSteelCase extends React.PureComponent<SelectorSteelCaseProps, SelectorSteelCaseState> {

    state: SelectorSteelCaseState = { selectEight: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    /**
    * Хэндлер для обработки запроса селектора 'Корпус'
    */
    private handleClickEightSelect = () => {
        const { page_view } = this.props.data.barrier.data;
        this.setState({
            selectEight: +!page_view.module_selectors[7].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 12,
                trigger_state: this.state.selectEight,
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
             * Селектор 'Корпус'
             */
            <Fragment>
                {barrier.data.page_view.module_selectors.slice(7, 8).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors__module module none">
                                <div className="module__left left">
                                    <div className="left__icon steel" />
                                    <div className="left__text">Корпус кожуха из нержавеющей стали</div>
                                </div>
                                <div className="module__right right">
                                    <div className="onoffswitch8">
                                        <input
                                            type="checkbox"
                                            className="onoffswitch8-checkbox"
                                            defaultChecked={false}
                                        />
                                        <label className="onoffswitch8-label" htmlFor="header8-checkbox">
                                            <span className="onoffswitch8-inner" />
                                            <span className="onoffswitch8-switch" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index.index} className="selectors__module module">
                                <div className="module__left left">
                                    <div className="left__icon steel" />
                                    <div className="left__text">Корпус кожуха из нержавеющей стали</div>
                                    <div className="left__info info">
                                        <div className="info__text">
                                            <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                            {barrier.modal ? <PopUp /> : null}
                                        </div>
                                        <div className="info__arrow" />
                                    </div>
                                </div>
                                <div className="module__right right">
                                    <div className="right__price">
                                        {barrier.data.page_view.model_module_list[1] !== undefined
                                            && barrier.data.page_view.model_module_list[1].name === 'stainless'
                                            && '+ ' + barrier.data.page_view.model_module_list[1].price
                                        }
                                        {barrier.data.page_view.model_module_list[2] !== undefined
                                            && barrier.data.page_view.model_module_list[2].name === 'stainless'
                                            && '+ ' + barrier.data.page_view.model_module_list[2].price
                                        }
                                        {barrier.data.page_view.model_module_list[3] !== undefined
                                            && barrier.data.page_view.model_module_list[3].name === 'stainless'
                                            && '+ ' + barrier.data.page_view.model_module_list[3].price
                                        }
                                        {barrier.data.page_view.model_module_list[4] !== undefined
                                            && barrier.data.page_view.model_module_list[4].name === 'stainless'
                                            && '+ ' + barrier.data.page_view.model_module_list[4].price
                                        }
                                        {barrier.data.page_view.model_module_list[5] !== undefined
                                            && barrier.data.page_view.model_module_list[5].name === 'stainless'
                                            && '+ ' + barrier.data.page_view.model_module_list[5].price
                                        }
                                        {barrier.data.page_view.model_module_list[6] !== undefined
                                            && barrier.data.page_view.model_module_list[6].name === 'stainless'
                                            && '+ ' + barrier.data.page_view.model_module_list[6].price
                                        }
                                        {barrier.data.page_view.model_module_list[7] !== undefined
                                            && barrier.data.page_view.model_module_list[7].name === 'stainless'
                                            && '+ ' + barrier.data.page_view.model_module_list[7].price
                                        }
                                        {barrier.data.page_view.model_module_list[8] !== undefined
                                            && barrier.data.page_view.model_module_list[8].name === 'stainless'
                                            && '+ ' + barrier.data.page_view.model_module_list[8].price
                                        }
                                    </div>
                                    <div className="onoffswitch8">
                                        <input
                                            type="checkbox"
                                            name="onoffswitch8"
                                            className="onoffswitch8-checkbox"
                                            id="header8-checkbox"
                                            onChange={this.handleClickEightSelect}
                                            checked={barrier.data.page_view.module_selectors[7].state}
                                        />
                                        <label className="onoffswitch8-label" htmlFor="header8-checkbox">
                                            <span className="onoffswitch8-inner" />
                                            <span className="onoffswitch8-switch" />
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
export default connect<{}, {}, SelectorSteelCaseProps>(
    mapStateToProps,
    {
        fetchDataBarrier,
        togglePopupWindowBarrier
    }
)(SelectorSteelCase);
