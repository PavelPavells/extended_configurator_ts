/* eslint-disable react/sort-comp */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
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
import './Offer.scss';


/**
 * Импорт прелоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента Offer
 */
interface OfferProps {
    data: any,
    fetchDataTurnstile: (data: any) => void,
    handleOpenModal: (index: any, key: number) => void
}

interface OfferState {
    modal: boolean
}

class Offer extends React.PureComponent<OfferProps, OfferState> {
    static propTypes: { 
        fetchDataTurnstile: PropTypes.Validator<(...args: any[]) => any>;
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>;
        isFetching: PropTypes.Requireable<boolean>;
    };

    state: OfferState = {
        modal: false
    };

    /**
    * Запрос данных
    */
    // componentDidMount () {
    //     const { page_view } = this.props.data.turnstile.data;
    //     let data = {
    //         app_id: 'id',
    //         trigger: this.props.data.turnstile.trigger ? this.props.data.turnstile.trigger : 1,
    //         trigger_state: 0,
    //         seria: 0,
    //         button_seria_state: page_view ? page_view.btn_seria : 0,
    //         button_corpse_state: page_view ? page_view.btn_corpse : 0,
    //         selectOne: page_view ? page_view.module_selectors[0].state : 0,
    //         selectTwo: page_view ? page_view.module_selectors[1].state : 0,
    //         selectThree: page_view ? page_view.module_selectors[2].state : 0,
    //         selectFour: page_view ? page_view.module_selectors[3].state : 0,
    //         selectFive: page_view ? page_view.module_selectors[4].state : 0,
    //         selectSix: page_view ? page_view.module_selectors[5].state : 0,
    //         selectSeven: page_view ? page_view.module_selectors[6].state : 0,
    //         selectEight: page_view ? page_view.module_selectors[7].state : 0
    //     };
    //     this.props.fetchDataTurnstile(data);
    // }
    
    handleOpenModal = (index: any, key: number) => {
        //console.log('INDEX ' + index.name);
        //console.log('KEY ' + key);
        if (index.index === 0 && key === 0) {
            this.setState({ modal: !this.state.modal });
        }
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
             *  Модуль Предложение
             */
            <section className="offer">

                {/**
                    * Описание
                 */}
                <div className="offer-description">
                    <div className="left">
                        <Link to="/turnstile" className="left-arrow" />
                        <div className="left-text">КП для клиента</div>
                        <div className="left-agreement">№123456-ABC от 01.04.2020</div>
                    </div>
                    <div className="right">
                        <div className="right-wrapper">
                            <div className="right-wrapper__info">
                                <div className="text">Товаров:</div>
                                <div className="count">{turnstile.data.page_view.model_module_list.length}</div>
                            </div>
                            <div className="right-wrapper__info">
                                <div className="text">На сумму:</div>
                                <div className="count">{turnstile.data.page_view.model_price}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/**
                    * Блок Основное Предложение
                 */}
                <div className="offer-goods">
                    <div className="offer-category">
                        <div className="category-wrapper">
                            <div className="category-wrapper__photo">Фото</div>
                            <div className="category-wrapper__product">Товар</div>
                        </div>
                        <div className="category-wrapper">
                            <div className="category-wrapper__amount">Количество</div>
                            <div className="category-wrapper__value">Стоимость</div>
                            <div className="category-wrapper__summ">Сумма</div>
                        </div>
                    </div>
                    {turnstile.data.page_view.model_module_list.map((index: { name: string | number | undefined; caption: {} | null | undefined; price: {} | null | undefined; }, key: number) => (
                        <div key={index.name} className="blocks">
                            <div className="main">
                                <div className="block-left">
                                    <div className="block-left__image">
                                        <img src={turnstile.data.page_view.model_main_photo} alt="" />
                                        <div className="block-left__image-icon">i</div>
                                    </div>
                                    <div className="block-left__text">
                                        <div className="block-left__text-partition">{index.caption}</div>
                                        <div onClick={() => this.handleOpenModal(index, key)} className="block-left__text-name">{index.caption}<div className="arrow" /></div>
                                    </div>
                                </div>
                                <div className="blocks-info">
                                    <div className="blocks-info__value">{turnstile.data.page_view.model_module_list.length}</div>
                                    <div className="blocks-info__add">
                                        <div className="blocks-info__add-minus" />
                                        <div className="blocks-info__add-plus" />
                                    </div>
                                    <div className="blocks-info__price">
                                        <div className="nondiscount">{index.price}</div>
                                        <div className="discount">{index.price}</div>
                                    </div>
                                    <div className="blocks-info__offer">{index.price}</div>
                                    <div className="blocks-info__delete" />
                                </div>
                            </div>

                            {/**
                             * Блок Popup
                             */}
                            <div className="offer-popup">
                                {this.state.modal && key === 0 ?
                                    <div className="offer-info">
                                        <div className="offer-caption">
                                            <p className="offer-caption__description">Стандартная комплектация</p>
                                            <div className="offer-caption__list">
                                                {turnstile.data.page_view.model_module_list.map((index: { name: string | number | undefined; caption: React.ReactNode; }) => (
                                                    <div key={index.name} className="offer-equipment">
                                                        <div className="offer-equipment__paragraph">{index.caption}</div>
                                                        <span className="offer-equipment__amount">{turnstile.data.page_view.model_module_list.length}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="offer-caption">
                                            <p className="offer-caption__description">Опции</p>
                                            <div className="offer-caption__list">
                                                {turnstile.data.page_view.model_module_list.slice(1).map((index: { name: string | number | undefined; caption: React.ReactNode; price: {} | null | undefined; }) => (
                                                    <div key={index.name} className="offer-equipment">
                                                        <div className="offer-equipment__paragraph">{index.caption}</div>
                                                        <div className="offer-equipment__info">
                                                            <div className="offer-equipment__info-value">{turnstile.data.page_view.model_module_list.length}</div>
                                                            <div className="offer-equipment__info-discount">{index.price}</div>
                                                            <div className="offer-equipment__info-offer">{index.price}</div>
                                                            <div className="offer-equipment__info-delete" />
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="offer-caption__list-button">ДОБАВИТЬ</div>
                                            </div>
                                        </div>
                                    </div> :
                                    null
                                }
                            </div>
                        </div>
                    ))}
                </div>

                {/**
                    * Блок Цена/Предложение
                 */}
                <div className="offer-price">
                    <div className="offer-price__wrapper">
                        <div className="offer-price__image" />
                        <div className="offer-price__full">
                            <div className="offer-price__text">Стоимость без скидки</div>
                            <div className="offer-price__price">{turnstile.data.page_view.model_price}</div>
                        </div>
                        <div className="offer-price__sale">
                            <div className="offer-price__text">Скидка<span className="offer-price__text-sale">25%</span></div>
                            <div className="offer-price__price">&mdash; {turnstile.data.page_view.model_price}</div>
                        </div>
                    </div>
                    <div className="offer-price__total">
                        <div className="offer-price__text">Итого со скидкой</div>
                        <div className="offer-price__price">{turnstile.data.page_view.model_price}</div>
                    </div>
                </div>
                <div className="offer-btn">
                    <div className="offer-btn__icon" />
                    <div className="offer-btn__text">СКАЧАТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</div>
                    <div className="offer-btn__line" />
                    <div className="offer-btn__format">XLS, 800 KB</div>
                </div>
                <div className="offer-confidence">
                    Данное коммерческое предложение будет анонимным.
                    В нем будут присутствовать реквизиты партнера и выбранные<br/>
                    товары, но не будет информации о клиенте.
                </div>
            </section>
        );
    }
}

Offer.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile })(Offer);
