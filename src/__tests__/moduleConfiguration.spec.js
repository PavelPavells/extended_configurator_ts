/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleConfiguration from '../components/turnstile/Configuration/moduleConfiguration';

describe('Компонент moduleConfiguration инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleConfiguration = shallow(<moduleConfiguration {...props} />);

    it('Первая отрисовка компонента moduleConfiguration', () => {
        expect(moduleConfiguration.find('section.configuration')).toHaveLength(0);
    });

    it('Компонент moduleConfiguration загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleConfiguration = shallow(<moduleConfiguration {...nextProps} />);

        expect(moduleConfiguration.find('div')).toHaveLength(0);
    });

    it('Компонент moduleConfiguration загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleConfiguration = shallow(<moduleConfiguration {...nextProps} />);

        expect(moduleConfiguration.find('Loader')).toHaveLength(0);
    });
});
