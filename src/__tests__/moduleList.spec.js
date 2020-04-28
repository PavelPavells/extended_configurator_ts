/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleList from '../components/turnstile/List/moduleList';

describe('Компонент moduleList инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleList = shallow(<moduleList {...props} />);

    it('Первая отрисовка компонента moduleList', () => {
        expect(moduleList.find('section.list')).toHaveLength(0);
    });

    it('Компонент moduleList загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleList = shallow(<moduleList {...nextProps} />);

        expect(moduleList.find('div')).toHaveLength(0);
    });

    it('Компонент moduleList загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleList = shallow(<moduleList {...nextProps} />);

        expect(moduleList.find('Loader')).toHaveLength(0);
    });
});
