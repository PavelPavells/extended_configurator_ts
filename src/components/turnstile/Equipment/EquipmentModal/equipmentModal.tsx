/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { connect } from 'react-redux';

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
const Loader = lazy(() => import('../../../../__utils__/Loader/Loader'));

class EquipmentModal extends React.Component {
    /** ************* FETCHING DATA ************* */
    componentDidMount () {
        // @ts-ignore
        this.props.fetchDataTurnstile();
    }
    render () {
        /** ************* DATA FROM STORE ************* */
        // @ts-ignore
        const { turnstile, isFetching } = this.props.data;
        //console.log(turnstile);
        if (turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>} />;
        }
        return (

            /**
             * Всплывающее меню компонента Equipment
             */
            <div className="modal">

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

            </div>
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
// @ts-ignore
const mapStateToProps = state => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile })(EquipmentModal);
