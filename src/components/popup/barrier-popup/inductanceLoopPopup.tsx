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
import inductanceLoopLogo from '../../../images/icon/induction-loop.svg'

/**
 * Импорт стилей
 */
import '../popup.scss';

/**
 * Интерфейс компонента Control2DPopup
 */
interface InductanceLoopPopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowBarrier: () => void,
    readonly togglePopupWindowMainInfoBarrier: () => void
}

class InductanceLoopPopup extends React.PureComponent<any> {

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
         * Компонент InductanceLoopPopup
         */
            <section className="popup-window window">
                <div className="window__left">
                    <div className="left__image">
                        <img className="image" src={photo} alt="" />
                    </div>
                </div>
                <div className="window__right right">
                    <div className="right__header right-header">
                        <img src={inductanceLoopLogo} className="right-header__icon" alt='' />
                        <div className="right-header__description description">
                            <p className='description__text'>Модуль подключения петли индуктивности VLD-10</p>
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
                                        Модуль билетного доступа по QR-кодам “QS-03” используется в турникетах для контроля доступа в кинотеатры, музеи,выставочные центры, спортивные мероприятия и т.д. 
                                        В качестве устройства идентификации используется 2D сканер. 
                                        Данное решение предназначено для разового прохода посетителей по приглашению, пропуску или билету, смартфону, содержащему QR-код.
                                    </p>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
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
)(InductanceLoopPopup);
