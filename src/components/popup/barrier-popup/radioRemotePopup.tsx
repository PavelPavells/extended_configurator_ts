/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
//import { fetchDataPopupBarrier } from '../../../actions/dataPopupActions' /** добавить экшены в стор */
import {
    togglePopupWindowBarrier,
    togglePopupWindowMainInfoBarrier
} from '../../../actions/BarrierActions/BarrierActions';

//import Loader from "../../__utils__/Loader/Loader";

import photo from "../../../images/str-compact1.png";
import radioRemoteLogo from '../../../images/icon/radio-remote.svg'

import '../popup.scss';

interface RadioRemotePopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowBarrier: () => void,
    readonly togglePopupWindowMainInfoBarrier: () => void
}

class RadioRemotePopup extends React.PureComponent<any> {

    //componentDidMount () {
    //this.props.fetchDataTurnstile();
    //}

    private handleCloseModal = () => {
        document.addEventListener('keydown', event => {
            if (event.keyCode === 27) {
                this.props.togglePopupWindowBarrier();
            }
        });
        this.props.togglePopupWindowBarrier();
    };

    private handleToggleMainInfo = () => {
        this.props.togglePopupWindowMainInfoBarrier();
    };

    public render () {
        const { turnstile, barrier, isFetching } = this.props.data;

        //if (turnstile.data.length === 0 && !isFetching) {
        //    return <Loader />;
        //}
        //console.log(turnstile.data.page_view.model_price)
        return (
            <section className="popup">
                <div className="popup__left">
                    <div className="left__image">
                        <img className="image" src={photo} alt="" />
                    </div>
                </div>
                <div className="popup__right">
                    <div className="right__header">
                        <img src={radioRemoteLogo} className="header__icon" alt='' />
                        <div className="header__description">
                            <p className='description__text'>Модуль радио пультов PRK 400</p>
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
                                    <p>
                                        Благодаря встроенному модулю «PRK-400», шлагбаум дополняется функцией дистанционного открытия-закрытия пользователями посредством персональных радиопультов-брелоков, защищённых от копирования системой динамических кодов. 
                                    </p>
                                    <ul>
                                        <li>Шифрованный радиоканал на основе динамического кода</li>
                                        <li>Объем памяти позволяет хранить 400 кодов кнопок радиопультов, что позволяет обрабатывать 200 двухкнопочных пультов</li>
                                        <li>Подключение на стандартный разъем расширения блока управления серии «ABC»</li>
                                        <li>Возможность подключения сенсорной панели</li>
                                    </ul>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <div className="main__info">
                                    <div className="info__heading">
                                        <div>Модуль радиопультов «PRK-400»:</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Напряжение питания, В</div>
                                        <div>24</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Количество каналов</div>
                                        <div>2</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Рабочая частота, МГц</div>
                                        <div>433</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Память приемника, кнопок</div>
                                        <div>400</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Диапазон рабочих температур, °С</div>
                                        <div>-30... +55</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Класс защиты IP</div>
                                        <div>65</div>
                                    </div>
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="right__footer">
                        <div className="footer__price">2000 P{/* {barrier.data.page_view.model_price} */}</div>
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
)(RadioRemotePopup);
