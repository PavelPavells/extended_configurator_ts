import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataTurnstile } from '../../../actions/TurnstileActions/TurnstileActions';
import Loader from '../../../__utils__/Loader/Loader';

import './moduleList.scss';

interface ModuleListProps {
    readonly data: any
}

const ModuleList:FC<ModuleListProps> = ({ data }) => {

    const { turnstile, isFetching } = data;

    if (turnstile.data.length === 0 && !isFetching) {
        return <Loader />;
    }
    return (
        <section className="list">
            <p className="list__description">Состав модели:</p>
            {turnstile.data.page_view.model_module_list.map((index: any) => (
                <div className="list__options" key={index.index}>{index.caption}</div>
            ))}
        </section>
    );
    
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect(
    mapStateToProps,
    {
        fetchDataTurnstile
    }
)(ModuleList);
