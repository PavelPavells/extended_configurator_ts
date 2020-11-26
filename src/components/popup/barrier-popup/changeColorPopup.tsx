/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';
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
import changeColorLogo from '../../../images/icon/change-color.svg'

/**
 * Импорт стилей
 */
import '../popup.scss';

interface ChangeColorPopupProps {
    readonly data: any,
    readonly handleCloseModal: () => void,
    readonly togglePopupWindowBarrier: () => void,
    readonly togglePopupWindowMainInfoBarrier: () => void
}

class ChangeColorPopup extends React.PureComponent<any> {

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
                        <img src={changeColorLogo} className="right-header__icon" alt='' />
                        <div className="right-header__description description">
                            <p className='description__text'>
                                Замена цвета корпуса RAL7035 на RAL1016
                            </p>
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
                                        Модули гостевого доступа по QR-кодам “QRE-04” и “QRM-04”
                                        предназначены для использования в турникетах, расположенных на
                                        различных объектах, где наряду с доступом авторизованных
                                        пользователей, предусмотрен доступ сторонних посетителей. В
                                        данном случае, гостевой доступ осуществляется посредством
                                        считывания QR-кодов со смартфонов посетителей или с бумажных
                                        носителей, распечатанных и выданных на проходной. Данное решение
                                        является альтернативой устаревшей системы использования
                                        картоприемников для гостевого доступа и имеет ряд существенных
                                        плюсов, как по функционалу, так и по стоимости.
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
                                        <div>{"<200мА"}</div>
                                    </div>
                                    <div className="main-info__heading">
                                        <div>Технические характеристики считывателей:</div>
                                    </div>
                                    <div className="main-info__heading">
                                        <div>Считыватель EMMarin:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>стандарт считывания:</div>
                                        <div>EM4100</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>рабочая частота:</div>
                                        <div>125КГц</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>рабочее напряжение</div>
                                        <div>5В</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>потребляемый ток:</div>
                                        <div>50мА</div>
                                    </div>
                                    <div className="main-info__heading">
                                        <div>Считыватель Mifire:</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>стандарт считывания:</div>
                                        <div>Mifare 1K, Mifare 4K, Mifare Ultralight.</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>рабочая частота:</div>
                                        <div>13,56 МГц.</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>рабочее напряжение</div>
                                        <div>5В</div>
                                    </div>
                                    <div className="main-info__block">
                                        <div>потребляемый ток:</div>
                                        <div>{'<100мА'}</div>
                                    </div>
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="right__footer footer">
                        <div className="footer__price">11 111 P{/* {barrier.data.page_view.model_price} */}</div>
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
)(ChangeColorPopup);
