/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import { connect } from 'react-redux';
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

class ModuleBasket extends React.PureComponent<ModuleBasketProps> {
    
    public render () {
        /**
        * Данные из Глобального Стора
        */
        const { turnstile, isFetching } = this.props.data;

        if (turnstile.data.length === 0 && !isFetching) {
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
                <p className="basket-description">Конфигуратор</p>

                {/**
                 *Информация о корзине
                 */}
                <Link to='/turnstile/offer' className="basket-data">
                    <div className="basket-data__wrapper">
                        <div className="basket-data__wrapper-info">
                            <div className="text">Товаров:</div>
                            <div className="count">{turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                        <div className="basket-data__wrapper-info">
                            <div className="text">На сумму:</div>
                            <div className="count">{turnstile.data.page_view.model_price}</div>
                        </div>
                    </div>
                    <div className="basket-more" />
                </Link>
            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect<{}, {}, ModuleBasketProps>(mapStateToProps, { fetchDataTurnstile })(ModuleBasket);
