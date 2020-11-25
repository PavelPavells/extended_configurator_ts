import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataBarrier } from '../../../actions/BarrierActions/BarrierActions';
// import Loader from '../../../__utils__/Loader/Loader';
import ModalHelper from '../../turnstile/ModalHelper/ModalHelper';
import moduleList from '../../turnstile/List/moduleList';

import './moduleList.scss';
/**
 * Интерфейс компонента ModuleList
 */
// //}

const ModuleList: React.FC = () => {
    const [openModalHelper, setOpenModalHelper] = useState<any>(true);
    const [hideWindow, setHideWindow] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchDataBarrier());
    }, []);
    
    const handleOpenModalHelper = () => {
        const showModalHelper = localStorage.getItem('showModalHelper');
        if(showModalHelper === 'true') {
            localStorage.removeItem('showModalHelper');   
        }
        setOpenModalHelper(!openModalHelper);
    }

    const handleCloseModalInfo = () => {
        setOpenModalHelper(false);
    }

    const handleSetValueInStorage = () => {
        localStorage.setItem('showModalHelper', openModalHelper);
        setHideWindow(!hideWindow);
    }

    return (
        /**
         *  Модуль Список
         */
        <section className="list">
            <div onClick={handleOpenModalHelper} className="list__helper">
                <span className="quest">&#63;</span><span className="text">Как подобрать модель</span>
            </div>
            {openModalHelper ?
                <ModalHelper
                    handleCloseModalInfo={handleCloseModalInfo}
                    handleSetValueInStorage={handleSetValueInStorage}
                    hideWindow={hideWindow}
            /> : null}
            <p className="list__description">Состав модели:</p>
            <div className="list__options">Модуль Модуль</div>
            {/* {barrier.data.page_view.model_module_list.map((index: any) => (
                <div className="list__options" key={index.index}>{index.caption}</div>
            ))} */}
        </section>
    );
}

export default ModuleList;
