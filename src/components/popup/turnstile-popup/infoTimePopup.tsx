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
import logo from '../../../images/icon/time.svg'

import '../popup.scss';

interface InfoTimePopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowTurnstile: () => void,
    readonly togglePopupWindowMainInfoTurnstile: () => void,
    readonly handleToggleModal: () => void,
    readonly fetchDataPopupTurnstile: (data: any, trigger: number) => void,
    readonly handleClickFiveSelect: () => void
}

class InfoTimePopup extends React.PureComponent<any> {
    componentDidMount () {
        const { page_view } = this.props.data.turnstile.data;
        let data = {
            app_id: 'id',
            trigger: 9,
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
        this.props.handleClickFiveSelect();
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
                            <p className='description__text'>Информационный дисплей учета рабочего времени</p>
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
                                    <p>Модули учета рабочего времени “TRE-05” и “TRM-05” предназначены для организации контроля доступа и учета рабочего времени персонала.</p>
                                    <strong>Интегрированный в панель идентификации дисплей отображает:</strong>
                                    <ul>
                                    <li>Ф.И.О. сотрудника;</li>
                                    <li>время его прихода на работу.</li>
                                    </ul>
                                    Встроенное ПО “CARDDEX IMS/AR” позволяет развернуть полноценную систему учета рабочего времени и контроля доступа, без дополнительного выделенного сервера.
                                    Идентификация пользователей происходит посредством биометрического сканера или RFID считывателя.
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div className="main__info">
                                    <div className="info__heading">
                                        <div>Технические характеристики дисплея учета рабочего времени:</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Тип датчика:</div>
                                        <div>oптический</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Разрешение, размер изображения:</div>
                                        <div>450 dpi, 258×202 px</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Значение коэффициента ложного распознавания:</div>
                                        <div>{"<0.001%"}</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Напряжение питания:</div>
                                        <div>3,6B</div>
                                    </div>
                                    <div className="info__block">
                                        <div>Потребляемый ток:</div>
                                        <div>{"<130мА"}</div>
                                    </div>
                                    <div className="info__heading">
                                        <div>Технические характеристики считывателей:</div>
                                    </div>
                                    <div className="info__heading">
                                        <div>Считыватель EMMarin:</div>
                                    </div>
                                    <div className="info__block">
                                        <div>стандарт считывания:</div>
                                        <div>EM4100</div>
                                    </div>
                                    <div className="info__block">
                                        <div>рабочая частота:</div>
                                        <div>125КГц</div>
                                    </div>
                                    <div className="info__block">
                                        <div>рабочее напряжение</div>
                                        <div>5В</div>
                                    </div>
                                    <div className="info__block">
                                        <div>потребляемый ток:</div>
                                        <div>50мА</div>
                                    </div>
                                    <div className="info__heading">
                                        <div>Считыватель Mifire:</div>
                                    </div>
                                    <div className="info__block">
                                        <div>стандарт считывания:</div>
                                        <div>Mifare 1K, Mifare 4K, Mifare Ultralight.</div>
                                    </div>
                                    <div className="info__block">
                                        <div>рабочая частота:</div>
                                        <div>13,56 МГц.</div>
                                    </div>
                                    <div className="info__block">
                                        <div>рабочее напряжение</div>
                                        <div>5В</div>
                                    </div>
                                    <div className="info__block">
                                        <div>потребляемый ток:</div>
                                        <div>{'<100мА'}</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                    <div className="right__footer">
                        <div className="footer__price">{popup.data.module_price}</div>
                        {turnstile.data.page_view.module_selectors[4].state === 1 
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
)(InfoTimePopup);
