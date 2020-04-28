/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleMain from '../components/main/Main';

describe('Компонент moduleMain инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleMain = shallow(<moduleMain {...props} />);

    it('Первая отрисовка компонента moduleMain', () => {
        expect(moduleMain.find('section.main')).toHaveLength(0);
    });

    it('Компонент moduleMain загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleMain = shallow(<moduleMain {...nextProps} />);

        expect(moduleMain.find('div')).toHaveLength(0);
    });

    it('Компонент moduleMain загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleMain = shallow(<moduleMain {...nextProps} />);

        expect(moduleMain.find('Loader')).toHaveLength(0);
    });
});
