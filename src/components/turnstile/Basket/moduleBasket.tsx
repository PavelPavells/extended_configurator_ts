import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
// import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';
import Loader from '../../../__utils__/Loader/Loader';

import './moduleBasket.scss';

const ModuleBasket = () => {

    const { data, isFetching } = useSelector((state: ConfiguratorState) => state.turnstile, shallowEqual);

    if (data.length !== 0 && !isFetching) {
        return (
            <section className="basket">
                <p className="basket__description">Конфигуратор</p>
                <Link to='/turnstile/offer' className="basket__data">
                    <div className="data__wrapper">
                        <div className="wrapper__info">
                            <div className="info__text">Товаров:</div>
                            <div className="info__count">0</div>
                        </div>
                        <div className="wrapper__info">
                            <div className="info__text">На сумму:</div>
                            <div className="info__count">0</div>
                        </div>
                    </div>
                    <div className="basket__more" />
                </Link>
            </section>
        )
    }
    return <Loader />;
}

export default ModuleBasket;