/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';
import {
    fetchDataBarrier,
    togglePopupWindowBarrier
} from '../../../../../actions/BarrierActions/BarrierActions';

import './selectorRadioRemote.scss';

import RadioRemotePopup from '../../../../popup/barrier-popup/radioRemotePopup';
import Loader from '../../../../../__utils__/Loader/Loader';

interface SelectorRadioRemoteProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorRadioRemoteState {
    readonly selectThree: number
}

class SelectorRadioRemote extends React.PureComponent<SelectorRadioRemoteProps, SelectorRadioRemoteState> {

    state: SelectorRadioRemoteState = { selectThree: 0 };

    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

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
        const { barrier, isFetching } = this.props.data;
        // if (barrier.data.length === 0 && !isFetching) {
        //    return <Loader />;
        // }

        return (
            <Fragment>
                {/* {barrier.data.page_view.module_selectors.slice(2, 3).map((index: { index: string | number | undefined; }) => ( */}
                    <div className="selectors__module--barrier">
                        <div className="module__left">
                            <div className="left__icon remote--barrier" />
                            <div className="left__text">Модуль радио пультов PRK 400</div>
                            <div className="left__info">
                                <div className="info__text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                </div>
                                <div className="info__arrow" />
                            </div>
                            {barrier.modal ? <RadioRemotePopup /> : null}
                        </div>
                        <div className="module__right">
                            <div className="right__price">
                                {/* {barrier.data.page_view.model_module_list[1] !== undefined
                                    && barrier.data.page_view.model_module_list[1].name === 'remote'
                                    && '+ ' + barrier.data.page_view.model_module_list[1].price
                                }
                                {barrier.data.page_view.model_module_list[2] !== undefined
                                    && barrier.data.page_view.model_module_list[2].name === 'remote'
                                    && '+ ' + barrier.data.page_view.model_module_list[2].price
                                }
                                {barrier.data.page_view.model_module_list[3] !== undefined
                                    && barrier.data.page_view.model_module_list[3].name === 'remote'
                                    && '+ ' + barrier.data.page_view.model_module_list[3].price
                                } */}
                            </div>
                            <div className="onoffswitch1">
                                <input
                                    type="checkbox"
                                    name="onoffswitch1"
                                    className="onoffswitch1-checkbox"
                                    id="header1-checkbox"
                                    // onChange={this.handleClickThreeSelect}
                                    // checked={barrier.data.page_view.module_selectors[2].state}
                                />
                                <label className="onoffswitch1-label" htmlFor="header1-checkbox">
                                    <span className="onoffswitch1-inner" />
                                    <span className="onoffswitch1-switch" />
                                </label>
                            </div>
                        </div>
                    </div>
               {/*  )
                )} */}
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
)(SelectorRadioRemote as any);
