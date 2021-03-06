/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';
import {
    fetchDataTurnstile,
    //togglePopupWindowTurnstile
} from '../../../../../actions/TurnstileActions/TurnstileActions';
import RDUpopup from '../../../../popup/turnstile-popup/rduPopup';
import Loader from '../../../../../__utils__/Loader/Loader';
import './selectorRDU.scss';

interface SelectorRDUProps {
    readonly data: any,
    readonly fetchDataTurnstile: (data: any, trigger: number) => void,
    //readonly togglePopupWindowTurnstile: () => void
}

interface SelectorRDUState {
    readonly selectNine: number,
    readonly toggleModal: boolean
}

class SelectorRDU extends React.PureComponent<SelectorRDUProps, SelectorRDUState> {
    state: SelectorRDUState = { selectNine: 0, toggleModal: false };

    private handleToggleModal = () => {
        //this.props.togglePopupWindowTurnstile();
        this.setState({ toggleModal: !this.state.toggleModal });
    }

    private handleClickNineSelect = () => {
        const { page_view } = this.props.data.turnstile.data;
        this.setState({
            selectNine: +!page_view.module_selectors[8].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 13,
                trigger_state: this.state.selectNine,
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
                {/*{turnstile.data.page_view.module_selectors.slice(8, 9).map((index: { index: string | number | undefined; }) => (*/}
                    <div className="selectors__module module">
                        <div className="module__left left">
                            <div className="left__icon rdu" />
                            <div className="left__text">Модуль радиопультов RDU-04</div>
                            <div className="left__info info">
                                <div className="info__text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                </div>
                                <div className="info__arrow" />
                            </div>
                            {toggleModal
                                ? 
                                    <RDUpopup
                                        handleToggleModal={this.handleToggleModal}
                                        handleClickNineSelect={this.handleClickNineSelect}
                                    />
                                : null
                            }
                        </div>
                        <div className="module__right right">
                            <div className="right__price">
                                {/*{turnstile.data.page_view.model_module_list[1] !== undefined
                                    && turnstile.data.page_view.model_module_list[1].name === 'rdu'
                                    && '+ ' + turnstile.data.page_view.model_module_list[1].price
                                }
                                {turnstile.data.page_view.model_module_list[2] !== undefined
                                    && turnstile.data.page_view.model_module_list[2].name === 'rdu'
                                    && '+ ' + turnstile.data.page_view.model_module_list[2].price
                                }
                                {turnstile.data.page_view.model_module_list[3] !== undefined
                                    && turnstile.data.page_view.model_module_list[3].name === 'rdu'
                                    && '+ ' + turnstile.data.page_view.model_module_list[3].price
                                }
                                {turnstile.data.page_view.model_module_list[4] !== undefined
                                    && turnstile.data.page_view.model_module_list[4].name === 'rdu'
                                    && '+ ' + turnstile.data.page_view.model_module_list[4].price
                                }
                                {turnstile.data.page_view.model_module_list[5] !== undefined
                                    && turnstile.data.page_view.model_module_list[5].name === 'rdu'
                                    && '+ ' + turnstile.data.page_view.model_module_list[5].price
                                }
                                {turnstile.data.page_view.model_module_list[6] !== undefined
                                    && turnstile.data.page_view.model_module_list[6].name === 'rdu'
                                    && '+ ' + turnstile.data.page_view.model_module_list[6].price
                                }
                                {turnstile.data.page_view.model_module_list[7] !== undefined
                                    && turnstile.data.page_view.model_module_list[7].name === 'rdu'
                                    && '+ ' + turnstile.data.page_view.model_module_list[7].price
                                }
                                {turnstile.data.page_view.model_module_list[8] !== undefined
                                    && turnstile.data.page_view.model_module_list[8].name === 'rdu'
                                    && '+ ' + turnstile.data.page_view.model_module_list[8].price
                                }
                                {turnstile.data.page_view.model_module_list[9] !== undefined
                                    && turnstile.data.page_view.model_module_list[9].name === 'rdu'
                                    && '+ ' + turnstile.data.page_view.model_module_list[9].price} 
                                */}
                            </div>
                            <div className="onoffswitch9">
                                <input
                                    type="checkbox"
                                    name="onoffswitch9"
                                    className="onoffswitch9-checkbox"
                                    id="header9-checkbox"
                                    //onChange={this.handleClickNineSelect}
                                    //checked={turnstile.data.page_view.module_selectors[8].state}
                                />
                                <label className="onoffswitch9-label" htmlFor="header9-checkbox">
                                    <span className="onoffswitch9-inner" />
                                    <span className="onoffswitch9-switch" />
                                </label>
                            </div>
                        </div>
                    </div>
                {/*})
                )}*/}
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
        fetchDataTurnstile,
        //togglePopupWindowTurnstile
    }
)(SelectorRDU);