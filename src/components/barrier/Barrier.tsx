import React from 'react';

import './Barrier.scss';

import ModuleImage from './Image/moduleImage';
import ModuleList from './List/moduleList';
import ModuleButtons from './Buttons/moduleButtons';
import ModuleSelectors from './Selectors/moduleSelectors';
// import ModuleBasket from './Basket/moduleBasket';
// import ModuleConfiguration from './Configuration/moduleConfiguration';
// import ModuleEquipment from './Equipment/moduleEquipment';

class Barrier extends React.PureComponent {
    public render () {
        return (
            <section className="barrier">
                <div className="barrier__basket">
                    {/** <ModuleBasket /> */}
                </div>
                <div className="barrier__primary primary">
                    <div className="primary__slider slider">
                        <div className="slider__image">
                            <ModuleImage />
                        </div>
                        <div className="slider__list">
                            <ModuleList />
                        </div>
                    </div>
                    <div className="primary__basis basis">
                        <div className="basis__buttons">
                            {/* <ModuleButtons /> */}
                        </div>
                        <div className="basis__selectors">
                            <ModuleSelectors />
                        </div>
                    </div>
                </div>
                <div className="barrier__configuration">
                    {/** <ModuleConfiguration /> */}
                </div>
                <div className="barrier__equipment">
                    {/** <ModuleEquipment /> */}
                </div>
            </section>
        )
    }
}

export default Barrier;
