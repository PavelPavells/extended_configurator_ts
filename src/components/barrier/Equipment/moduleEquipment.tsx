/* eslint-disable max-len */
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
 * Импорт модулей
 */
import EquipmentModal from './EquipmentModal/equipmentModal';

/**
 * Импорт стилей
 */
import './moduleEquipment.scss';

/**
 * Импорт прелоадера
 */
import Loader from '../../../__utils__/Loader/Loader';

/**
 * Интерфейс компонента ModuleEquipment
 */
interface ModuleEquipmentProps {
    readonly data: any,
    readonly fetchDataBarrier: () => void,
}

interface ModuleEquipmentState {
    readonly listEquipmentOne: boolean,
    readonly listEquipmentTwo: boolean,
    readonly listEquipmentThree: boolean,
    readonly listEquipmentFour: boolean
}

class ModuleEquipment extends React.PureComponent<ModuleEquipmentProps, ModuleEquipmentState> {

    state: ModuleEquipmentState = {
        listEquipmentOne: false,
        listEquipmentTwo: false,
        listEquipmentThree: false,
        listEquipmentFour: false
    }

    /**
    * Запрос данных
    */
    //componentDidMount() {
    //    this.props.fetchDataTurnstile();
    //}

    /**
    * Хэндлер удаления количетсва товара
    */
    private handleMinusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

    /**
    * Хэндлер добавления количества товара
    */
    private handlePlusOptions = () => {
        //const { page_view } = this.props.data.turnstile.data;
        //console.log(page_view);
        // some code
    }

    /**
    * Хэндлер обработки запросов для блока 'Пульты Управления'
    */
    private handleChangeModalWindowOne = () => {
        this.setState({ listEquipmentOne: !this.state.listEquipmentOne });
        let text = document.getElementsByClassName('text-remote')[0];
        text.classList.toggle('toggle-text');

        let icon = document.getElementsByClassName('wrap__icon1')[0];
        icon.classList.toggle('wrap__icon1-hover');

        let arrow = document.getElementsByClassName('arrow-remote')[0];
        arrow.classList.toggle('wrap__arrow-hover');
    }

    /**
    * Хэндлер обработки запросов для блока 'Пульты Управления'
    */
    private handleChangeModalWindowTwo = () => {
        this.setState({ listEquipmentTwo: !this.state.listEquipmentTwo });
        let text = document.getElementsByClassName('text-slats')[0];
        text.classList.toggle('toggle-text');

        let icon = document.getElementsByClassName('wrap__icon2')[0];
        icon.classList.toggle('wrap__icon2-hover');

        let arrow = document.getElementsByClassName('arrow-slats')[0];
        arrow.classList.toggle('wrap__arrow-hover');
    }

    /**
    * Хэндлер обработки запросов для блока 'Преграждающие планки'
    */
    private handleChangeModalWindowThree = () => {
        this.setState({ listEquipmentThree: !this.state.listEquipmentThree });
        let text = document.getElementsByClassName('text-suply')[0];
        text.classList.toggle('toggle-text');

        let icon = document.getElementsByClassName('wrap__icon3')[0];
        icon.classList.toggle('wrap__icon3-hover');

        let arrow = document.getElementsByClassName('arrow-suply')[0];
        arrow.classList.toggle('wrap__arrow-hover');
    }

    /**
    * Хэндлер обработки запросов для блока 'Ограждения прохода и секции "Антипаника"'
    */
    private handleChangeModalWindowFour = () => {
        this.setState({ listEquipmentFour: !this.state.listEquipmentFour });
        let text = document.getElementsByClassName('text-awarding')[0];
        text.classList.toggle('toggle-text');

        let icon = document.getElementsByClassName('wrap__icon4')[0];
        icon.classList.toggle('wrap__icon4-hover');

        let arrow = document.getElementsByClassName('arrow-awarding')[0];
        arrow.classList.toggle('wrap__arrow-hover');
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
             *  Модуль Комплектующие
             */
            <section className="equipment">
                <p className="equipment__description">Дополнительное оборудование</p>
                <div className="equipment__list checklist">

                    {/**
                        * Блок 'Пульты Управления'
                     */}
                    <div className="checklist__block block">
                        <div onClick={this.handleChangeModalWindowOne} className="block__info info">
                            <div className="info__wrap wrap">
                                <div className="wrap__icon1" />
                                <div className="wrap__text text-remote">Пульты управления</div>
                                <div className="wrap__goods">{barrier.data.page_view.model_module_list.length}</div>
                                <div className="wrap__goods">товаров</div>
                            </div>
                            <div className="info__arrow arrow-remote" />
                        </div>
                        {this.state.listEquipmentOne ?
                            <div><EquipmentModal /></div> :
                            null
                        }
                    </div>

                    {/**
                        * Блок 'Преграждающие планки'
                     */}
                    <div className="checklist__block block">
                        <div onClick={this.handleChangeModalWindowTwo} className="block__info info">
                            <div className="info__wrap wrap">
                                <div className="wrap__icon2" />
                                <div className="wrap__text text-slats">Преграждающие планки</div>
                                <div className="wrap__goods">{barrier.data.page_view.model_module_list.length}</div>
                                <div className="wrap__goods">товаров</div>
                            </div>
                            <div className="info__arrow arrow-slats" />
                        </div>
                        {this.state.listEquipmentTwo ?
                            <div><EquipmentModal /></div> :
                            null
                        }
                    </div>

                    {/**
                        * Блок 'Блоки питания'
                     */}
                    <div className="checklist__block block">
                        <div onClick={this.handleChangeModalWindowThree} className="block__info info">
                            <div className="info__wrap wrap">
                                <div className="wrap__icon3" />
                                <div className="wrap__text text-suply">Блоки питания</div>
                                <div className="wrap__goods">{barrier.data.page_view.model_module_list.length}</div>
                                <div className="wrap__goods">товара</div>
                            </div>
                            <div className="info__arrow arrow-suply" />
                        </div>
                        {this.state.listEquipmentThree ?
                            <div><EquipmentModal /></div> :
                            null
                        }
                    </div>

                    {/**
                        * Блок 'Ограждения прохода и секции "Антипаника"'
                     */}
                    <div className="checklist__block block">
                        <div onClick={this.handleChangeModalWindowFour} className="block__info info">
                            <div className="info__wrap wrap">
                                <div className="wrap__icon4" />
                                <div className="wrap__text text-awarding">Ограждения прохода и секции «Антипаника»</div>
                                <div className="wrap__goods">{barrier.data.page_view.model_module_list.length}</div>
                                <div className="wrap__goods">товара</div>
                            </div>
                            <div className="info__arrow arrow-awarding" />
                        </div>
                        {this.state.listEquipmentFour ?
                            <div><EquipmentModal /></div> :
                            null
                        }
                    </div>

                </div>
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
)(ModuleEquipment);
