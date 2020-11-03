/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataTurnstile } from '../../../actions/TurnstileActions/TurnstileActions';
import Loader from '../../../__utils__/Loader/Loader';

import './moduleConfiguration.scss';

interface ModuleConfigurationProps {
    readonly data: any,
    readonly fetchDataTurnstile: () => void,
}

class ModuleConfiguration extends React.PureComponent<ModuleConfigurationProps> {
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

        const { turnstile, isFetching } = this.props.data;

        if (turnstile.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (
            <section className="configuration">
                <div className="configuration__options options">
                    <div className="options__amount amount">
                        <p className="amount__text">Количество:</p>
                        <span className="amount__value">{turnstile.data.page_view.model_module_list.length}</span>
                    </div>
                    <div className="options__more more">
                        <div onClick={this.handleMinusOptions} className="more__minus" />
                        <div onClick={this.handlePlusOptions} className="more__plus" />
                    </div>
                    <div className="options__summ summ">
                        <div className="summ__text">Сумма:</div>
                        <span className="summ__value">{turnstile.data.page_view.model_price}</span>
                    </div>
                </div>
                <div className="configuration__button button">
                    <div className="button__icon" />
                    <div className="button__text">ДОБАВИТЬ ЭТУ КОНФИГУРАЦИЮ</div>
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
// @ts-ignore
)(ModuleConfiguration);
