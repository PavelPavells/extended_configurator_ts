/**
 * Импорт зависимостей из NPM
 */
import React, { Suspense, lazy } from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

/**
 * Интерфейс компонента ModuleBasket
 */
interface ModuleBasketProps {
    data: any,
    fetchDataTurnstile: () => void
}

class ModuleBasket extends React.PureComponent<ModuleBasketProps> {
    static propTypes: { 
        fetchDataTurnstile: PropTypes.Validator<(...args: any[]) => any>; 
        data: PropTypes.Validator<object>; 
        turnstile: PropTypes.Requireable<object>; 
        isFetching: PropTypes.Requireable<boolean>; 
    };
    
    render () {
        /**
        * Данные из Глобального Стора
        */
        const { turnstile, isFetching } = this.props.data;

        if (turnstile.data.length === 0 && !isFetching) {
            return (
                <Suspense fallback={<div><Loader /></div>} />
            );
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

ModuleBasket.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleBasket);
