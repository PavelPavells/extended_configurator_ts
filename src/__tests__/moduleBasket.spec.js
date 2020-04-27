import React from 'react';
import { shallow } from 'enzyme';
import moduleBasket from '../components/turnstile/Basket/moduleBasket';
//import Loader from '../__utils__/Loader/Loader';

describe('Компонент moduleBasket инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleBasket = shallow(<moduleBasket {...props} />);

    it('Секция не отрендерилась', () => {
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

        expect(moduleBasket.find('div')).toHaveLength(1);
    });
});
