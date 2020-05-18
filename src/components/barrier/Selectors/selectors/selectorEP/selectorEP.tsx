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
import './selectorEP.scss';

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
interface SelectorEPProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorEPState {
    readonly selectOne: number
}

class SelectorEP extends React.PureComponent<SelectorEPProps, SelectorEPState> {

    state: SelectorEPState = { selectOne: 0 };

    /**
     * Открыть/Закрыть модальное окно
     */
    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    /**
    * Хэндлер для обработки запроса селектора 'EP-2000'
    */
    private handleClickOneSelect = () => {
        const { page_view } = this.props.data.barrier.data;
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
             * Селектор 'EP-2000'
             */
            <Fragment>
                {barrier.data.page_view.module_selectors.slice(0, 1).map((index: { index: string | number | undefined; }) => (
                    <div key={index.index} className="selectors__module module">
                        <div className="module__left left">
                            <div className="left__icon ep" />
                            <div className="left__text">Универсальный сетевой контроллер расширения EP-2000</div>
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
                                    && barrier.data.page_view.model_module_list[1].name === 'ep2000'
                                    && '+ ' + barrier.data.page_view.model_module_list[1].price
                                }
                            </div>
                            <div className="onoffswitch">
                                <input
                                    type="checkbox"
                                    name="onoffswitch"
                                    className="onoffswitch-checkbox"
                                    id="header-checkbox"
                                    onChange={this.handleClickOneSelect}
                                    checked={barrier.data.page_view.module_selectors[0].state}
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
            </Fragment>
        );
    }
}

const mapStateToPtops = (state: ConfiguratorState) => ({
    data: state
});
export default connect<{}, {}, SelectorEPProps>(
    mapStateToPtops,
    {
        fetchDataBarrier,
        togglePopupWindowBarrier
    }
)(SelectorEP);
