/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleButtons from '../components/turnstile/Buttons/moduleButtons';

describe('Компонент moduleButtons инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleBasket = shallow(<moduleButtons {...props} />);

    it('Первая отрисовка компонента moduleButtons', () => {
        expect(moduleBasket.find('section.buttons')).toHaveLength(0);
    });

    it('Компонент moduleButtons загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleButtons = shallow(<moduleButtons {...nextProps} />);

        expect(moduleButtons.find('div')).toHaveLength(0);
    });

    it('Компонент moduleButtons загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleButtons = shallow(<moduleButtons {...nextProps} />);

        expect(moduleButtons.find('Loader')).toHaveLength(0);
    });
});
