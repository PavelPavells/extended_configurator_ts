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
import heatingModuleLogo from '../../../images/icon/heating-module.svg'

import '../popup.scss';

interface HeatingModulePopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowBarrier: () => void,
    readonly togglePopupWindowMainInfoBarrier: () => void
}

class HeatingModulePopup extends React.PureComponent<any> {

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
        //console.log(barrier.data.page_view.model_price)
        return (
            <section className="popup">
                <div className="popup__left">
                    <div className="left__image">
                        <img className="image" src={photo} alt="" />
                    </div>
                </div>
                <div className="popup__right">
                    <div className="right__header">
                        <img src={heatingModuleLogo} className="header__icon" alt='' />
                        <div className="header__description">
                            <p className='description__text'>Модуль обогрева MHP</p>
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
                                        Предназначен для дополнительного обогрева линейного привода и электроники шлагбаума. Благодаря данному модулю, шлагбаумы могут использоваться в районах с холодными климатическими условиями.
                                    </p>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <div className="main__info">
                                    
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="right__footer">
                        <div className="footer__price">2500 P {/* {barrier.data.page_view.model_price} */}</div>
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
)(HeatingModulePopup);
