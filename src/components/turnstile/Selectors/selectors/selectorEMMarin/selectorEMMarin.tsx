/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';
import {
    fetchDataTurnstile,
    //togglePopupWindowTurnstile
} from '../../../../../actions/TurnstileActions/TurnstileActions';
import EMMarinPopup from '../../../../popup/turnstile-popup/emmarinPopup';
import Loader from '../../../../../__utils__/Loader/Loader';
import './selectorEMMarin.scss';

interface SelectorEMMarinProps {
    readonly data: any,
    readonly fetchDataTurnstile: (data: any, trigger: number) => void,
    //readonly togglePopupWindowTurnstile: () => void
}

interface SelectorEMMarinState {
    readonly selectTwo: number,
    readonly toggleModal: boolean
}

class SelectorEMMarin extends React.PureComponent<SelectorEMMarinProps, SelectorEMMarinState> {
    state: SelectorEMMarinState = { selectTwo: 0, toggleModal: false };

    private handleToggleModal = () => {
        //this.props.togglePopupWindowTurnstile();
        this.setState({ toggleModal: !this.state.toggleModal })
    }

    private handleClickTwoSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
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
                {turnstile.data.page_view.module_selectors.slice(1, 2).map((index: { index: string | number | undefined; }) => (
                    <div key={index.index} className="selectors__module module">
                        <div className="module__left left">
                            <div className="left__icon emmarine" />
                            <div className="left__text">RFID идентификаторы EMMarine 125kHZ</div>
                            <div className="left__info info">
                                <div className="info__text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                </div>
                                <div className="info__arrow" />
                            </div>
                            {toggleModal
                                ? 
                                    <EMMarinPopup 
                                        handleToggleModal={this.handleToggleModal}
                                        handleClickTwoSelect={this.handleClickTwoSelect}
                                   />
                                : null
                            }
                        </div>
                        <div className="module__right right">
                            <div className="right__price">
                                {turnstile.data.page_view.model_module_list[1] !== undefined
                                    && turnstile.data.page_view.model_module_list[1].name === 'emarine'
                                    && '+ ' + turnstile.data.page_view.model_module_list[1].price
                                }
                                {/*{turnstile.data.page_view.model_module_list[2] !== undefined
                                    && turnstile.data.page_view.model_module_list[2].name === 'emarine'
                                    && '+ ' + turnstile.data.page_view.model_module_list[2].price
                                }
                                {turnstile.data.page_view.model_module_list[3] !== undefined
                                    && turnstile.data.page_view.model_module_list[3].name === 'emarine'
                                    && '+ ' + turnstile.data.page_view.model_module_list[3].price
                                }*/}
                            </div>
                            <div className="onoffswitch2">
                                <input
                                    type="checkbox"
                                    name="onoffswitch2"
                                    className="onoffswitch2-checkbox"
                                    id="header2-checkbox"
                                    onChange={this.handleClickTwoSelect}
                                    checked={turnstile.data.page_view.module_selectors[1].state}
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
)(SelectorEMMarin);
