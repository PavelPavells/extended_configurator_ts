/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../../store/store';
import { fetchDataTurnstile } from '../../../../actions/TurnstileActions/TurnstileActions';
import Loader from '../../../../__utils__/Loader/Loader';

import './equipmentModal.scss';

interface EquipmentModalProps {
    readonly data: any,
    readonly fetchDataTurnstile: () => void
}

class EquipmentModal extends React.PureComponent<EquipmentModalProps> {
    public componentDidMount () {
        this.props.fetchDataTurnstile();
    }
    public render () {

        const { turnstile, isFetching } = this.props.data;
        
        if (turnstile.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (
            <section className="modal">
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
                        </div>
                    </div>
                </div>
                <div className="modal__wrapper wrap">
                    <div className="wrap__block block">
                        <div className="block__image">
                            <img src={turnstile.data.page_view.model_main_photo} alt="" />
                        </div>
                        <div className="block__description">
                            {turnstile.data.page_view.caption}
                        </div>
                        <div className="block__amount">
                            {turnstile.data.page_view.model_price} / <span>{turnstile.data.page_view.model_module_list.length} шт.</span>
                        </div>
                        <div className="block__add add">
                            <div className="add__value value">
                                <div className="value__quantity">Количество: <span>{turnstile.data.page_view.model_module_list.length}</span></div>
                                <div className=" value__more more">
                                    <div className="more__minus" />
                                    <div className="more__plus" />
                                </div>
                            </div>
                            <div className="add__button">ДОБАВИТЬ</div>
                            <div className="add__amount">РЕКОМЕНДУЕМОЕ КОЛ-ВО: {turnstile.data.page_view.model_module_list.length}</div>
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

export default connect(
    mapStateToProps,
    {
        fetchDataTurnstile
    }
// @ts-ignore
)(EquipmentModal);
