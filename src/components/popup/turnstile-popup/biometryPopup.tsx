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
import { fetchDataPopupTurnstile } from '../../../actions/PopupActions/TurnstilePopup/PopupActions';
import {
    togglePopupWindowTurnstile,
    togglePopupWindowMainInfoTurnstile
} from '../../../actions/TurnstileActions/TurnstileActions';

/**
 * Импорт прелоадера
 */
//import Loader from "../../__utils__/Loader/Loader";

/**
 * Импорт фото
 */
//import photo from "../../../images/str-compact1.png";
import logo from '../../../images/icon/biometric.svg'

/**
 * Импорт стилей
 */
import '../popup.scss';

/**
 * Интерфейс компонента BiometryPopup
 */
interface BiometryPopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowTurnstile: () => void,
    readonly togglePopupWindowMainInfoTurnstile: () => void,
    readonly handleToggleModal: () => void,
    readonly fetchDataPopupTurnstile: (data: any, trigger: number) => void,
    readonly handleClickFourSelect: () => void
}

class BiometryPopup extends React.PureComponent<any> {

    /**
     * Запрос данных
     */
    componentDidMount () {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 8,
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
        this.props.handleClickFourSelect();
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
                        <img className="image" src={popup.data.module_main_photo} alt="" />
                    </div>
                </div>
                <div className="window__right right">
                    <div className="right__header right-header">
                        <img src={logo} className="right-header__icon" alt='' />
                        <div className="right-header__description description">
                            <p className='description__text'>Биометрическая идентификация по отпечаткам пальцев</p>
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
                                    Встраиваемые модули биометрической идентификации “FRE-02” и “FRM-02” предназначены для обеспечения доступа авторизованным пользователям посредством сканирования отпечатка пальца. 
                                    В данный модуль встроены RFID считыватели стандартов EMMarin или Mifare.
                                </p>
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div className="right-main__info main-info">
                                    <div className="main-info__heading">
                                        <div>Технические характеристики биосканеров:</div>
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
                            </React.Fragment>
                        }
                    </div>
                    <div className="right__footer footer">
                        <div className="footer__price">{popup.data.module_price}</div>
                        {turnstile.data.page_view.module_selectors[3].state === 1 
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
)(BiometryPopup);
