/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';
import {
    fetchDataBarrier,
    togglePopupWindowBarrier
} from '../../../../../actions/BarrierActions/BarrierActions';
import ChangeColorPopUp from '../../../../popup/barrier-popup/changeColorPopup';
import Loader from '../../../../../__utils__/Loader/Loader';

import './selectorArrow.scss';

interface SelectorArrowProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorArrowState {
    readonly selectSeven: number
}

class SelectorArrow extends React.PureComponent<SelectorArrowProps, SelectorArrowState> {

    state: SelectorArrowState = { selectSeven: 0 };

    private handleToggleModal = () => {
        this.props.togglePopupWindowBarrier();
    }

    private handleClickSevenSelect = () => {
        const { page_view } = this.props.data.barrier.data;
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
                {/*{barrier.data.page_view.module_selectors.slice(6, 7).map((index: { state: number; index: string | number | undefined; }) => {
                    if (index.state === -1) {
                        return (
                            <div key={index.index} className="selectors__module--barrier none">
                                <div className="module__left">
                                    <div className="left__icon guest-access" />
                                    <div className="left__text">Стрела для шлагбаума "SN-06С"</div>
                                </div>
                                <div className="module__right">
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
                        return (*/}
                            <div className="selectors__module--barrier">
                                <div className="module__left">
                                    <div className="left__icon arrow--barrier" />
                                    <div className="left__text">Стрела для шлагбаума "SN-06С"</div>
                                    <div className="left__info">
                                        <div className="info__text">
                                            <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                        </div>
                                        <div className="info__arrow" />
                                    </div>
                                    {barrier.modal ? <ChangeColorPopUp /> : null}
                                </div>
                                <div className="module__right">
                                    <div className="right__price">
                                        {/* {barrier.data.page_view.model_module_list[1] !== undefined
                                            && barrier.data.page_view.model_module_list[1].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[1].price
                                        }
                                        {barrier.data.page_view.model_module_list[2] !== undefined
                                            && barrier.data.page_view.model_module_list[2].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[2].price
                                        }
                                        {barrier.data.page_view.model_module_list[3] !== undefined
                                            && barrier.data.page_view.model_module_list[3].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[3].price
                                        }
                                        {barrier.data.page_view.model_module_list[4] !== undefined
                                            && barrier.data.page_view.model_module_list[4].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[4].price
                                        }
                                        {barrier.data.page_view.model_module_list[5] !== undefined
                                            && barrier.data.page_view.model_module_list[5].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[5].price
                                        }
                                        {barrier.data.page_view.model_module_list[6] !== undefined
                                            && barrier.data.page_view.model_module_list[6].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[6].price
                                        }
                                        {barrier.data.page_view.model_module_list[7] !== undefined
                                            && barrier.data.page_view.model_module_list[7].name === 'inductance'
                                            && '+ ' + barrier.data.page_view.model_module_list[7].price
                                        } */}
                                    </div>
                                    <div className="onoffswitch4">
                                        <input
                                            type="checkbox"
                                            name="onoffswitch4"
                                            className="onoffswitch4-checkbox"
                                            id="header4-checkbox"
                                            // onChange={this.handleClickSevenSelect}
                                            // checked={barrier.data.page_view.module_selectors[6].state}
                                        />
                                        <label className="onoffswitch4-label" htmlFor="header4-checkbox">
                                            <span className="onoffswitch4-inner" />
                                            <span className="onoffswitch4-switch" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                    {/*    );
                  }  }
                })
                }*/}
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
)(SelectorArrow);
