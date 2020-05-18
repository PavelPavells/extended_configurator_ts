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
import './selectorBiometry.scss';

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
interface SelectorBiometryProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorBiometryState {
    readonly selectFour: number
}

class SelectorBiometry extends React.PureComponent<SelectorBiometryProps, SelectorBiometryState> {

    state: SelectorBiometryState = { selectFour: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    /**
    * Хэндлер для обработки запроса селектора 'Биометрия'
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
             * Селектор 'Биометрия'
             */
            <Fragment>
                {barrier.data.page_view.module_selectors.slice(3, 4).map((index: { index: string | number | undefined; }) => (
                    <div key={index.index} className="selectors__module module">
                        <div className="module__left left">
                            <div className="left__icon bio" />
                            <div className="left__text">Биометрическая идентификация по отпечаткам пальцев</div>
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
                                    && barrier.data.page_view.model_module_list[1].name === 'fingerprint'
                                    && '+ ' + barrier.data.page_view.model_module_list[1].price
                                }
                                {barrier.data.page_view.model_module_list[2] !== undefined
                                    && barrier.data.page_view.model_module_list[2].name === 'fingerprint'
                                    && '+ ' + barrier.data.page_view.model_module_list[2].price
                                }
                                {barrier.data.page_view.model_module_list[3] !== undefined
                                    && barrier.data.page_view.model_module_list[3].name === 'fingerprint'
                                    && '+ ' + barrier.data.page_view.model_module_list[3].price
                                }
                                {barrier.data.page_view.model_module_list[4] !== undefined
                                    && barrier.data.page_view.model_module_list[4].name === 'fingerprint'
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
export default connect<{}, {}, SelectorBiometryProps>(
    mapStateToProps,
    {
        fetchDataBarrier,
        togglePopupWindowBarrier
    }
)(SelectorBiometry);