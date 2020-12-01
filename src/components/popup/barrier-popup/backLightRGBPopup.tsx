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

interface BackLightRGBProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowBarrier: () => void,
    readonly togglePopupWindowMainInfoBarrier: () => void
}

class BackLightRGBPopup extends React.PureComponent<any> {

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
                        <img src={inductanceLoopLogo} className="header__icon" alt='' />
                        <div className="header__description">
                            <p className='description__text'>RGB-подсветка стрелы «RSP-01»</p>
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
                                        Обеспечивает более высокий уровень безопасности при эксплуатации шлагбаума в темное время суток, а также в условиях плохой видимости.
                                    </p>
                                    <p>
                                        В подсветке стрелы используется красный и зеленый цвет, что наглядно отображает возможность проезда через шлагбаум.
                                    </p>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <div className="main__info">
                                    <div className="info__heading">
                                        <div>RGB-подсветка стрелы «RSP-01»:</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Напряжение питания, В:</div>
                                        <div>24</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Цвет:</div>
                                        <div>Двухцветная</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Диапазон рабочих температур, °С:</div>
                                        <div>-30... +55</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Класс защиты IP:</div>
                                        <div>54</div>
                                    </div>
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="right__footer">
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
)(BackLightRGBPopup);
