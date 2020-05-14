/* eslint-disable max-len */
/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../store/store';

/**
 * Импорт экшенов
 */
import { fetchDataMain } from '../../actions/dataMainActions';

/**
 * Импорт фотографий
 */

// eslint-disable-next-line camelcase
import barrier_photo from '../../images/barrier_main.png';
// eslint-disable-next-line camelcase
import turnstile_photo from '../../images/turnstile_main.png';

/**
 * Импорт стилей
 */
import './Main.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента Main
 */
interface MainProps {
    readonly data: any,
    readonly main: any,
    readonly isFetching: boolean,
    fetchDataMain: () => void
}

class Main extends React.PureComponent<MainProps> {
    
    /**
     * Запрос данных
     */
    public componentDidMount () {
        this.props.fetchDataMain();
    }

    public render () {
        /**
        * Данные из Глобального Стора
        */
        const { main, isFetching } = this.props.data;

        if (main.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (
            /**
            * Компонент Main
            */
            <section className="main">
                <p className="main-header">
                    {main.data.page_view.caption}
                </p>
                <p className="main-description">
                    Выберите необходимую категорию оборудования
                </p>

                <div className="main-blocks">

                    {/**
                    * Шлагбаумы
                    */}
                    {main.data.page_view.device_buttons.slice(0, 1).map((index: { index: string | number | undefined; caption: React.ReactNode; }) => {
                        return (
                            <NavLink to="/barrier" key={index.index} className="main-block">
                                <div className="main-block__image">
                                    <img
                                        // eslint-disable-next-line camelcase
                                        src={barrier_photo}
                                        alt=""
                                    />
                                </div>
                                <div className="main-block__text">
                                    <p className="main-block__text-header">
                                        {index.caption}
                                    </p>
                                    <p className="main-block__text-description">
                                        Шлагбаумы и оборудование контроля проезда CARDDEX позволяют сформировать гибкие системы допуска,
                                        учета и контроля проезда автотранспортных средств с развитой инфраструктурой
                                    </p>
                                </div>
                            </NavLink>
                        );
                    })}

                    {/**
                    * Турникеты
                    */}
                    {main.data.page_view.device_buttons.slice(1, 2).map((index: any) => {
                        return (
                            <NavLink to="/turnstile" key={index.index} className="main-block">
                                <div className="main-block__image">
                                    <img
                                        // eslint-disable-next-line camelcase
                                        src={turnstile_photo}
                                        alt=""
                                    />
                                </div>
                                <div className="main-block__text">
                                    <p className="main-block__text-header">
                                        {index.caption}
                                    </p>
                                    <p className="main-block__text-description">
                                        Турникеты и электронные проходные CARDDEX предоставляют широкий выбор средств,
                                        методов и организации контроля доступа на объекты,
                                        требующие наличия пропускной системы и учета времени посещений
                                    </p>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

// const mapDispatchToProps = (dispatch: Dispatch<ConfiguratorState>) => ({
//     main: bindActionCreators(fetchDataMain, dispatch)
// })

export default connect<{}, {}, MainProps>(
    mapStateToProps,
    {
        fetchDataMain
    }
)(Main);
