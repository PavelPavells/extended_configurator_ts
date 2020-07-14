/**
 * ********** Импорт зависимостей **********
 */
import React, { SyntheticEvent } from "react";
import { connect, MapStateToProps } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { PersonalCabinet } from "../../../store/store";

/**
 * ********** Импорт экшенов **********
 */
import { logoutUser } from "../../../actions/authActions";

/**
 * ********** Импорт стилей **********
 */
import "./TopNav.scss";

/**
 * ********** Интерфейс пропсов компонента Login **********
 */
interface TopNavProps {
  node: any,
  logoutUser: () => void,
  sideNav: Element | null
}

/**
 * ********** Интерфейс локального стейта компонента Login **********
 */
interface TopNavState {
  dropdown: Boolean
}

class TopNav extends React.PureComponent<TopNavProps, TopNavState> {
  
  state: TopNavState = {
    dropdown: false
  };

  // public componentDidMount() {
  //   document.addEventListener("mousedown", this.handleClick, false);
  // };

  // public componentWillUnmount() {
  //   document.removeEventListener("mousedown", this.handleClick, false);
  // }

  private onLogoutClick = (event: SyntheticEvent) => {
    event.preventDefault();
    window.location.href = "/";
    //this.props.logoutUser();
  };
  private handleProfileClick = (event: SyntheticEvent) => {
    let arrow = document.getElementsByClassName("info-list__arrow")[0];
    arrow.classList.toggle("toggle-window");
    this.setState({ dropdown: !this.state.dropdown });
    //if (this.state.dropdown && !this.node.contains(event.target)) {
    // this.setState({ dropdown: !this.state.dropdown });
    //}
  };

  //private handleContactClick = () => {
  //  this.setState({ openContactUs: !this.state.openContactUs });
  //};

  // Show Side Nav
  private toggleMenu = () => {
    let sideNav: Element | any = document.querySelector(".right");
    sideNav.classList.toggle("invisible");
  };
  
  public render() {
    //const { name } = this.props.auth.user; // {/*company_inn*/}
    let partnerStatus = localStorage.getItem("partnerStatus");
    let contragentName = localStorage.getItem("contragentName");
    return (
      <nav className="nav">
        {/* ref={node => (this.node = node)} */}
        <div className="nav__left nav-left">
          <i
            onClick={this.toggleMenu}
            className="material-icons nav-left__hamburger"
          >
            menu
          </i>
          <div className="nav-left__logo"></div>
        </div>
        <div className="nav__right nav-right">
          <div className="nav-right__text right-text">
            Личный кабинет: <strong className="right-text__name">{contragentName}</strong>
          </div>
          <div className="nav-right__info right-info">
            <div className="right-info__bell bell">
              <div className="bell__icon notifications">
                <div className="notifications__number">5</div>
              </div>
            </div>
            <div className="profile">
              <div className="profile__status"></div>
            </div>
            <div className="right-info__list info-list">
              <div className="info-list__text">
                <div className="name">Иванов И.И.</div>
                <div className="role">Администратор</div>
              </div>
              <div onClick={this.handleProfileClick} className="info-list__arrow"></div>
            </div>
            {this.state.dropdown ? (
              <ul className="dropdown">
                <Link className="dropdown__item item" to="/account">
                  <div className="item__profile-icon"></div>
                  <div>Профиль пользователя</div>
                </Link>
                <Link className="dropdown__item item" to="/control">
                  <div className="item__settings-icon"></div>
                  <div>Настройки</div>
                </Link>
                <li
                  //@ts-ignore
                  onClick={this.handleContactClick}
                >
                </li>
                <div className="dropdown__logout" onClick={this.onLogoutClick}>Выйти</div>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state: PersonalCabinet) => ({
  topnav: state.topnav
});

export default connect<{}, {}, TopNavProps>(
  //@ts-ignore
  mapStateToProps,
  {
    logoutUser
  }
)(TopNav);

// export default connect<{}, {}, TopNavProps>(
//   //@ts-ignore
//   mapStateToProps,
//   {
//     logoutUser
//   }
//   //@ts-ignore
// )(withRouter(TopNav));