import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import Close from '../../../images/icon/close-modal-blue.svg';
import './ModalOrderProduct.scss';

interface ModalOrderProductProps {
    handleChangeIsOpenOrderModal: () => void;
}

interface ModalOrderProductState {
    order: null | string[];
}

class ModalOrderProduct extends React.Component<ModalOrderProductProps, ModalOrderProductState> {
    state: ModalOrderProductState = {
        order: null
    }

    public render() {
        const { handleChangeIsOpenOrderModal } = this.props;
        return (
            <section className="order">
                <div className="order__window">
                    <div className="order__header">
                        <div className="header__description">
                            <span className="text">Оформить заявку на модель</span>
                            <img onClick={handleChangeIsOpenOrderModal} src={Close} alt="Close" className="close"/>
                        </div>
                        <div className="header__info">
                            <div className="info">
                                <div className="model__text">Модель</div>
                                <div className="model__description">Турникет STR-01</div>
                            </div>
                            <div className="info">
                                <div className="model__text">Модель</div>
                                <div className="model__description">Турникет STR-01</div>
                            </div>
                        </div>
                    </div>
                    <div className="order__main">
                        <form action="" className="main">
                            <div className="main__field">
                                <label htmlFor="email" className="field__label">Ваш e-mail *</label>
                                <input type="text" id="email" name="email" className="field__input" placeholder="mymail@mailbox.com"/>
                            </div>
                            <div className="main__field">
                                <label htmlFor="name" className="field__label">Введите имя *</label>
                                <input type="text" id="name" name="name" className="field__input" placeholder="Ваше Имя"/>
                            </div>
                            <div className="main__field">
                                <label htmlFor="lastname" className="field__label">Введите фамилию *</label>
                                <input type="text" id="lastname" name="lastname" className="field__input" placeholder="Ваша фамилия"/>
                            </div>
                            <div className="main__field">
                                <label htmlFor="patronymic" className="field__label">Введите отчество</label>
                                <input type="text" id="patronymic" name="patronymic" className="field__input" placeholder="Ваше отчество"/>
                            </div>
                            <div className="main__field">
                                <label htmlFor="phone" className="field__label">Контактный телефон *</label>
                                <NumberFormat
                                    id="phone"
                                    type="tel"
                                    className="field__input"
                                    format="+7(###)###-##-##"
                                    minLength={7}
                                    pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                                    title="Поле заполнено неверно"
                                    mask="_"
                                    placeholder="Ваш телефон"
                                    required
                                />
                            </div>
                            <div className="main__field">
                                <label htmlFor="organization" className="field__label">Полное наименование организации *</label>
                                <input type="text" id="organization" name="organization" className="field__input" placeholder="Ваша организация"/>
                            </div>
                        </form>
                    </div>
                    <div className="order__footer">
                        <button type="submit" className="button__order">Оформить</button>
                        <p className="footer__text">Нажимая на кнопку «Оформить»,<br/>я даю <Link to="#">согласие на обработку<br/>персональных данных</Link></p>
                    </div>
                </div>
            </section>
        )
    }
} 

export default ModalOrderProduct;
