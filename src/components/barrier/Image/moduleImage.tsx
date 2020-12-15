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
import { fetchDataBarrier } from '../../../actions/BarrierActions/BarrierActions';

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
    readonly fetchDataBarrier: () => void
}

class ModuleImage extends React.PureComponent<ModuleImageProps> {

    /**
    * Запрос данных
    */
    public componentDidMount () {
        this.props.fetchDataBarrier();
    }
    public render () {
        /**
        * Данные из Глобального Стора
        */
        // const { barrier, isFetching } = this.props.data;
        // if (barrier.data.length === 0 && !isFetching) {
        //     return <Loader />;
        // }
        return (
            /**
             *  Модуль Изображение
             */
            <section className="image--barrier">
                <img
                    // src={barrier.data.page_view.model_main_photo}
                    className="image__barrier"
                    alt=""
                />
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
        fetchDataBarrier
    }
    // @ts-ignore
)(ModuleImage);
