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
 * Импорт прелоадера
 */
//import Loader from "../../__utils__/Loader/Loader";

/**
 * Импорт фото
 */
//import photo from "../../../images/str-compact1.png";
import logo from '../../../images/icon/one-time-control.svg'

/**
 * Импорт стилей
 */
import '../popup.scss';

/**
 * Интерфейс компонента Control2DPopup
 */
interface Control2DPopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowTurnstile: () => void,
    readonly togglePopupWindowMainInfoTurnstile: () => void,
    readonly handleToggleModal: () => void,
    readonly fetchDataPopupTurnstile: (data: any, trigger: number) => void,
    readonly handleClickSixSelect: () => void
}

class Control2DPopup extends React.PureComponent<Control2DPopupProps> {

    /**
     * Запрос данных
     */
    componentDidMount () {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 10,
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
        this.props.handleClickSixSelect();
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
                            <p className='description__text'>Контроль разовых посещений по 2D штрих-кодам</p>
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
                                        Модуль билетного доступа по QR-кодам “QS-03” используется в турникетах для контроля доступа в кинотеатры, музеи,выставочные центры, спортивные мероприятия и т.д. 
                                        В качестве устройства идентификации используется 2D сканер. 
                                        Данное решение предназначено для разового прохода посетителей по приглашению, пропуску или билету, смартфону, содержащему QR-код.
                                    </p>
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div className="right-main__info main-info">
                                    <div className="main-info__heading">
                                        <div>Технические характеристики 2D сканера:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Поддерживаемые стандарты:</div>
                                        <div>EAN-8, EAN-13, UPC-A, UPC-E, Code 39, Code 93, Code 128, EAN128, Codabar, Industrial 2 of 5, Interleave 2 of 5, Standard 25, Matrix 2 of 5, MSI, GS1, PDF417, MicroQR, DataMatrix, QR, HanXin, Aztec</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Скорость сканирования:</div>
                                        <div>1300 раз в секунду</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Минимальный процент контрастности распознаваемого текста:</div>
                                        <div>20%</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Допустимая освещенность окружающей поверхности:</div>
                                        <div>0-120000 лк.</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Напряжение питания:</div>
                                        <div>5В</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Потребляемый ток:</div>
                                        <div>{'<200мА'}</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                    <div className="right__footer footer">
                        <div className="footer__price">{popup.data.module_price}</div>
                        {turnstile.data.page_view.module_selectors[5].state === 1 
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
export default connect<{}, {}, Control2DPopupProps>(
    mapStateToProps,
    {
        fetchDataPopupTurnstile,
        togglePopupWindowTurnstile,
        togglePopupWindowMainInfoTurnstile
    }
)(Control2DPopup);
