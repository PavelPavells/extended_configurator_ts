import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ConfiguratorState } from '../../store/store';
import { fetchDataMain } from '../../actions/MainActions/MainActions';
import GlobalSetup from '../../constants/Global/GlobalSetup';
import Loader from '../../__utils__/Loader/Loader';

import './Main.scss';

const Main = () => {
    const { isFetching, data } = useSelector((state: ConfiguratorState) => state.main, shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataMain());
    }, [dispatch]);

    if (!isFetching && data.length !== 0) {
        return (
            <section className="main">
                <p className="main__header">
                    {data.page_view.caption}
                </p>
                <p className="main__description">
                    Выберите необходимую категорию оборудования
                </p>

                <div className="main__blocks">
                    {data.page_view.device_buttons.map((index: any) => {
                        return (
                            <NavLink key={index.index} to={index.index === 0 ? '/barrier' : '/turnstile'} className="block">
                                <div className="block__image">
                                    <img
                                        // eslint-disable-next-line camelcase
                                        src={`${GlobalSetup}${index.image_source}`}
                                        alt=""
                                    />
                                </div>
                                <div className="block__text">
                                    <p className="text__header">
                                        {index.caption}
                                    </p>
                                    <p className="text__description">
                                        Шлагбаумы и оборудование контроля проезда CARDDEX позволяют сформировать гибкие системы допуска,
                                        учета и контроля проезда автотранспортных средств с развитой инфраструктурой
                                    </p>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </section>
        );
    }
    return <Loader />;
}

export default Main;
