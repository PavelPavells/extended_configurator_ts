/* eslint-disable max-len */
import React from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataBarrier } from '../../../actions/BarrierActions/BarrierActions';
import Loader from '../../../__utils__/Loader/Loader';

import './moduleConfiguration.scss';

interface ModuleConfigurationProps {
    readonly data: any,
    readonly fetchDataBarrier: () => void,
}

class ModuleConfiguration extends React.PureComponent<any> {
    
    private handleMinusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

    private handlePlusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

    public render () {
        // const { barrier, isFetching } = this.props.data;

        // if (barrier.data.length === 0 && !isFetching) {
        //    return <Loader />;
        // }
        return (
            <section className="configuration">
                <div className="configuration__options options">
                    <div className="options__amount amount">
                        <p className="amount__text">Количество:</p>
                        <span className="amount__value">1{/* {barrier.data.page_view.model_module_list.length}*/}</span>
                    </div>
                    <div className="options__more more">
                        <div onClick={this.handleMinusOptions} className="more__minus" />
                        <div onClick={this.handlePlusOptions} className="more__plus" />
                    </div>
                    <div className="options__summ summ">
                        <div className="summ__text">Сумма:</div>
                        <span className="summ__value">34 550 Р {/*{barrier.data.page_view.model_price}*/}</span>
                    </div>
                </div>
                <div className="configuration__button button">
                    <div className="button__icon" />
                    <div className="button__text">ЗАКАЗАТЬ ВЫБРАННУЮ МОДЕЛЬ</div>
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
        fetchDataBarrier
    }
)(ModuleConfiguration as any);