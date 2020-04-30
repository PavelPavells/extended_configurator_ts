/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../store/store';

/**
 * Импорт экшенов
 */
import { fetchDataTurnstile } from '../../../../actions/dataTurnstileActions';

/**
 * Импорт стилей
 */
import './equipmentModal.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleEquipmentModal
 */
interface EquipmentModalProps {
    data: any,
    fetchDataTurnstile: () => void
}

class EquipmentModal extends React.PureComponent<EquipmentModalProps> {
    /**
    * Запрос данных
    */
    componentDidMount () {
        this.props.fetchDataTurnstile();
    }
    render () {
        /**
        * Данные из Глобального Стора
        */
        const { turnstile, isFetching } = this.props.data;
        
        if (turnstile.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (

            /**
             * Всплывающее меню компонента Equipment
             */
            <section className="modal">

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal-wrapper">
                    <div className="block">
                        <div className="block-image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block-description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block-amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block-add">
                            <div className="block-add__value">
                                <div className="quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className="more">
                                    <div className="more-minus" />
                                    <div className="more-plus" />
                                </div>
                            </div>
                            <div className="block-add__button">ДОБАВИТЬ</div>
                            <div className="block-add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal-wrapper">
                    <div className="block">
                        <div className="block-image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block-description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block-amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block-add">
                            <div className="block-add__value">
                                <div className="quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className="more">
                                    <div className="more-minus" />
                                    <div className="more-plus" />
                                </div>
                            </div>
                            <div className="block-add__button">ДОБАВИТЬ</div>
                            <div className="block-add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal-wrapper">
                    <div className="block">
                        <div className="block-image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block-description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block-amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block-add">
                            <div className="block-add__value">
                                <div className="quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className="more">
                                    <div className="more-minus" />
                                    <div className="more-plus" />
                                </div>
                            </div>
                            <div className="block-add__button">ДОБАВИТЬ</div>
                            <div className="block-add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal-wrapper">
                    <div className="block">
                        <div className="block-image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block-description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block-amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block-add">
                            <div className="block-add__value">
                                <div className="quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className="more">
                                    <div className="more-minus" />
                                    <div className="more-plus" />
                                </div>
                            </div>
                            <div className="block-add__button">ДОБАВИТЬ</div>
                            <div className="block-add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal-wrapper">
                    <div className="block">
                        <div className="block-image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block-description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block-amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block-add">
                            <div className="block-add__value">
                                <div className="quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className="more">
                                    <div className="more-minus" />
                                    <div className="more-plus" />
                                </div>
                            </div>
                            <div className="block-add__button">ДОБАВИТЬ</div>
                            <div className="block-add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal-wrapper">
                    <div className="block">
                        <div className="block-image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block-description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block-amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block-add">
                            <div className="block-add__value">
                                <div className="quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className="more">
                                    <div className="more-minus" />
                                    <div className="more-plus" />
                                </div>
                            </div>
                            <div className="block-add__button">ДОБАВИТЬ</div>
                            <div className="block-add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
// @ts-ignore
EquipmentModal.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile })(EquipmentModal);
