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
        //this.props.togglePopupWindowMainInfoBarrier();
    };

    public render () {
        const { turnstile, barrier, isFetching } = this.props.data;

        //if (turnstile.data.length === 0 && !isFetching) {
        //    return <Loader />;
        //}
        //console.log(turnstile.data.page_view.model_price)
        return (
            <section className="popup-window window">
                <div className="window__left">
                    <div className="left__image">
                        <img className="image" src={photo} alt="" />
                    </div>
                </div>
                <div className="window__right right">
                    <div className="right__header right-header">
                        <img src={radioRemoteLogo} className="right-header__icon" alt='' />
                        <div className="right-header__description description">
                            <p className='description__text'>Модуль радио пультов PRK 400</p>
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
                                <div className="right-main__info main-info">
                                    <div className="main-info__heading">
                                        <div>Модуль радиопультов «PRK-400»:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Напряжение питания, В</div>
                                        <div>24</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Количество каналов</div>
                                        <div>2</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Рабочая частота, МГц</div>
                                        <div>433</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Память приемника, кнопок</div>
                                        <div>400</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Диапазон рабочих температур, °С</div>
                                        <div>-30... +55</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Класс защиты IP</div>
                                        <div>65</div>
                                    </div>
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="right__footer footer">
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
