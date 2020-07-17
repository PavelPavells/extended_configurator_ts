/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleLayout from '../containers/Layouts';

describe('Компонент moduleLayout инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleLayout = shallow(<moduleLayout {...props} />);

    it('Первая отрисовка компонента moduleLayout', () => {
        expect(moduleLayout.find('div.components')).toHaveLength(0);
    });

    it('Компонент moduleLayout загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleLayout = shallow(<moduleLayout {...nextProps} />);

        expect(moduleLayout.find('div')).toHaveLength(0);
    });

    it('Компонент moduleLayout загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleLayout = shallow(<moduleLayout {...nextProps} />);

        expect(moduleLayout.find('Loader')).toHaveLength(0);
    });
});
