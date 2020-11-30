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
import inductanceLoopLogo from '../../../images/icon/induction-loop.svg'

import '../popup.scss';

interface PhotoCells02Props {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowBarrier: () => void,
    readonly togglePopupWindowMainInfoBarrier: () => void
}

class PhotoCells02Popup extends React.PureComponent<any> {

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
                            <p className='description__text'>Комплект беспроводных фотоэлементов «PR-02»</p>
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
                                        Комплект навесных беспроводных фотоэлементов состоит из инфракрасного передатчика и приемника. Предназначен для определения нахождения посторонних предметов на оптической оси между ними. Применение данного модуля позволяет исключить возможность опускания стрелы на проезжающее транспортное средство, а также организовать автоматическое опускание стрелы после проезда автомобиля через шлагбаум.
                                    </p>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <div className="right-main__info main-info">
                                    <div className="main-info__heading">
                                        <div>Комплект беспроводных фотоэлементов «PR-02»:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Напряжение питания, В:</div>
                                        <div>12-24</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Тип используемых батарей:</div>
                                        <div>AA</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Рабочая сила тока Приемника, мA:</div>
                                        <div>40</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Рабочая сила тока Передатчика, мA:</div>
                                        <div>0.5</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Диапазон приемника, м:</div>
                                        <div>≤12</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Диапазон рабочих температур, °С:</div>
                                        <div>-20... +60</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Класс защиты IP:</div>
                                        <div>54</div>
                                    </div>
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="right__footer footer">
                        <div className="footer__price">3500 P {/* {barrier.data.page_view.model_price} */}</div>
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
)(PhotoCells02Popup);
