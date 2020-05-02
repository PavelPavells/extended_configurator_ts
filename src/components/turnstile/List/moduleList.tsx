/**
 * Импорт зависимостей из NPM
 */
import React from 'react';
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
import './moduleList.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleList
 */
interface ModuleListProps {
    data: any,
    fetchDataTurnstile: () => void
}

class ModuleList extends React.PureComponent<ModuleListProps> {
    static propTypes: { 
        fetchDataTurnstile: PropTypes.Validator<(...args: any[]) => any>;
        data: PropTypes.Validator<object>;
        turnstile: PropTypes.Requireable<object>;
        isFetching: PropTypes.Requireable<boolean>;
    };
    
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
             *  Модуль Список
             */
            <section className="list">
                <p className="list-description">Состав модели:</p>
                {turnstile.data.page_view.model_module_list.map((index: { index: string | number | undefined; caption: React.ReactNode; }) => (
                    <div className="list-options" key={index.index}>{index.caption}</div>
                ))}
            </section>
        );
    }
}

ModuleList.propTypes = {
    fetchDataTurnstile: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    turnstile: PropTypes.object,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});
export default connect(mapStateToProps, { fetchDataTurnstile })(ModuleList);
