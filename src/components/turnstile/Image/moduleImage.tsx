/**
 * Импорт зависимостей из NPM
 */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
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
const Loader = lazy(() => import('../../../__utils__/Loader/Loader'));

/**
 * Интерфейс компонента ModuleImage
 */
interface ModuleImageProps {
    data: any,
    fetchDataTurnstile: () => void
}

class ModuleImage extends React.PureComponent<ModuleImageProps> {
    static propTypes: { 
        fetchDataTurnstile: PropTypes.Validator<(...args: any[]) => any>;
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>;
        isFetching: PropTypes.Requireable<boolean>;
    };
    /**
    * Запрос данных
    */
    componentDidMount () {
        this.props.fetchDataTurnstile();
    }
    render () {
        /**
        * Данные из Глобального Стора
        */
        const { turnstile, isFetching } = this.props.data;
        if (turnstile.data.length === 0 && !isFetching) {
            return <Suspense fallback={<div><Loader /></div>} />;
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

ModuleImage.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleImage);
