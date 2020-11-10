import React from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataTurnstile } from '../../../actions/TurnstileActions/TurnstileActions';

import './moduleButtons.scss';

import Loader from '../../../__utils__/Loader/Loader';

interface ModuleButtonsProps {
    readonly data: any,
    readonly fetchDataTurnstile: (data: any, trigger: number) => void
}

class ModuleButtons extends React.PureComponent<ModuleButtonsProps> {
    
    public componentDidMount () {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: this.props.data.turnstile.trigger,
            trigger_state: 0,
            seria: 0,
            button_seria_state: page_view ? page_view.btn_seria : 0,
            button_corpse_state: page_view ? page_view.btn_corpse : 0,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view ? page_view.module_selectors[4].state : 0,
            selectSix: page_view ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view ? page_view.module_selectors[6].state : 0,
            selectEight: page_view ? page_view.module_selectors[7].state : 0,
            selectNine: page_view ? page_view.module_selectors[8].state : 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }

    private handleClickSeriaSTR = () => {
        const { page_view } = this.props.data.turnstile.data;
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
            selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0,
            selectNine: page_view.module_selectors[8].state !== -1 ? page_view.module_selectors[8].state : 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }

    private handleClickSeriaSTX = () => {
        const { page_view } = this.props.data.turnstile.data;
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
            selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0,
            selectNine: page_view.module_selectors[8].state !== -1 ? page_view.module_selectors[8].state : 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }

    private handleClickExecutionCompact = () => {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 3,
            trigger_state: 0,
            seria: 0,
            button_seria_state: page_view.btn_seria,
            button_corpse_state: 0,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view.module_selectors[4].state !== -1 ? page_view.module_selectors[4].state : 0,
            selectSix: page_view.module_selectors[5].state !== -1 ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view.module_selectors[6].state !== -1 ? page_view.module_selectors[6].state : 0,
            selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0,
            selectNine: page_view.module_selectors[8].state !== -1 ? page_view.module_selectors[8].state : 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }

    private handleClickExecutionThumb = () => {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 4,
            trigger_state: 0,
            seria: 0,
            button_seria_state: page_view.btn_seria,
            button_corpse_state: 1,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view.module_selectors[4].state !== -1 ? page_view.module_selectors[4].state : 0,
            selectSix: page_view.module_selectors[5].state !== -1 ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view.module_selectors[6].state !== -1 ? page_view.module_selectors[6].state : 0,
            selectEight: page_view.module_selectors[7].state !== -1 ? page_view.module_selectors[7].state : 0,
            selectNine: page_view.module_selectors[8].state !== -1 ? page_view.module_selectors[8].state : 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }

    private handleClickResetSelectors = () => {
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
            selectEight: 0,
            selectNine: 0
        };
        this.props.fetchDataTurnstile(data, data.trigger);
    }
    public render () {

        const { turnstile } = this.props.data;

        if (turnstile.data.length === 0) {
            return <Loader />;
        }
        return (
            <section className="buttons">
                <div className="buttons__top">
                    <div className="top__captions">
                        <div className="captions">Модель</div>
                        <div className="captions">Серия</div>
                        <div className="captions">Итоговая стоимость</div>
                    </div>
                    <div className="top__select">
                        <div className="select__model">{turnstile.data.page_view.model_name}</div>
                        <div className="select__seria">
                            {turnstile.data.page_view.btn_seria === 0 ?
                                <div onClick={this.handleClickSeriaSTR} className="seria open">STR</div>
                                :
                                <div onClick={this.handleClickSeriaSTR} className="seria">STR</div> 
                            }

                            {turnstile.data.page_view.btn_seria === 1 ?
                                <div onClick={this.handleClickSeriaSTX} className="seria open">STX</div>
                                :
                                <div onClick={this.handleClickSeriaSTX} className="seria">STX</div>
                            }
                        </div>
                        <div className="select__price">{turnstile.data.page_view.model_price}</div>
                    </div>
                    <div className="top__info">
                        <a
                            href={turnstile.data.page_view.download_broshure_button_link}
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ПОДРОБНЕЕ О МОДЕЛИ
                        </a>
                        <a
                            href={turnstile.data.page_view.model_base_model}
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            БАЗОВАЯ МОДЕЛЬ {/*{turnstile.data.page_view.model_module_list.length - 1 ? '(' + turnstile.data.page_view.model_module_list[0].price + ')' : null}*/}
                        </a>
                    </div>
                    <div className="top__options">
                        <div className="options__value">
                            {/*{turnstile.data.page_view.model_module_list.length - 1 === 1 ? String('+') + (turnstile.data.page_view.model_module_list.length - 1) + ' ОПЦИЯ' : null}
                            {turnstile.data.page_view.model_module_list.length - 1 > 1 ? String('+') + (turnstile.data.page_view.model_module_list.length - 1) + ' ОПЦИИ' : null}
                            {turnstile.data.page_view.model_module_list.length - 1 >= 5 ? String('+') + (turnstile.data.page_view.model_module_list.length - 1) + ' ОПЦИЙ' : null}*/}
                            {turnstile.data.page_view.model_module_list.length - 1 ? String('+') + (turnstile.data.page_view.model_module_list.length - 1) + ' ОПЦИИ' : null}
                        </div>
                        <div onClick={this.handleClickResetSelectors} className="options__reset">СБРОСИТЬ</div>
                    </div>
                </div>
                <div className="buttons__bottom">
                    <div className="captions">Исполнение</div>
                    <div className="bottom__buttons">
                        {turnstile.data.page_view.btn_corpse === 0 ?
                            <div onClick={this.handleClickExecutionCompact} className="execution open">Компактный</div>
                            :
                            <div onClick={this.handleClickExecutionCompact} className="execution">Компактный</div>
                        }
                        {turnstile.data.page_view.btn_corpse === 1 ?
                            <div onClick={this.handleClickExecutionThumb} className="execution open">Тумбовый</div>
                            :
                            <div onClick={this.handleClickExecutionThumb} className="execution">Тумбовый</div>
                        }
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect(
    mapStateToProps,
    {
        fetchDataTurnstile
    }
)(ModuleButtons);
