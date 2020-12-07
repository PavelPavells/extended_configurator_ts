import React from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataTurnstile } from '../../../actions/TurnstileActions/TurnstileActions';
import Loader from '../../../__utils__/Loader/Loader';

import './moduleImage.scss';

interface ModuleImageProps {
    readonly data: any,
    readonly fetchDataTurnstile: () => void
}

class ModuleImage extends React.PureComponent<ModuleImageProps> {
    public render () {

        const { turnstile, isFetching } = this.props.data;

        if (turnstile.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (
            <section className="image--turnstile">
                <img
                    src={turnstile.data.page_view.model_main_photo}
                    className="image__turnstile"
                    alt=""
                />
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
)(ModuleImage as any);
