/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React, { Suspense } from "react";
import PropTypes from "prop-types";
// @ts-ignore
import { connect } from "react-redux";

/**
 * Импорт экшенов
 */
import {
    togglePopupWindowTurnstile,
    togglePopupWindowMainInfoTurnstile
} from '../../actions/dataTurnstileActions';

/**
 * Импорт прелоадера
 */
import Loader from "../../__utils__/Loader/Loader";

/**
 * Импорт фото
 */
import photo from "../../images/str-compact1.png";

/**
 * Импорт стилей
 */
import './popup.scss';

class Popup extends React.PureComponent {
    /**
   * Запрос данных
   */
    componentDidMount () {
    //this.props.fetchDataTurnstile();
    }

  /** ************* HANDLE CLOSE MODAL ************* */
  // @ts-ignore
  handleCloseModal = event => {
      // @ts-ignore
      this.props.togglePopupWindowTurnstile();

      document.addEventListener('keydown', event => {
          if (event.keyCode === 27) {
              // @ts-ignore
              this.handleCloseModal();
          }
      });
  };

  /**
   * Открыть/Закрыть Popup
   */
  // @ts-ignore
  handleToggleMainInfo = event => {
      // @ts-ignore
      this.props.togglePopupWindowMainInfoTurnstile();
  };

  render () {
      /**
     * Данные из Глобального Стора
     */
    // @ts-ignore
      const { turnstile, isFetching } = this.props.data;
      //console.log(turnstile);
      if (turnstile.data.length === 0 && !isFetching) {
          return (
              <Suspense fallback={<div><Loader /></div>} />
          );
      }
      return (

      /**
       * Компонент Popup
      */
          <section className="popup">
              <div className="left">
                  <div className="left__image">
                      <img className="image" src={photo} alt="" />
                  </div>
              </div>
              <div className="right">
                  <div className="right-header">
                      <div className="right-header__icon" />
                      <div className="right-header__description">
                          <p>Универсальный сетевой контроллер расширения EP-2000</p>
                          {turnstile.info === false ?
                              <div onClick={this.handleToggleMainInfo} className="right-header__description-toggle">ХАРАКТЕРИСТИКИ</div> :
                              <div onClick={this.handleToggleMainInfo} className="right-header__description-toggle">ПОКАЗАТЬ ОПИСАНИЕ</div>
                          }
                      </div>
                      <div onClick={this.handleCloseModal} className="right-header__close" />
                  </div>
                  <div className="right-main">
                      <div className="right-main__info">
                          <p>
                            Модуль расширения “EP-2000” предназначен для расширения
                            функционала турникетов CARDDEX.
                          </p>
                          <strong>Данный модуль оснащен интерфейсами:</strong>
                          <ul>
                              <li>Ethernet;</li>
                              <li>RS-485;</li>
                              <li>UART;</li>
                              <li>I2C.</li>
                          </ul>
                          <p>
                            Также оснащен дополнительным выходом для подключения различных
                            исполнительных устройств. Встроенное ПО СКУД “CARDDEX IMS/AR” с
                            функцией “Учет рабочего времени” избавляет от необходимости
                            использовать внешние серверы программного обеспечения.
                          </p>
                          <strong>
                            Широкий набор встроенных каналов подключения позволяет
                            обеспечить:
                          </strong>
                          <ul>
                              <li>
                                одновременную работу с внешними считывателями бесконтактных
                                карт, биометрическими сканерами отпечатков пальцев или
                                универсальным 2D сканером QR-кодов;
                              </li>
                              <li>
                                подключение до 32 дверных контроллеров CARDDEX по “общей шине”
                                RS-485;
                              </li>
                              <li>
                                подключение секции “Антипаника” с электромагнитным замком.
                              </li>
                          </ul>
                          <strong>
                            Энергонезависимая память контроллера позволяет хранить:
                          </strong>
                          <ul>
                              <li>50 000 бесконтактных ключей;</li>
                              <li>500 отпечатков пальцев;</li>
                              <li>5 000 QR-кодов;</li>
                              <li>250 000 событий;</li>
                          </ul>
                      </div>
                  </div>
                  <div className="right-footer">
                      <div className="right-footer__price">13123 Р</div>
                      <div className="right-footer__btn">Закрыть</div>
                  </div>
              </div>
          </section>
      );
  }
}
// @ts-ignore
Popup.propTypes = {
    fetchDataTurnstile: PropTypes.func,
    togglePopupWindowTurnstile: PropTypes.func.isRequired,
    togglePopupWindowMainInfoTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object
};
// @ts-ignore
const mapStateToProps = state => ({
    data: state
});
export default connect(
    mapStateToProps,
    {
        togglePopupWindowTurnstile,
        togglePopupWindowMainInfoTurnstile
    }
)(Popup);
