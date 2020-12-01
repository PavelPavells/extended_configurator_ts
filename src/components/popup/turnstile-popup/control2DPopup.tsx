/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
import { fetchDataPopupTurnstile } from '../../../actions/PopupActions/TurnstilePopup/PopupActions';
import {
    togglePopupWindowTurnstile,
    togglePopupWindowMainInfoTurnstile
} from '../../../actions/TurnstileActions/TurnstileActions';
//import Loader from "../../__utils__/Loader/Loader";
//import photo from "../../../images/str-compact1.png";
import logo from '../../../images/icon/one-time-control.svg'
import '../popup.scss';

interface Control2DPopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowTurnstile: () => void,
    readonly togglePopupWindowMainInfoTurnstile: () => void,
    readonly handleToggleModal: () => void,
    readonly fetchDataPopupTurnstile: (data: any, trigger: number) => void,
    readonly handleClickSixSelect: () => void
}

class Control2DPopup extends React.PureComponent<any> {
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

    private handleCloseModal = () => {
        this.props.handleToggleModal();
    };

    private handleAddOption = () => {
        this.props.handleClickSixSelect();
        this.handleCloseModal();
    }

    private handleToggleMainInfo = () => {
        this.props.togglePopupWindowMainInfoTurnstile();
    };

    public render () {

        const { turnstile, popup, isFetching } = this.props.data;

        if (popup.data.length === 0 && !isFetching) {
           return null;
        }
        
        return (
            <section className="popup">
                <div className="popup__left">
                    <div className="left__image">
                        <img className="image" src={popup.data.module_main_photo} alt="" />
                    </div>
                </div>
                <div className="popup__right">
                    <div className="right__header">
                        <img src={logo} className="header__icon" alt='' />
                        <div className="header__description">
                            <p className='description__text'>Контроль разовых посещений по 2D штрих-кодам</p>
                            {turnstile.info === false ? /** Перенести в экшены Popup */
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ХАРАКТЕРИСТИКИ</div> :
                                <div onClick={this.handleToggleMainInfo} className="description__toggle">ПОКАЗАТЬ ОПИСАНИЕ</div>
                            }
                        </div>
                        <div onClick={this.handleCloseModal} className="header__close" />
                    </div>
                    <div className="right__main">
                        {turnstile.info === false ? 
                            <React.Fragment>
                                <div className="main__info">
                                    <p>
                                        Модуль билетного доступа по QR-кодам “QS-03” используется в турникетах для контроля доступа в кинотеатры, музеи,выставочные центры, спортивные мероприятия и т.д. 
                                        В качестве устройства идентификации используется 2D сканер. 
                                        Данное решение предназначено для разового прохода посетителей по приглашению, пропуску или билету, смартфону, содержащему QR-код.
                                    </p>
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div className="main__info">
                                    <div className="info__heading">
                                        <div>Технические характеристики 2D сканера:</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Поддерживаемые стандарты:</div>
                                        <div>EAN-8, EAN-13, UPC-A, UPC-E, Code 39, Code 93, Code 128, EAN128, Codabar, Industrial 2 of 5, Interleave 2 of 5, Standard 25, Matrix 2 of 5, MSI, GS1, PDF417, MicroQR, DataMatrix, QR, HanXin, Aztec</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Скорость сканирования:</div>
                                        <div>1300 раз в секунду</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Минимальный процент контрастности распознаваемого текста:</div>
                                        <div>20%</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Допустимая освещенность окружающей поверхности:</div>
                                        <div>0-120000 лк.</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Напряжение питания:</div>
                                        <div>5В</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Потребляемый ток:</div>
                                        <div>{'<200мА'}</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                    <div className="right__footer">
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
export default connect(
    mapStateToProps,
    {
        fetchDataPopupTurnstile,
        togglePopupWindowTurnstile,
        togglePopupWindowMainInfoTurnstile
    }
)(Control2DPopup);
