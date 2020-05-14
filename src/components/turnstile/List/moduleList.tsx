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
import './moduleList.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleList
 */
interface ModuleListProps {
    readonly data: any,
    readonly fetchDataTurnstile: () => void
}

class ModuleList extends React.PureComponent<ModuleListProps> {
    
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
                <p className="list__description">Состав модели:</p>
                {turnstile.data.page_view.model_module_list.map((index: any) => (
                    <div className="list__options" key={index.index}>{index.caption}</div>
                ))}
            </section>
        );
    }
}

const mapStateToProps = (state: ConfiguratorState) => ({
    data: state
});

export default connect<{}, {}, ModuleListProps>(
    mapStateToProps,
    {
        fetchDataTurnstile
    }
)(ModuleList);
