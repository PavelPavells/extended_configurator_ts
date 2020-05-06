/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { ConfiguratorState } from '../../../store/store';

/**
 * Импорт экшенов
 */
import { fetchDataTurnstile } from '../../../actions/dataTurnstileActions';

/**
 * Импорт стилей
 */
import './moduleImage.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleImage
 */
interface ModuleImageProps {
    readonly data: any,
    readonly fetchDataTurnstile: () => void
}

class ModuleImage extends React.PureComponent<ModuleImageProps> {

    /**
    * Запрос данных
    */
    public componentDidMount () {
        this.props.fetchDataTurnstile();
    }
    public render () {
        /**
        * Данные из Глобального Стора
        */
        const { turnstile, isFetching } = this.props.data;
        if (turnstile.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (
            /**
             *  Модуль Изображение
             */
            <section className="image">
                <img
                    src={turnstile.data.page_view.model_main_photo}
                    className="image__turnstile"
                    alt=""
                />
            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect<{}, {}, ModuleImageProps>(mapStateToProps, { fetchDataTurnstile })(ModuleImage);
