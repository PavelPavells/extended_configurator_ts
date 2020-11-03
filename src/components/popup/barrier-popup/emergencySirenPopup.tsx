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
interface EmergencySirenPopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowBarrier: () => void,
    readonly togglePopupWindowMainInfoBarrier: () => void
}

class EmergencySirenPopup extends React.PureComponent<any> {

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
                            <p className='description__text'>Аварийная сирена</p>
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
                                    <p>Модули учета рабочего времени “TRE-05” и “TRM-05” предназначены для организации контроля доступа и учета рабочего времени персонала.</p>
                                    <strong>Интегрированный в панель идентификации дисплей отображает:</strong>
                                    <ul>
                                    <li>Ф.И.О. сотрудника;</li>
                                    <li>время его прихода на работу.</li>
                                    </ul>
                                    Встроенное ПО “CARDDEX IMS/AR” позволяет развернуть полноценную систему учета рабочего времени и контроля доступа, без дополнительного выделенного сервера.
                                    Идентификация пользователей происходит посредством биометрического сканера или RFID считывателя.
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <div className="right-main__info main-info">
                                    <div className="main-info__heading">
                                        <div>Технические характеристики дисплея учета рабочего времени:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Тип датчика:</div>
                                        <div>oптический</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Разрешение, размер изображения:</div>
                                        <div>450 dpi, 258×202 px</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Значение коэффициента ложного распознавания:</div>
                                        <div>{"<0.001%"}</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Напряжение питания:</div>
                                        <div>3,6B</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Потребляемый ток:</div>
                                        <div>{"<130мА"}</div>
                                    </div>
                                    <div className="main-info__heading">
                                        <div>Технические характеристики считывателей:</div>
                                    </div>
                                    <div className="main-info__heading">
                                        <div>Считыватель EMMarin:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>стандарт считывания:</div>
                                        <div>EM4100</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>рабочая частота:</div>
                                        <div>125КГц</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>рабочее напряжение</div>
                                        <div>5В</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>потребляемый ток:</div>
                                        <div>50мА</div>
                                    </div>
                                    <div className="main-info__heading">
                                        <div>Считыватель Mifire:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>стандарт считывания:</div>
                                        <div>Mifare 1K, Mifare 4K, Mifare Ultralight.</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>рабочая частота:</div>
                                        <div>13,56 МГц.</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>рабочее напряжение</div>
                                        <div>5В</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>потребляемый ток:</div>
                                        <div>{'<100мА'}</div>
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
)(EmergencySirenPopup);
