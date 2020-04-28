/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleTurnstile from '../components/turnstile/Turnstile';

describe('Компонент moduleTurnstile инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleTurnstile = shallow(<moduleTurnstile {...props} />);

    it('Первая отрисовка компонента moduleTurnstile', () => {
        expect(moduleTurnstile.find('section.turnstile')).toHaveLength(0);
    });

    it('Компонент moduleTurnstile загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleTurnstile = shallow(<moduleTurnstile {...nextProps} />);

        expect(moduleTurnstile.find('div')).toHaveLength(0);
    });

    it('Компонент moduleTurnstile загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleTurnstile = shallow(<moduleTurnstile {...nextProps} />);

        expect(moduleTurnstile.find('Loader')).toHaveLength(0);
    });
});
