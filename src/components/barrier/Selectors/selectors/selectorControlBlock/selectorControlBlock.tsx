/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../../store/store';
import {
    fetchDataBarrier,
    togglePopupWindowBarrier
} from '../../../../../actions/BarrierActions/BarrierActions';
import ControlBlockPopup from '../../../../popup/barrier-popup/controlBlockPopup';
import Loader from '../../../../../__utils__/Loader/Loader';
import './selectorControlBlock.scss';

interface SelectorControlBlockProps {
    readonly data: any,
    readonly fetchDataBarrier: (data: any, trigger: number) => void,
    readonly togglePopupWindowBarrier: () => void
}

interface SelectorControlBlockState {
    readonly selectOne: number
}

class SelectorControlBlock extends React.PureComponent<SelectorControlBlockProps, SelectorControlBlockState> {

    state: SelectorControlBlockState = { selectOne: 0 };

    private handleToggleModal = () => {
        setTimeout(() => {
            this.props.togglePopupWindowBarrier();
        }, 1000)
    }

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
               {/* {barrier.data.page_view.module_selectors.slice(0, 1).map((index: { index: string | number | undefined; }) => ( */}
                    <div className="selectors__module--barrier">
                        <div className="module__left">
                            <div className="left__icon ep" />
                            <div className="left__text">Блок управления ABC-21PS</div>
                            <div className="left__info">
                                <div className="info__text">
                                    <div onClick={this.handleToggleModal}>ПОДРОБНЕЕ</div>
                                </div>
                                <div className="info__arrow" />
                            </div>
                            {/* {barrier.modal ? <ControlBlockPopup /> : null} */}
                        </div>
                        <div className="module__right">
                            <div className="right__price">
                                {/* {barrier.data.page_view.model_module_list[1] !== undefined
                                    && barrier.data.page_view.model_module_list[1].name === 'control'
                                    && '+ ' + barrier.data.page_view.model_module_list[1].price
                                } */}
                            </div>
                            <div className="onoffswitch">
                                <input
                                    type="checkbox"
                                    name="onoffswitch"
                                    className="onoffswitch-checkbox"
                                    id="header-checkbox"
                                    // onChange={this.handleClickOneSelect}
                                    // checked={barrier.data.page_view.module_selectors[0].state}
                                />
                                <label className="onoffswitch-label" htmlFor="header-checkbox">
                                    <span className="onoffswitch-inner" />
                                    <span className="onoffswitch-switch" />
                                </label>
                            </div>
                        </div>
                    </div>
                {/* })
                )} */}
            </Fragment>
        );
    }
}

const mapStateToPtops = (state: ConfiguratorState) => ({
    data: state
});
export default connect(
    mapStateToPtops,
    {
        fetchDataBarrier,
        togglePopupWindowBarrier
    }
)(SelectorControlBlock);
