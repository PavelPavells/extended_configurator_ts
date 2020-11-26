import React, { Suspense, lazy } from 'react';
import Loader from '../../../__utils__/Loader/Loader';

import './moduleSelectors.scss';

// const SelectorChangeColor = lazy(() => import('./selectors/selectorChangeColor/selectorChangeColor'));
// const SelectorControlBlock = lazy(() => import('./selectors/selectorControlBlock/selectorControlBlock'));
const SelectorEmergencySiren = lazy(() => import('./selectors/selectorEmergencySiren/selectorEmergencySiren'));
const SelectorHeatingModule = lazy(() => import('./selectors/selectorHeatingModule/selectorHeatingModule'));
const SelectorInductanceLoop = lazy(() => import('./selectors/selectorInductanceLoop/selectorInductanceLoop'));
const SelectorRadioRemote = lazy(() => import('./selectors/selectorRadioRemote/selectorRadioRemote'));
const SelectorSignalLamp = lazy(() => import('./selectors/selectorSignalLamp/selectorSignalLamp'));
const SelectorArrow = lazy(() => import('./selectors/selectorArrow/selectorArrow'));
const SelectorBackLightRGB = lazy(() => import('./selectors/SelectorBackLightRGB/selectorBackLightRGB'));
const SelectorPhotoCellsPR01 = lazy(() => import('./selectors/selectorPhotoCellsPR01/selectorPhotoCells01'));
const SelectorPhotoCellsPR02 = lazy(() => import('./selectors/selectorPhotoCellsPR02/selectorPhotoCellsPR02'));
const SelectorExpansion = lazy(() => import('./selectors/selectorExpansion/selectorExpansion'));

const ModuleSelectors = () => {
    return (
        <Suspense fallback={<Loader />}>
            <section className="selectors">
                <div className="selectors__text">Дополнительные модули</div>
                <SelectorRadioRemote />
                <SelectorHeatingModule />
                <SelectorInductanceLoop />
                <SelectorArrow />
                <SelectorBackLightRGB />
                <SelectorPhotoCellsPR01 />
                <SelectorPhotoCellsPR02 />
                <SelectorSignalLamp />
                <SelectorEmergencySiren />
                <SelectorExpansion />
                {/* <SelectorControlBlock />
                <SelectorChangeColor /> */}
            </section>
        </Suspense>
    );
}

export default ModuleSelectors;
