/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';
import {
    fetchDataTurnstile,
   //togglePopupWindowTurnstile
} from '../../../../../actions/TurnstileActions/TurnstileActions';
import Guest2DPopup from '../../../../popup/turnstile-popup/guest2DPopup';
import Loader from '../../../../../__utils__/Loader/Loader';

import './selectorGuest2D.scss';

interface SelectorGuest2DProps {
    readonly data: any,
    readonly fetchDataTurnstile: (data: any, trigger: number) => void,
    //readonly togglePopupWindowTurnstile: () => void
}

interface SelectorGuest2DState {
    readonly selectSeven: number,
    readonly toggleModal: boolean
}

class SelectorGuest2D extends React.PureComponent<SelectorGuest2DProps, SelectorGuest2DState> {
    state: SelectorGuest2DState = { selectSeven: 0, toggleModal: false };
    private handleToggleModal = () => {
        //this.props.togglePopupWindowTurnstile();
        this.setState({ toggleModal: !this.state.toggleModal });
    }

    private handleClickSevenSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
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
                selectEight: page_view.module_selectors[7].state,
                selectNine: page_view.module_selectors[8].state
            };
            this.props.fetchDataTurnstile(data, data.trigger);
        });
    }

    public render () {

        const { turnstile, isFetching } = this.props.data;
        const { toggleModal } = this.state;

        if (turnstile.data.length === 0 && !isFetching) {
           return <Loader />;
        }
        
        return (
            <section>
                {turnstile.data.page_view.module_selectors.slice(6, 7).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors__module module none">
                                <div className="module__left left">
                                    <div className="left__icon guest-access" />
                                    <div className="left__text">Гостевой доступ по 2D штрих-кодам</div>
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
                                    <div className="left__text">Гостевой доступ по 2D штрих-кодам</div>
                                    <div className="left__info info">
                                        <div className="info__text">
                                            <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                        </div>
                                        <div className="info__arrow" />
                                    </div>
                                    {toggleModal
                                        ?
                                            <Guest2DPopup
                                                handleToggleModal={this.handleToggleModal}
                                                handleClickSevenSelect={this.handleClickSevenSelect}
                                            />
                                        : null
                                    }
                                </div>
                                <div className="module__right right">
                                    <div className="right__price">
                                        {/*{turnstile.data.page_view.model_module_list[1] !== undefined
                                            && turnstile.data.page_view.model_module_list[1].name === 'qrvisitors'
                                            && '+ ' + turnstile.data.page_view.model_module_list[1].price
                                        }
                                        {turnstile.data.page_view.model_module_list[2] !== undefined
                                            && turnstile.data.page_view.model_module_list[2].name === 'qrvisitors'
                                            && '+ ' + turnstile.data.page_view.model_module_list[2].price
                                        }
                                        {turnstile.data.page_view.model_module_list[3] !== undefined
                                            && turnstile.data.page_view.model_module_list[3].name === 'qrvisitors'
                                            && '+ ' + turnstile.data.page_view.model_module_list[3].price
                                        }
                                        {turnstile.data.page_view.model_module_list[4] !== undefined
                                            && turnstile.data.page_view.model_module_list[4].name === 'qrvisitors'
                                            && '+ ' + turnstile.data.page_view.model_module_list[4].price
                                        }
                                        {turnstile.data.page_view.model_module_list[5] !== undefined
                                            && turnstile.data.page_view.model_module_list[5].name === 'qrvisitors'
                                            && '+ ' + turnstile.data.page_view.model_module_list[5].price
                                        }*/}
                                        {turnstile.data.page_view.model_module_list[6] !== undefined
                                            && turnstile.data.page_view.model_module_list[6].name === 'qrvisitors'
                                            && '+ ' + turnstile.data.page_view.model_module_list[6].price
                                        }
                                        {/*{turnstile.data.page_view.model_module_list[7] !== undefined
                                            && turnstile.data.page_view.model_module_list[7].name === 'qrvisitors'
                                            && '+ ' + turnstile.data.page_view.model_module_list[7].price
                                        }*/}
                                    </div>
                                    <div className="onoffswitch7">
                                        <input
                                            type="checkbox"
                                            name="onoffswitch7"
                                            className="onoffswitch7-checkbox"
                                            id="header7-checkbox"
                                            onChange={this.handleClickSevenSelect}
                                            checked={turnstile.data.page_view.module_selectors[6].state}
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
        fetchDataTurnstile,
        //togglePopupWindowTurnstile
    }
)(SelectorGuest2D as any);
