/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import moduleBasket from '../components/turnstile/Basket/moduleBasket';

describe('Компонент moduleBasket инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleBasket = shallow(<moduleBasket {...props} />);

    it('Первая отрисовка компонента ModuleBasket', () => {
        expect(moduleBasket.find('section.basket')).toHaveLength(0);
    });

    it('Компонент moduleBasket загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleBasket = shallow(<moduleBasket {...nextProps} />);

        expect(moduleBasket.find('div')).toHaveLength(0);
    });

    it('Компонент moduleBasket загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleBasket = shallow(<moduleBasket {...nextProps} />);

        expect(moduleBasket.find('Loader')).toHaveLength(0);
    });
});
