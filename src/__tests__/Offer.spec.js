/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleOffer from '../components/turnstile/Offer/Offer';

describe('Компонент moduleOffer инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleOffer = shallow(<moduleOffer {...props} />);

    it('Первая отрисовка компонента moduleOffer', () => {
        expect(moduleOffer.find('section.offer')).toHaveLength(0);
    });

    it('Компонент moduleOffer загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleOffer = shallow(<moduleOffer {...nextProps} />);

        expect(moduleOffer.find('div')).toHaveLength(0);
    });

    it('Компонент moduleOffer загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleOffer = shallow(<moduleOffer {...nextProps} />);

        expect(moduleOffer.find('Loader')).toHaveLength(0);
    });
});
