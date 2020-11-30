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
import emergencySirenLogo from '../../../images/icon/emergency-siren.svg'

/**
 * Импорт стилей
 */
import '../popup.scss';

/**
 * Интерфейс компонента EmergencySirenPopup
 */
interface ExpansionPopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowBarrier: () => void,
    readonly togglePopupWindowMainInfoBarrier: () => void
}

class ExpansionPopup extends React.PureComponent<any> {

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
        this.props.togglePopupWindowMainInfoBarrier();
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
         * Компонент Popup
         */
            <section className="popup-window window">
                <div className="window__left">
                    <div className="left__image">
                        <img className="image" src={photo} alt="" />
                    </div>
                </div>
                <div className="window__right right">
                    <div className="right__header right-header">
                        <img src={emergencySirenLogo} className="right-header__icon" alt='' />
                        <div className="right-header__description description">
                            <p className='description__text'>Модуль расширения «MS-03»</p>
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
                                    <p>Модуль расширения функционала блока управления шлагбаумом ABC-31M.  Предназначен для подключения исполнительных устройств, датчиков и дополнительных модулей:</p>
                                    <ul>
                                        <li>Модуль автоблокировки стрелы в опоре</li>
                                        <li>Датчики температуры двигателя и температуры воздуха в корпусе шлагбаума</li>
                                        <li>RGB подсветка стрелы</li>
                                    </ul>
                                    <p>Дополнительные функции программного обеспечения:</p>
                                    <ul>
                                        <li>Получение данных о температуре двигателя и о температуре воздуха в корпусе шлагбаума с отображением показаний на дисплее блока управления и передачи данных по RS-485</li>
                                        <li>Поддержка функции отключения двигателя при превышении максимальной рабочей температуры</li>
                                        <li>Счетчик количества въезжающих и выезжающих транспортных средств</li>
                                        <li>Включение звуковой и световой сигнализации при попытке несанкционированного подъема стрелы (при отсутствии модуля автоблокировки)</li>
                                    </ul>
                                    <p>Имеет вход и выход сигнала «тревога» для подключения к системе охранно-пожарной сигнализации, а также выход сигнала о факте проезда транспортного средства</p>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <div className="right-main__info main-info">
                                    <div className="main-info__heading">
                                        <div>Аварийная сирена «DS-01»</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Напряжение питания, В:</div>
                                        <div>24</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Диапазон рабочих температур, °С:</div>
                                        <div>-30... +55</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Класс защиты IP:</div>
                                        <div>20</div>
                                    </div>
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="right__footer footer">
                        <div className="footer__price">1500 Р{/* {barrier.data.page_view.model_price} */}</div>
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
)(ExpansionPopup);
