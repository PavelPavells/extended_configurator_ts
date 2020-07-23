/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import { connect, useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';

/**
 * Импорт экшенов
 */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/**
 * Импорт стилей
 */
import './moduleBasket.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleBasket
 */
interface ModuleBasketProps {
    readonly data: any,
    readonly fetchDataTurnstile: () => void
}

const ModuleBasket = () => {

    const { data, isFetching } = useSelector((state: ConfiguratorState) => state.turnstile, shallowEqual);

    if (data.length === 0 && !isFetching) {
        return <Loader />;
    }
    return (
        /**
        *  Модуль Корзина
        */
        <section className="basket">

            {/**
                *Описание
                */}
            <p className="basket__description">Конфигуратор</p>

            {/**
                *Информация о корзине
                */}
            <Link to='/turnstile/offer' className="basket__data data">
                <div className="data__wrapper wrapper">
                    <div className="wrapper__info info">
                        <div className="info__text">Товаров:</div>
                        <div className="info__count">{data.page_view.model_module_list.length}</div>
                    </div>
                    <div className="wrapper__info info">
                        <div className="info__text">На сумму:</div>
                        <div className="info__count">{data.page_view.model_price}</div>
                    </div>
                </div>
                <div className="basket__more" />
            </Link>
        </section>
    )
}

export default ModuleBasket;