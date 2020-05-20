/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';

/**
 * Импорт экшенов
 */
import { fetchDataPopupTurnstile } from '../../../actions/dataPopupActions';
import {
    togglePopupWindowTurnstile,
    togglePopupWindowMainInfoTurnstile
} from '../../../actions/dataTurnstileActions';

/**
 * Импорт фото
 */
//import photo from "../../../images/str-compact1.png";
import logo from '../../../images/icon/shape.svg'

/**
 * Импорт стилей
 */
import '../popup.scss';

/**
 * Интерфейс компонента EPpopup
 */
interface EPpopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowTurnstile: () => void,
    readonly togglePopupWindowMainInfoTurnstile: () => void,
    readonly handleToggleModal: () => void,
    readonly fetchDataPopupTurnstile: (data: any, trigger: number) => void,
    readonly handleClickOneSelect: () => void
}

class EPpopup extends React.PureComponent<EPpopupProps> {

    /**
     * Запрос данных
     */
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

    /**
     *  Обработчик экшена Открытия/Закрытия модального окна
     */
    private handleCloseModal = () => {

        /**
         *  Функция тогглинга всплывающего окна из компонента selectorEP
         */
        this.props.handleToggleModal();
    };

    /**
     * Обработчик клика выбора опции из всплывающего окна
     */
    private handleAddOption = () => {
        this.props.handleClickOneSelect();
        this.handleCloseModal();
    }

    /**
     * Открыть/Закрыть Popup
     */
    private handleToggleMainInfo = () => {
        this.props.togglePopupWindowMainInfoTurnstile();
    };

    public render () {
        /**
         * Данные из Глобального Стора
         */
        const { turnstile, popup, isFetching } = this.props.data;

        if (popup.data.length === 0 && !isFetching) {
           return null;
        }

        return (

        /**
         * Компонент Popup
         */
            <section className="popup-window window">
                <div className="window__left">
                    <div className="left__image">
                        <img className="image" src={popup.data.module_main_photo} alt='' />
                    </div>
                </div>
                <div className="window__right right">
                    <div className="right__header right-header">
                        <img src={logo} className="right-header__icon" alt='' />
                        <div className="right-header__description description">
                            <p className='description__text'>Универсальный сетевой контроллер расширения EP-2000</p>
                            {turnstile.info === false ? /** Перенести в экшены Popup */
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ХАРАКТЕРИСТИКИ</div> :
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ПОКАЗАТЬ ОПИСАНИЕ</div>
                            }
                        </div>
                        <div onClick={this.handleCloseModal} className="right-header__close" />
                    </div>
                    <div className="right__main right-main">
                        {turnstile.info === false ? 
                            <React.Fragment>
                                <div className="right-main__info main-info">
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
                                <div className="right-main__info main-info">
                                    <div className="main-info__heading">
                                        <div>Технические характеристики:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Напряжение питания (постоянный ток):</div>
                                        <div>12 V</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Максимальный потребляемый ток:</div>
                                        <div>2,6 A</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Локальная память ключей:</div>
                                        <div>50000 ключей</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Локальная память событий:</div>
                                        <div>250000 ключей</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div> Локальная память отпечатков пальцев:</div>
                                        <div>500</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Локальная память штрих-кодов:</div>
                                        <div>5000</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Интерфейсы связи с внешними устройствами:</div>
                                        <div>Ethernet, RS-485, RS-232</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Кол-во релейных выходов:</div>
                                        <div>1</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Габаритные размеры:</div>
                                        <div>120 х 100 х 35 мм</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                    <div className="right__footer footer">
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
export default connect<{}, {}, EPpopupProps>(
    mapStateToProps,
    {
        fetchDataPopupTurnstile,
        togglePopupWindowTurnstile,
        togglePopupWindowMainInfoTurnstile
    }
)(EPpopup);
