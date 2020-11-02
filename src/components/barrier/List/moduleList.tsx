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
    readonly fetchDataBarrier: () => void
}

class ModuleList extends React.PureComponent<ModuleListProps> {
    
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
        const { barrier, isFetching } = this.props.data;

        if (barrier.data.length === 0 && !isFetching) {
            return <Loader />;
        }
        return (
            /**
             *  Модуль Список
             */
            <section className="list">
                <p className="list__description">Состав модели:</p>
                {barrier.data.page_view.model_module_list.map((index: any) => (
                    <div className="list__options" key={index.index}>{index.caption}</div>
                ))}
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
)(ModuleList);
