/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../store/store';

/**
 * Импорт экшенов
 */
import { fetchDataBarrier } from '../../../../actions/dataBarrierActions';

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
    readonly data: any,
    readonly fetchDataBarrier: () => void
}

class EquipmentModal extends React.PureComponent<EquipmentModalProps> {
    /**
    * Запрос данных
    */
    public componentDidMount () {
        this.props.fetchDataBarrier();
    }
    public render () {
        /**
        * Данные из Глобального Стора
        */
        const { barrier, isFetching } = this.props.data;
        
        if (barrier.data.length === 0 && !isFetching) {
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
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={barrier.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {barrier.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {barrier.data.page_view.model_price} / <span>{barrier.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{barrier.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {barrier.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={barrier.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {barrier.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {barrier.data.page_view.model_price} / <span>{barrier.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{barrier.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {barrier.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={barrier.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {barrier.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {barrier.data.page_view.model_price} / <span>{barrier.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{barrier.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {barrier.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={barrier.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {barrier.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {barrier.data.page_view.model_price} / <span>{barrier.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{barrier.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {barrier.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={barrier.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {barrier.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {barrier.data.page_view.model_price} / <span>{barrier.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{barrier.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {barrier.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

                {/**
                 * Блоки описания для всплывающего окна
                 */}
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={barrier.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {barrier.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {barrier.data.page_view.model_price} / <span>{barrier.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{barrier.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {barrier.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect<{}, {}, EquipmentModalProps>(
    mapStateToProps,
    {
        fetchDataBarrier
    }
)(EquipmentModal);
