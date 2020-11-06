import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataTurnstile } from '../../../actions/TurnstileActions/TurnstileActions';
import Loader from '../../../__utils__/Loader/Loader';
import ModalHelper from '../ModalHelper/ModalHelper';

import './moduleList.scss';

interface ModuleListProps {
    readonly data: any
}

const ModuleList: React.FC<ModuleListProps> = ({ data }) => {
    const [openModalHelper, setOpenModalHelper] = useState(false);

    const { turnstile, isFetching } = data;
    
    const handleOpenModalHelper = () => {
        setOpenModalHelper(!openModalHelper);
    }

    const handleCloseModalInfo = () => {
        setOpenModalHelper(false);
    }

    if (turnstile.data.length === 0 && !isFetching) {
        return <Loader />;
    }
    return (
        <section className="list">
            <div onClick={handleOpenModalHelper} className="list__helper">
                <span className="quest">&#63;</span><span className="text">Как подобрать модель</span>
            </div>
            {openModalHelper ? <ModalHelper handleCloseModalInfo={handleCloseModalInfo} /> : null}
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
