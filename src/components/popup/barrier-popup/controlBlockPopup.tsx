/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React, { Fragment } from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';

/**
 * Импорт экшенов
 */
//import { fetchDataPopupBarrier } from '../../../actions/dataPopupActions' /** добавить экшены в стор */
import {
    togglePopupWindowBarrier,
    togglePopupWindowMainInfoBarrier
} from '../../../actions/BarrierActions/BarrierActions';

/**
 * Импорт прелоадера
 */
//import Loader from "../../__utils__/Loader/Loader";

/**
 * Импорт фото
 */
import photo from "../../../images/str-compact1.png";
import controlBlockLogo from '../../../images/icon/block-control.svg'

/**
 * Импорт стилей
 */
import '../popup.scss';

/**
 * Интерфейс компонента ControlBlockPopup
 */
interface ControlBlockPopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowBarrier: () => void,
    readonly togglePopupWindowMainBarrier: () => void
}

class ControlBlockPopup extends React.PureComponent<any> {

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
                this.props.togglePopupWindowBarrier();
            }
        });
        this.props.togglePopupWindowBarrier();
    };

    /**
     * Открыть/Закрыть Popup
     */
    private handleToggleMainInfo = () => {
        //this.props.togglePopupWindowMainInfoBarrier();
    };

    public render () {
        /**
         * Данные из Глобального Стора
         */
        const { turnstile, barrier, isFetching } = this.props.data;

        //if (turnstile.data.length === 0 && !isFetching) {
        //    return <Loader />;
        //}
        //console.log(turnstile.data.page_view.model_price)
        return (

        /**
         * Компонент ControlBlockPopup
         */
            <section className="popup-window window">
                <div className="window__left">
                    <div className="left__image">
                        <img className="image" src={photo} alt="" />
                    </div>
                </div>
                <div className="window__right right">
                    <div className="right__header right-header">
                        <img src={controlBlockLogo} className="right-header__icon" alt='' />
                        <div className="right-header__description description">
                            <p className='description__text'>Блок управления ABC-21PS</p>
                            {barrier.info === false ?
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ХАРАКТЕРИСТИКИ</div> :
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ПОКАЗАТЬ ОПИСАНИЕ</div>
                            }
                        </div>
                        <div onClick={this.handleCloseModal} className="right-header__close" />
                    </div>
                    <div className="right__main right-main">
                        {barrier.info === false ? 
                            <Fragment>
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
                            </Fragment>
                            :
                            <Fragment>
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
                            </Fragment>
                        }
                    </div>
                    <div className="right__footer footer">
                        <div className="footer__price">{barrier.data.page_view.model_price}</div>
                        <div className="footer__btn">Закрыть</div>
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
        togglePopupWindowBarrier,
        togglePopupWindowMainInfoBarrier
    }
)(ControlBlockPopup);
