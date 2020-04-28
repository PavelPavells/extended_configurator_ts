/** ************* IMPORT DEPENDENCIES ************* */
import React, { Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';

/** ************* IMPORT SELECTORS FOR MODULE SELECTORS COMPONENT ************* */
import SelectorEP from './selectors/selectorEP/selectorEP';
import SelectorEMMarin from './selectors/selectorEMMarin/selectorEMMarin';
import SelectorMifire from './selectors/selectorMifire/selectorMifire';
import SelectorBiometry from './selectors/selectorBiometry/selectorBiometry';
import SelectorInfoTime from './selectors/selectorInfoTime/selectorInfoTime';
import SelectorControl2D from './selectors/selectorControl2D/selectorControl2D';
import SelectorGuest2D from './selectors/selectorGuest2D/selectorGuest2D';
import SelectorSteelCase from './selectors/selectorSteelCase/selectorSteelCase';

/** ************* IMPORT STYLES FOR MODULE SELECTORS IN TURNSTILE COMPONENT ************* */
import './moduleSelectors.scss';

/** ************* IMPORT __UTILS__ FOR SELECTORS COMPONENT ************* */
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

/**
 * Интерфейс компонента ModuleSelectors
 */
interface ModuleSelectorsProps {
    data: any
}

class ModuleSelectors extends React.PureComponent<ModuleSelectorsProps> {
    static propTypes: {
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>;
        isFetching: PropTypes.Requireable<boolean>;
    };

    render () {
        /** ************* DATA FROM STORE ************* */
        const { turnstile, isFetching } = this.props.data;

        if (turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>} />;
        }
        return (
            /** ************* MODULE SELECTORS ************* */
            <section className="selectors">
                <div className="selectors-text">Дополнительные модули</div>

                {/** ************* CHOICE EP-2000 SELECTOR ************* */}
                <Fragment>
                    <SelectorEP />
                </Fragment>

                {/** ************* CHOICE EMMARIN SELECTOR ************* */}
                <Fragment>
                    <SelectorEMMarin />
                </Fragment>

                {/** ************* CHOICE MIFIRE SELECTOR ************* */}
                <Fragment>
                    <SelectorMifire />
                </Fragment>

                {/** ************* CHOICE BIOMETRY SELECTOR ************* */}
                <Fragment>
                    <SelectorBiometry />
                </Fragment>

                {/** ************* CHOICE INFO TIME SELECTOR ************* */}
                <Fragment>
                    <SelectorInfoTime />
                </Fragment>

                {/** ************* CHOICE CONTROL 2D SELECTOR ************* */}
                <Fragment>
                    <SelectorControl2D />
                </Fragment>

                {/** ************* CHOICE GUEST 2D SELECTOR ************* */}
                <Fragment>
                    <SelectorGuest2D />
                </Fragment>

                {/** ************* CHOICE STEEL CASE SELECTOR ************* */}
                <Fragment>
                    <SelectorSteelCase />
                </Fragment>
            </section>
        );
    }
}

ModuleSelectors.propTypes = {
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, null)(ModuleSelectors);
