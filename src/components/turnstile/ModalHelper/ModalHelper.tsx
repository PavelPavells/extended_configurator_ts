// @ts no-check
import React, { useState } from 'react';
import Loader from '../../../__utils__/Loader/Loader';
// @ts-ignore
import Video from '../../../video/video_helper.mp4';

import './ModalHelper.scss';

interface ModalHelper {
    handleCloseModalInfo: () => void;
    handleSetValueInStorage: () => void;
    hideWindow: boolean;
}

const ModalHelper: React.FC<ModalHelper> = ({ handleCloseModalInfo, handleSetValueInStorage, hideWindow }) => {
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

    return (
        <section className="helper">
            <div className="helper__tab">
                <div onClick={handleOpenModalInfo} className={openModalInfo ? "tab open__tab" : "tab"}>Справка</div>
                <div onClick={handleOpenModalVideo} className={openModalVideo ? "tab open__tab" : "tab" }>Видеоинструкция</div>
                <div onClick={handleCloseModalInfo} className="tab__close"></div>
            </div>
            <div className="helper__info">
                {openModalInfo ?
                    (
                        <div className="text">  
                            <strong className="text__strong">Инструкция для Конфигуратора</strong><br/>
                            <p>Выбор между сериями оборудования, типом корпуса и модулями осуществляется с помощью переключателей-тумблеров.</p>
                            <li>Определите нужный для себя функционал турникета и выберите серию - бюджетный STR c возможностью реализации механической «Антипаники» или эстетичный STX c автоматической «Антипаникой».</li>
                            <li>Вариант исполнения корпуса. Выберите компактный или тумбовый.</li>
                            <li>Выбор модулей. Аналогично с помощью переключателей произведите подбор дополнительных модулей. Модули могут как дополнять друг друга, так и быть взаимоисключающими (например, как модули RFID-считывателей форматов EM-Marine и Mifare).<br/>Ознакомиться с информацией по каждому модулю можно, наведя на него мышкой и нажав «Подробнее».</li>
                            <li>После завершения подбора, слева под фото, выбранного турникета будет виден состав модели. Вверху под наименованием при нажатии ссылки «Подробнее о модели» будет осуществлён переход на карточку товара с полным его описанием, указанием технических характеристик и другим полезным контентом.</li>
                            <li>При необходимости можно вернуться к исходным параметрам, нажав на ссылку «Сбросить» под ценой.</li>
                        </div>
                    )
                : 
                    (
                        <div className="video">
                            <video
                                // @ts-ignore
                                controls="controls"
                                // @ts-ignore
                                preload={Loader}
                                // @ts-ignore
                                playsInline="playsinline"
                                // @ts-ignore
                                muted=""
                                autoPlay={true}
                                border="none"
                            >
                                <source src={Video} type="video/mp4" />
                            </video>
                        </div>
                    )
                }
            </div>
            <footer className="helper__footer">
                <div className="onoffswitch10">
                    <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch10-checkbox"
                        id="header10-checkbox"
                        onChange={handleSetValueInStorage}
                        checked={hideWindow}
                    />
                    <label
                        className="onoffswitch10-label"
                        htmlFor="header10-checkbox"
                    >
                        <span className="onoffswitch10-inner"></span>
                        <span className="onoffswitch10-switch"></span>
                    </label>
                    </div>
                <div onClick={handleSetValueInStorage} className="footer__text">Больше не показывать это окно</div>
            </footer>
        </section>
    )
}

export default ModalHelper;
