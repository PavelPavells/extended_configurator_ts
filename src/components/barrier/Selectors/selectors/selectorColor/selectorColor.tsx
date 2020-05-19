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
import './selectorColor.scss';

/**
 * Импорт прелоадера
 */
//import ColorPopUp from '../../../../popup/popup';

/**
 * Импорт Лоадера
 */
import Loader from '../../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента SelectorBiometry
 */
interface SelectorColorProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorColorState {
    readonly selectThree: number
}

class SelectorColor extends React.PureComponent<SelectorColorProps, SelectorColorState> {

    state: SelectorColorState = { selectThree: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    /**
    * Хэндлер для обработки запроса селектора 'Цвет вместо 7035 желтый-G'
    */
    private handleClickThreeSelect = () => {
        const { page_view } = this.props.data.barrier.data;
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
             * Селектор 'Цвет вместо 7035 желтый-G'
             */
            <Fragment>
                {barrier.data.page_view.module_selectors.slice(2, 3).map((index: { index: string | number | undefined; }) => (
                    <div key={index.index} className="selectors__module module">
                        <div className="module__left left">
                            <div className="left__icon mifire" />
                            <div className="left__text">Цвет вместо 7035 желтый-G</div>
                            <div className="left__info info">
                                <div className="info__text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                    {/*{barrier.modal ? <ColorPopUp /> : null}*/}
                                </div>
                                <div className="info__arrow" />
                            </div>
                        </div>
                        <div className="module__right right">
                            <div className="right__price">
                                {barrier.data.page_view.model_module_list[1] !== undefined
                                    && barrier.data.page_view.model_module_list[1].name === 'color'
                                    && '+ ' + barrier.data.page_view.model_module_list[1].price
                                }
                                {barrier.data.page_view.model_module_list[2] !== undefined
                                    && barrier.data.page_view.model_module_list[2].name === 'color'
                                    && '+ ' + barrier.data.page_view.model_module_list[2].price
                                }
                                {barrier.data.page_view.model_module_list[3] !== undefined
                                    && barrier.data.page_view.model_module_list[3].name === 'color'
                                    && '+ ' + barrier.data.page_view.model_module_list[3].price
                                }
                            </div>
                            <div className="onoffswitch3">
                                <input
                                    type="checkbox"
                                    name="onoffswitch3"
                                    className="onoffswitch3-checkbox"
                                    id="header3-checkbox"
                                    onChange={this.handleClickThreeSelect}
                                    checked={barrier.data.page_view.module_selectors[2].state}
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
export default connect<{}, {}, SelectorColorProps>(
    mapStateToProps,
    {
        fetchDataBarrier,
        togglePopupWindowBarrier
    }
)(SelectorColor);
