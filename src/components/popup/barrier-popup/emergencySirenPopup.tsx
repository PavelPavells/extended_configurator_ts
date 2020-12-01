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
            <section className="popup">
                <div className="popup__left">
                    <div className="left__image">
                        <img className="image" src={photo} alt="" />
                    </div>
                </div>
                <div className="popup__right">
                    <div className="right__header">
                        <img src={emergencySirenLogo} className="header__icon" alt='' />
                        <div className="header__description">
                            <p className='description__text'>Аварийная сирена «DS-01»</p>
                            {barrier.info === false ?
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ХАРАКТЕРИСТИКИ</div> :
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ПОКАЗАТЬ ОПИСАНИЕ</div>
                            }
                        </div>
                        <div onClick={this.handleCloseModal} className="header__close" />
                    </div>
                    <div className="right__main">
                        {barrier.info === false ? 
                            <Fragment>
                                <div className="main__info">
                                    <p>Предназначена для подачи звукового сигнала при попытке несанкционированного, принудительного подъёма стрелы шлагбаума</p>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <div className="main__info">
                                    <div className="info__heading">
                                        <div>Аварийная сирена «DS-01»</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Напряжение питания, В:</div>
                                        <div>24</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Диапазон рабочих температур, °С:</div>
                                        <div>-30... +55</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Класс защиты IP:</div>
                                        <div>20</div>
                                    </div>
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="right__footer">
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
)(EmergencySirenPopup);
