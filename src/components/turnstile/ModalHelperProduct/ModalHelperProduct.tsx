// @ts-nocheck
import React, { useState } from 'react';
import Loader from '../../../__utils__/Loader/Loader';

import './ModalHelperProduct.scss';

interface ModalHelperProduct {
    props: any;
    isOpen?: () => void;
    handleCloseModalInfo?: () => void;
    handleSetValueInStorage?: () => void;
    hideWindow?: boolean;
}

const ModalHelper: React.FC<ModalHelperProduct> = ({ data: { turnstile }, isOpen }) => {
    const [openModalInfo, setOpenModalInfo] = useState(true);
    const [openModalVideo, setOpenModalVideo] = useState(false);

    const handleOpenModalInfo = () => {
        setOpenModalInfo(true);
        setOpenModalVideo(false);
    }

    const handleOpenModalVideo = () => {
        setOpenModalInfo(false);
        setOpenModalVideo(true);
    }

    console.log(turnstile)
    return (
        <section className="helper">
            <div className="helper__tab">
                <div className="tab__togglers">
                    <div onClick={handleOpenModalInfo} className={openModalInfo ? "tab open__tab" : "tab"}>Описание</div>
                    <div onClick={handleOpenModalVideo} className={openModalVideo ? "tab open__tab" : "tab" }>Характеристики</div>
                </div>
                <div onClick={isOpen} className="tab__close"></div>
            </div>
            <div className="helper__info">
                {openModalInfo ?
                    (
                        <div className="text">
                            <p>Электронная проходная (ЭП) «STR-04NFM» это полностью укомплектованная система для организации контроля доступа на предприятиях, учреждениях и бизнес-центрах, в которых присутствует необходимость повышенной точности идентификации пользователя посредством биометрической аутентификации.</p>
                            <p>Отличительной особенностью ЭП является возможность идентификации пользователей посредством биометрического сканера, позволяющего осуществлять проход по отпечатку пальца. В виде дополнительной возможности идентификации интегрирован RFID считыватель стандарта «Mifare».</p>
                            <p>Одно из основных преимуществ тумбового корпуса — надежность перекрытия зоны прохода. При монтаже нескольких ЭП в ряд, их корпуса формируют зону прохода.</p>
                            <p>В состав системы входит надежный контроллер «CBU-250», модуль биометрической и RFID идентификации «FRM-02T»,  а также сетевой модуль расширения CARDDEX «EP-2000» с интерфейсом. Благодаря наличию Ethernet, «STR-04NFM» имеет возможность прямого подключения к компьютеру или к локальной сети для ввода данных и вывода данных.</p>
                            <p>Может комплектоваться преграждающими планками типа «Стандарт» и механическая «Антипаника» в исполнении из алюминий или нержавеющей стали.</p>
                        </div>
                    )
                : 
                    (
                        <div className="text">
                            <div className="info__block">
                                <div>Биометрическая идентификация</div>
                                <div>Отпечатки пальцев</div>
                            </div>
                            <div className="info__block">
                                <div>Идентификация по ключам</div>
                                <div>Стандарт "Mifire"</div>
                            </div>
                            <div className="info__block">
                                <div>Количество хранимых ключей</div>
                                <div>50 000</div>
                            </div>
                            <div className="info__block">
                                <div>Количество хранимых событий</div>
                                <div>250 000</div>
                            </div>
                            <div className="info__block">
                                <div>Однократный проход</div>
                                <div>35 человек в минуту</div>
                            </div>
                            <div className="info__block">
                                <div>Свободный проход</div>
                                <div>60 человек в минуту</div>
                            </div>
                            <div className="info__block">
                                <div>Средний ток потребления</div>
                                <div>от 0.6 до 3А</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default ModalHelper;
