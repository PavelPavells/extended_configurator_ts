/* eslint-disable max-len */
/* eslint-disable camelcase */
/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment } from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';

/**
 * Импорт экшенов
 */
import { fetchDataBarrier } from '../../../actions/BarrierActions/BarrierActions';

/**
 * Импорт стилей
 */
import './moduleButtons.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleButtons
 */
interface ModuleButtonsProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void
}

class ModuleButtons extends React.PureComponent<ModuleButtonsProps> {

    /**
    * Запрос данных
    */
    // public componentDidMount() {
    //     const { page_view } = this.props.data.barrier.data;
    //     let data = {
    //         app_id: 'id',
    //         trigger: this.props.data.turnstile.trigger,
    //         trigger_state: 0,
    //         seria: 0,
    //         button_seria_state: page_view ? page_view.btn_seria : 0,
    //         button_corpse_state: page_view ? page_view.btn_corpse : 0,
    //         selectOne: page_view ? page_view.module_selectors[0].state : 0,
    //         selectTwo: page_view ? page_view.module_selectors[1].state : 0,
    //         selectThree: page_view ? page_view.module_selectors[2].state : 0,
    //         selectFour: page_view ? page_view.module_selectors[3].state : 0,
    //         selectFive: page_view ? page_view.module_selectors[4].state : 0,
    //         selectSix: page_view ? page_view.module_selectors[5].state : 0,
    //         selectSeven: page_view ? page_view.module_selectors[6].state : 0,
    //         selectEight: page_view ? page_view.module_selectors[7].state : 0
    //     };
    //     this.props.fetchDataBarrier(data, data.trigger);
    // }

    /**
    * Хэндлер для обработки запроса Серии STR
    */
    /**
    * Хэндлер для обработки запроса Серии STR
    */
   private handleClickSeriaRBS = () => {
    return;
    const { page_view } = this.props.data.barrier.data;
    let data = {
        app_id: 'id',
        trigger: 1,
        trigger_state: 0,
        seria: 0,
        button_seria_state: 0,
        button_corpse_state: page_view.btn_corpse,
        selectOne: page_view ? page_view.module_selectors[0].state : 0,
        selectTwo: page_view ? page_view.module_selectors[1].state : 0,
        selectThree: page_view ? page_view.module_selectors[2].state : 0,
        selectFour: page_view ? page_view.module_selectors[3].state : 0,
        selectFive: page_view.module_selectors[4].state !== -1 ? page_view.module_selectors[4].state : 0,
        selectSix: page_view.module_selectors[5].state !== -1 ? page_view.module_selectors[5].state : 0,
        selectSeven: page_view.module_selectors[6].state !== -1 ? page_view.module_selectors[6].state : 0,
        selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0

    };
    // this.props.fetchDataBarrier(data, data.trigger);
}

    /**
    * Хэндлер для обработки запроса Серии STX
    */
    private handleClickSeriaSBA = () => {
        return;
        const { page_view } = this.props.data.barrier.data;
        let data = {
            app_id: 'id',
            trigger: 2,
            trigger_state: 0,
            seria: 0,
            button_seria_state: 1,
            button_corpse_state: page_view.btn_corpse,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view.module_selectors[4].state !== -1 ? page_view.module_selectors[4].state : 0,
            selectSix: page_view.module_selectors[5].state !== -1 ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view.module_selectors[6].state !== -1 ? page_view.module_selectors[6].state : 0,
            selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0
        };
        // this.props.fetchDataBarrier(data, data.trigger);
    }

    /**
    * Хэндлер для обработки запроса сброса выбранных селекторов
    */
    private handleClickResetSelectors = () => {
        return;
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            trigger: this.props.data.turnstile.trigger,
            button_seria_state: page_view.btn_seria,
            button_corpse_state: page_view.btn_corpse,
            reset_model: 1,
            selectOne: 0,
            selectTwo: 0,
            selectThree: 0,
            selectFour: 0,
            selectFive: 0,
            selectSix: 0,
            selectSeven: 0,
            selectEight: 0
        };
        this.props.fetchDataBarrier(data, data.trigger);
    }

    public render () {
        /**
        * Данные из Глобального Стора
        */
        const { barrier, isFetching } = this.props.data;
        //console.log(this.props.data.turnstile.trigger)
        // if (barrier.data.length === 0 && !isFetching) {
        //    return <Loader />;
        // }
        return (
            /**
             *  Модуль выбора Серии/Исполнения
             */
            <section className="buttons--barrier">
                <div className="buttons__top">

                    {/**
                     * Описание
                     */}
                    <div className="top__captions">
                        <div className="captions">Модель</div>
                        {/* <div className="captions__seria">Серия</div> */}
                        <div className="captions">Итоговая стоимость</div>
                    </div>
                    <div className="top__select">
                        <div className="model">RBS 00-00.0001{/* {barrier.data.page_view.model_name} */}</div>

                        {/**
                         * Серия STR/STX
                         */}
                        <div className="select__seria">
                            {/* {true ?//barrier.data.page_view.btn_seria === 0 ?
                                <Fragment>
                                    <div onClick={this.handleClickSeriaRBS} className="seria open">STR</div>
                                </Fragment> :
                                <Fragment>
                                    <div onClick={this.handleClickSeriaRBS} className="seria">STR</div>
                                </Fragment>
                            }

                            {false ? //barrier.data.page_view.btn_seria === 1 ?
                                <Fragment>
                                    <div onClick={this.handleClickSeriaSBA} className="seria open">STX</div>
                                </Fragment> :
                                <Fragment>
                                    <div onClick={this.handleClickSeriaSBA} className="seria">STX</div>
                                </Fragment>
                            } */}
                        </div>
                        <div className="price">44 444P{/* {barrier.data.page_view.model_price} */}</div>
                    </div>

                    {/**
                     * Серия STR/STX
                     */}
                    <div className="top__info">
                        <a
                            // href={barrier.data.page_view.download_broshure_button_link}
                            className="info"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ПОДРОБНЕЕ О МОДЕЛИ
                        </a>
                        <a
                            // href={barrier.data.page_view.model_base_model}
                            className="info"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            БАЗОВАЯ МОДЕЛЬ 44 444P{/* {barrier.data.page_view.model_module_list.length - 1 >= 1 ? '(' + barrier.data.page_view.model_module_list[0].price + ')' : null} */}
                        </a>
                    </div>
                    <div className="top__options">
                        <div className="options__value">
                            {/* {barrier.data.page_view.model_module_list.length - 1 === 1 ? String('+') + (barrier.data.page_view.model_module_list.length - 1) + ' ОПЦИЯ' : null}
                            {barrier.data.page_view.model_module_list.length - 1 > 1 ? String('+') + (barrier.data.page_view.model_module_list.length - 1) + ' ОПЦИИ' : null}
                            {barrier.data.page_view.model_module_list.length - 1 >= 5 ? String('+') + (barrier.data.page_view.model_module_list.length - 1) + ' ОПЦИЙ' : null} */}
                        </div>
                        <div onClick={this.handleClickResetSelectors} className="options__reset">СБРОСИТЬ</div>
                    </div>
                </div>
                <div className="buttons__bottom">
                    <div className="captions">Серия</div>

                    {/**
                     * Исполнение Компактный/Тумбовый
                     */}
                    <div className="bottom__buttons">
                        {true ? //barrier.data.page_view.btn_corpse === 0 ?
                            <Fragment>
                                <div onClick={this.handleClickSeriaRBS} className="buttons open">RBS</div>
                            </Fragment> :
                            <Fragment>
                                <div onClick={this.handleClickSeriaRBS} className="buttons">RBS</div>
                            </Fragment>
                        }
                        {false ? //{barrier.data.page_view.btn_corpse === 1 ?
                            <Fragment>
                                <div onClick={this.handleClickSeriaSBA} className="buttons open">RBN</div>
                            </Fragment> :
                            <Fragment>
                                <div onClick={this.handleClickSeriaSBA} className="buttons">RBN</div>
                            </Fragment>
                        }
                        {false ? //{barrier.data.page_view.btn_corpse === 1 ?
                            <Fragment>
                                <div onClick={this.handleClickSeriaSBA} className="buttons open">SBN</div>
                            </Fragment> :
                            <Fragment>
                                <div onClick={this.handleClickSeriaSBA} className="buttons">SBN</div>
                            </Fragment>
                        }
                        {false ? //{barrier.data.page_view.btn_corpse === 1 ?
                            <Fragment>
                                <div onClick={this.handleClickSeriaSBA} className="buttons open">SBV</div>
                            </Fragment> :
                            <Fragment>
                                <div onClick={this.handleClickSeriaSBA} className="buttons">SBV</div>
                            </Fragment>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect(
    mapStateToProps,
    {
        fetchDataBarrier
    }
)(ModuleButtons);