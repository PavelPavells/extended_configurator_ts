/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleEquipment from '../components/turnstile/Equipment/moduleEquipment';
import equipmentModal from '../components/turnstile/Equipment/EquipmentModal/equipmentModal';

describe('Компонент moduleEquipment инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleEquipment = shallow(<moduleEquipment {...props} />);

    it('Первая отрисовка компонента moduleEquipment', () => {
        expect(moduleEquipment.find('section.equipment')).toHaveLength(0);
    });

    it('Компонент moduleEquipment загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleEquipment = shallow(<moduleEquipment {...nextProps} />);

        expect(moduleEquipment.find('div')).toHaveLength(0);
    });

    it('Компонент moduleEquipment загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleEquipment = shallow(<moduleEquipment {...nextProps} />);

        expect(moduleEquipment.find('Loader')).toHaveLength(0);
    });
});


/**
 * Тестирование Модального окна в модуле moduleEquipment
 */

describe('Компонент equipmentModal инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const equipmentModal = shallow(<equipmentModal {...props} />);

    it('Первая отрисовка компонента equipmentModal', () => {
        expect(equipmentModal.find('section.modal')).toHaveLength(0);
    });

    it('Компонент equipmentModal загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const equipmentModal = shallow(<equipmentModal {...nextProps} />);

        expect(equipmentModal.find('div')).toHaveLength(0);
    });

    it('Компонент equipmentModal загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const equipmentModal = shallow(<equipmentModal {...nextProps} />);

        expect(equipmentModal.find('Loader')).toHaveLength(0);
    });
});
