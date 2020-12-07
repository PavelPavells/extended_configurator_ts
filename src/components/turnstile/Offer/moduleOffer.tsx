/* eslint-disable react/sort-comp */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataTurnstile } from '../../../actions/TurnstileActions/TurnstileActions';
import Loader from '../../../__utils__/Loader/Loader';

import './moduleOffer.scss';

interface OfferProps {
    readonly data: any,
    readonly fetchDataTurnstile: (data: any) => void,
    readonly handleOpenModal: (index: any, key: number) => void
}

interface OfferState {
    readonly modal: boolean
}

class Offer extends React.PureComponent<OfferProps, OfferState> {

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
    
    private handleOpenModal = (index: any, key: number) => {
        //console.log('INDEX ' + index.name);
        //console.log('KEY ' + key);
        if (index.index === 0 && key === 0) {
            this.setState({ modal: !this.state.modal });
        }
    }

    public render () {

        const { turnstile, isFetching } = this.props.data;

        if (turnstile.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (
            <section className="offer">
                <div className="offer__description description">
                    <div className="description__left left">
                        <Link to="/turnstile" className="left__arrow" />
                        <div className="left__text">КП для клиента</div>
                        <div className="left__agreement">№123456-ABC от 01.04.2020</div>
                    </div>
                    <div className="description__right right">
                        <div className="right__wrapper wrapper">
                            <div className="wrapper__info info">
                                <div className="info__text">Товаров:</div>
                                <div className="info__count">{turnstile.data.page_view.model_module_list.length}</div>
                            </div>
                            <div className="wrapper__info info">
                                <div className="info__text">На сумму:</div>
                                <div className="info__count">{turnstile.data.page_view.model_price}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offer__goods goods">
                    <div className="goods__category category">
                        <div className="category__wrapper wrapper">
                            <div className="wrapper__photo">Фото</div>
                            <div className="wrapper__product">Товар</div>
                        </div>
                        <div className="category__wrapper wrapper">
                            <div className="wrapper__amount">Количество</div>
                            <div className="wrapper__value">Стоимость</div>
                            <div className="wrapper__summ">Сумма</div>
                        </div>
                    </div>
                    {turnstile.data.page_view.model_module_list.map((index: any, key: any) => (
                        <div key={index.name} className="goods__blocks blocks">
                            <div className="blocks__main main">
                                <div className="main__left left">
                                    <div className="left__image image">
                                        <img className='image__photo' src={turnstile.data.page_view.model_main_photo} alt="" />
                                        <div className="image__icon">i</div>
                                    </div>
                                    <div className="left__text text">
                                        <div className="text__partition">{index.caption}</div>
                                        <div onClick={() => this.handleOpenModal(index, key)} className="text__name name">{index.caption}<div className="name__arrow" /></div>
                                    </div>
                                </div>
                                <div className="main__info info">
                                    <div className="info__value">{turnstile.data.page_view.model_module_list.length}</div>
                                    <div className="info__add add">
                                        <div className="add__minus" />
                                        <div className="add__plus" />
                                    </div>
                                    <div className="info__price price">
                                        <div className="price__nondiscount">{index.price}</div>
                                        <div className="price__discount">{index.price}</div>
                                    </div>
                                    <div className="info__offer">{index.price}</div>
                                    <div className="info__delete" />
                                </div>
                            </div>
                            <div className="offer-popup"> {/** Перетираются стили, изменить наименование классов, поправить вложенность в CSS */}
                                {this.state.modal && key === 0 ?
                                    <div className="offer-info">
                                        <div className="offer-caption">
                                            <p className="offer-caption__description">Стандартная комплектация</p>
                                            <div className="offer-caption__list">
                                                {turnstile.data.page_view.model_module_list.map((index: any, key: any) => (
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
                                                {turnstile.data.page_view.model_module_list.slice(1).map((index: any, key: any) => (
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
                <div className="offer__price price">
                    <div className="price__wrapper wrapper">
                        <div className="wrapper__image" />
                        <div className="wrapper__full full">
                            <div className="full__text">Стоимость без скидки</div>
                            <div className="full__price">{turnstile.data.page_view.model_price}</div>
                        </div>
                        <div className="wrapper__sale sale">
                            <div className="sale__text text">Скидка<span className="text__sale">25%</span></div>
                            <div className="sale__price">&mdash; {turnstile.data.page_view.model_price}</div>
                        </div>
                    </div>
                    <div className="price__total total">
                        <div className="total__text">Итого со скидкой</div>
                        <div className="total__price">{turnstile.data.page_view.model_price}</div>
                    </div>
                </div>
                <div className="offer__btn btn">
                    <div className="btn__icon" />
                    <div className="btn__text">СКАЧАТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</div>
                    <div className="btn__line" />
                    <div className="btn__format">XLS, 800 KB</div>
                </div>
                <div className="offer__confidence">
                    Данное коммерческое предложение будет анонимным.
                    В нем будут присутствовать реквизиты партнера и выбранные<br/>
                    товары, но не будет информации о клиенте.
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect(
    mapStateToProps,
    {
        fetchDataTurnstile
    }
)(Offer as any);
