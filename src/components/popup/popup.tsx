/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../store/store';

/**
 * Импорт экшенов
 */
import {
    togglePopupWindowTurnstile,
    togglePopupWindowMainInfoTurnstile
} from '../../actions/dataTurnstileActions';

/**
 * Импорт прелоадера
 */
//import Loader from "../../__utils__/Loader/Loader";

/**
 * Импорт фото
 */
import photo from "../../images/str-compact1.png";

/**
 * Импорт стилей
 */
import './popup.scss';

/**
 * Интерфейс компонента Popup
 */
interface PopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowTurnstile: () => void,
    readonly togglePopupWindowMainInfoTurnstile: () => void
}

class Popup extends React.PureComponent<PopupProps> {

    /**
     * Запрос данных
     */
    //componentDidMount () {
    //this.props.fetchDataTurnstile();
    //}

    /**
     *  Обработчик экшена Открытия/Закрытия модального окна
     */

    private handleCloseModal = () => {
        document.addEventListener('keydown', event => {
            if (event.keyCode === 27) {
                this.props.togglePopupWindowTurnstile();
            }
        });
        this.props.togglePopupWindowTurnstile();
    };

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
        const { turnstile } = this.props.data;

        //if (turnstile.data.length === 0 && !isFetching) {
        //    return <Loader />;
        //}
        console.log(turnstile.data.page_view.model_price)
        return (

        /**
         * Компонент Popup
         */
            <section className="popup">
                <div className="left">
                    <div className="left__image">
                        <img className="image" src={photo} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="right-header">
                        <div className="right-header__icon" />
                        <div className="right-header__description">
                            <p>Универсальный сетевой контроллер расширения EP-2000</p>
                            {turnstile.info === false ?
                                <div onClick={this.handleToggleMainInfo} className="right-header__description-toggle">ХАРАКТЕРИСТИКИ</div> :
                                <div onClick={this.handleToggleMainInfo} className="right-header__description-toggle">ПОКАЗАТЬ ОПИСАНИЕ</div>
                            }
                        </div>
                        <div onClick={this.handleCloseModal} className="right-header__close" />
                    </div>
                    <div className="right-main">
                        <div className="right-main__info">
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
                    </div>
                    <div className="right-footer">
                        <div className="right-footer__price">{turnstile.data.page_view.model_price}</div>
                        <div className="right-footer__btn">Закрыть</div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect<{}, {}, PopupProps>(
    mapStateToProps,
    {
        togglePopupWindowTurnstile,
        togglePopupWindowMainInfoTurnstile
    }
)(Popup);
