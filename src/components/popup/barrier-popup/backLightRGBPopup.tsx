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
                            <p className='description__text'>RGB-подсветка стрелы «RSP-01»</p>
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
                                        Обеспечивает более высокий уровень безопасности при эксплуатации шлагбаума в темное время суток, а также в условиях плохой видимости.
                                    </p>
                                    <p>
                                        В подсветке стрелы используется красный и зеленый цвет, что наглядно отображает возможность проезда через шлагбаум.
                                    </p>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <div className="right-main__info main-info">
                                    <div className="main-info__heading">
                                        <div>RGB-подсветка стрелы «RSP-01»:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Напряжение питания, В:</div>
                                        <div>24</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Цвет:</div>
                                        <div>Двухцветная</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>Диапазон рабочих температур, °С:</div>
                                        <div>-30... +55</div>
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
)(BackLightRGBPopup);
