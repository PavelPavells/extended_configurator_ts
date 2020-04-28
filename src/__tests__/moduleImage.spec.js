/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleImage from '../components/turnstile/Image/moduleImage';

describe('Компонент moduleImage инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleImage = shallow(<moduleImage {...props} />);

    it('Первая отрисовка компонента moduleImage', () => {
        expect(moduleImage.find('section.image')).toHaveLength(0);
    });

    it('Компонент moduleImage загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleImage = shallow(<moduleImage {...nextProps} />);

        expect(moduleImage.find('div')).toHaveLength(0);
    });

    it('Компонент moduleImage загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleImage = shallow(<moduleImage {...nextProps} />);

        expect(moduleImage.find('Loader')).toHaveLength(0);
    });
});
