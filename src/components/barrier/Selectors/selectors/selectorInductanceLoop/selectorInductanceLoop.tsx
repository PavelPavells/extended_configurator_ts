/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';
import {
    fetchDataBarrier,
    togglePopupWindowBarrier
} from '../../../../../actions/BarrierActions/BarrierActions';

import './selectorInductanceLoop.scss';

import InductanceLoopPopUp from '../../../../popup/barrier-popup/inductanceLoopPopup';
import Loader from '../../../../../__utils__/Loader/Loader';

interface SelectorInductanceLoopProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorInductanceLoopState {
    readonly selectSix: number
}

class SelectorInductanceLoop extends React.PureComponent<SelectorInductanceLoopProps, SelectorInductanceLoopState> {

    state: SelectorInductanceLoopState = { selectSix: 0 };

    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    private handleClickSixSelect = () => {
        const { page_view } = this.props.data.barrier.data;
        this.setState({
            selectSix: +!page_view.module_selectors[5].state
        }, () => {
            let data = {
                app_id: 'id',
                trigger: 10,
                trigger_state: this.state.selectSix,
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
        // const { barrier, isFetching } = this.props.data;
        // if (barrier.data.length === 0 && !isFetching) {
        //    return <Loader />;
        // }

        return (
            <Fragment>
                {/* {barrier.data.page_view.module_selectors.slice(5, 6).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors__module--barrier none">
                                <div className="module__left">
                                    <div className="left__icon one-visits" />
                                    <div className="left__text">Модуль подключения петли индуктивности VLD-10</div>
                                </div>
                                <div className="module__right">
                                    <div className="onoffswitch6">
                                        <input
                                            type="checkbox"
                                            className="onoffswitch6-checkbox"
                                            defaultChecked={false}
                                        />
                                        <label className="onoffswitch6-label" htmlFor="header6-checkbox">
                                            <span className="onoffswitch6-inner" />
                                            <span className="onoffswitch6-switch" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                    return ( */}
                            <div className="selectors__module--barrier">
                                <div className="module__left">
                                    <div className="left__icon loop--barrier" />
                                    <div className="left__text">Модуль подключения петли индуктивности VLD-10</div>
                                    <div className="left__info">
                                        <div className="info__text">
                                            <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                        </div>
                                        <div className="info__arrow" />
                                    </div>
                                    {/* {barrier.modal ? <InductanceLoopPopUp /> : null} */}
                                </div>
                                <div className="module__right">
                                    <div className="right__price">
                                        {/* {barrier.data.page_view.model_module_list[1] !== undefined
                                            && barrier.data.page_view.model_module_list[1].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[1].price
                                        }
                                        {barrier.data.page_view.model_module_list[2] !== undefined
                                            && barrier.data.page_view.model_module_list[2].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[2].price
                                        }
                                        {barrier.data.page_view.model_module_list[3] !== undefined
                                            && barrier.data.page_view.model_module_list[3].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[3].price
                                        }
                                        {barrier.data.page_view.model_module_list[4] !== undefined
                                            && barrier.data.page_view.model_module_list[4].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[4].price
                                        }
                                        {barrier.data.page_view.model_module_list[5] !== undefined
                                            && barrier.data.page_view.model_module_list[5].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[5].price
                                        }
                                        {barrier.data.page_view.model_module_list[6] !== undefined
                                            && barrier.data.page_view.model_module_list[6].name === 'emergency'
                                            && '+ ' + barrier.data.page_view.model_module_list[6].price
                                        } */}
                                    </div>
                                    <div className="onoffswitch3">
                                        <input
                                            type="checkbox"
                                            name="onoffswitch3"
                                            className="onoffswitch3-checkbox"
                                            id="header3-checkbox"
                                            // onChange={this.handleClickSixSelect}
                                            // checked={barrier.data.page_view.module_selectors[5].state}
                                        />
                                        <label className="onoffswitch3-label" htmlFor="header3-checkbox">
                                            <span className="onoffswitch3-inner" />
                                            <span className="onoffswitch3-switch" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                   {/*     );
                    }
                })
                } */}
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
)(SelectorInductanceLoop);
