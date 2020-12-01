/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataPopupTurnstile } from '../../../actions/PopupActions/TurnstilePopup/PopupActions';
import {
    togglePopupWindowTurnstile,
    togglePopupWindowMainInfoTurnstile
} from '../../../actions/TurnstileActions/TurnstileActions';
//import photo from "../../../images/str-compact1.png";
import logo from '../../../images/icon/shape.svg'

import '../popup.scss';

interface EPpopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowTurnstile: () => void,
    readonly togglePopupWindowMainInfoTurnstile: () => void,
    readonly handleToggleModal: () => void,
    readonly fetchDataPopupTurnstile: (data: any, trigger: number) => void,
    readonly handleClickOneSelect: () => void
}

class EPpopup extends React.PureComponent<any> {
    componentDidMount () {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 5,
            trigger_state: 0,
            seria: 0,
            button_seria_state: page_view ? page_view.btn_seria : 0,
            button_corpse_state: page_view ? page_view.btn_corpse : 0,
            selectOne: page_view ? page_view.module_selectors[0].state : 0,
            selectTwo: page_view ? page_view.module_selectors[1].state : 0,
            selectThree: page_view ? page_view.module_selectors[2].state : 0,
            selectFour: page_view ? page_view.module_selectors[3].state : 0,
            selectFive: page_view ? page_view.module_selectors[4].state : 0,
            selectSix: page_view ? page_view.module_selectors[5].state : 0,
            selectSeven: page_view ? page_view.module_selectors[6].state : 0,
            selectEight: page_view ? page_view.module_selectors[7].state : 0
        };
        this.props.fetchDataPopupTurnstile(data, data.trigger);
    }

    private handleCloseModal = () => {
        this.props.handleToggleModal();
    };

    private handleAddOption = () => {
        this.props.handleClickOneSelect();
        this.handleCloseModal();
    }

    private handleToggleMainInfo = () => {
        this.props.togglePopupWindowMainInfoTurnstile();
    };

    public render () {

        const { turnstile, popup, isFetching } = this.props.data;

        if (popup.data.length === 0 && !isFetching) {
           return null;
        }

        return (
            <section className="popup">
                <div className="popup__left">
                    <div className="left__image">
                        <img className="image" src={popup.data.module_main_photo} alt='' />
                    </div>
                </div>
                <div className="popup__right">
                    <div className="right__header">
                        <img src={logo} className="header__icon" alt='' />
                        <div className="header__description">
                            <p className='description__text'>Универсальный сетевой контроллер расширения EP-2000</p>
                            {turnstile.info === false ? /** Перенести в экшены Popup */
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ХАРАКТЕРИСТИКИ</div> :
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ПОКАЗАТЬ ОПИСАНИЕ</div>
                            }
                        </div>
                        <div onClick={this.handleCloseModal} className="header__close" />
                    </div>
                    <div className="right__main">
                        {turnstile.info === false ? 
                            <React.Fragment>
                                <div className="main__info">
                                    <p>
                                        Модуль расширения “EP-2000” предназначен для расширения
                                        функционала турникетов CARDDEX.
                                    </p>
                                    <strong>Данный модуль оснащен интерфейсами:</strong>
                                    <ul>
                                        <li>Ethernet;</li>
                                        <li>RS-485;</li>
                                        <li>UART;</li>
                                        <li>I2C.</li>
                                    </ul>
                                    <p>
                                        Также оснащен дополнительным выходом для подключения различных
                                        исполнительных устройств. Встроенное ПО СКУД “CARDDEX IMS/AR” с
                                        функцией “Учет рабочего времени” избавляет от необходимости
                                        использовать внешние серверы программного обеспечения.
                                    </p>
                                    <strong>
                                        Широкий набор встроенных каналов подключения позволяет
                                        обеспечить:
                                    </strong>
                                    <ul>
                                        <li>
                                            одновременную работу с внешними считывателями бесконтактных
                                            карт, биометрическими сканерами отпечатков пальцев или
                                            универсальным 2D сканером QR-кодов;
                                        </li>
                                        <li>
                                            подключение до 32 дверных контроллеров CARDDEX по “общей шине”
                                            RS-485;
                                        </li>
                                        <li>
                                            подключение секции “Антипаника” с электромагнитным замком.
                                        </li>
                                    </ul>
                                    <strong>
                                        Энергонезависимая память контроллера позволяет хранить:
                                    </strong>
                                    <ul>
                                        <li>50 000 бесконтактных ключей;</li>
                                        <li>500 отпечатков пальцев;</li>
                                        <li>5 000 QR-кодов;</li>
                                        <li>250 000 событий;</li>
                                    </ul>
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div className="main__info">
                                    <div className="info__heading">
                                        <div>Технические характеристики:</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Напряжение питания (постоянный ток):</div>
                                        <div>12 V</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Максимальный потребляемый ток:</div>
                                        <div>2,6 A</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Локальная память ключей:</div>
                                        <div>50000 ключей</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Локальная память событий:</div>
                                        <div>250000 ключей</div>
                                    </div>
                                    <div className="info__block">
                                        <div> Локальная память отпечатков пальцев:</div>
                                        <div>500</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Локальная память штрих-кодов:</div>
                                        <div>5000</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Интерфейсы связи с внешними устройствами:</div>
                                        <div>Ethernet, RS-485, RS-232</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Кол-во релейных выходов:</div>
                                        <div>1</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Габаритные размеры:</div>
                                        <div>120 х 100 х 35 мм</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                    <div className="right__footer">
                        <div className="footer__price">{popup.data.module_price}</div>
                        {turnstile.data.page_view.module_selectors[0].state === 1 
                            ? 
                                <React.Fragment>
                                    <div onClick={this.handleCloseModal} className="footer__btn">Закрыть</div>
                                </React.Fragment>
                            :   
                                <React.Fragment>
                                    <div onClick={this.handleAddOption} className="footer__btn">Добавить</div>
                                </React.Fragment>
                        }
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
        fetchDataPopupTurnstile,
        togglePopupWindowTurnstile,
        togglePopupWindowMainInfoTurnstile
    }
)(EPpopup);
