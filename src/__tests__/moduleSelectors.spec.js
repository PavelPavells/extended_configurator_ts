/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import moduleSelectors from '../components/turnstile/Selectors/moduleSelectors';
import moduleSelectorEP from '../components/turnstile/Selectors/selectors/selectorEP/selectorEP';
import moduleSelectorEMMarin from '../components/turnstile/Selectors/selectors/selectorEMMarin/selectorEMMarin';
import moduleSelectorMifire from '../components/turnstile/Selectors/selectors/selectorMifire/selectorMifire';
import moduleSelectorBiometry from '../components/turnstile/Selectors/selectors/selectorBiometry/selectorBiometry';
import moduleSelectorInfoTime from '../components/turnstile/Selectors/selectors/selectorInfoTime/selectorInfoTime';
import moduleSelectorControl2D from '../components/turnstile/Selectors/selectors/selectorControl2D/selectorControl2D';
import moduleSelectorGuest2D from '../components/turnstile/Selectors/selectors/selectorGuest2D/selectorGuest2D';
import moduleSelectorSteelCase from '../components/turnstile/Selectors/selectors/selectorSteelCase/selectorSteelCase';

/**
 *  Модуль обертка для селекторов
 */
describe('Компонент moduleSelectors инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleSelectors = shallow(<moduleSelectors {...props} />);

    it('Первая отрисовка компонента moduleSelectors', () => {
        expect(moduleSelectors.find('section.selectors')).toHaveLength(0);
    });

    it('Компонент moduleSelectors загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleSelectors = shallow(<moduleSelectors {...nextProps} />);

        expect(moduleSelectors.find('div')).toHaveLength(0);
    });

    it('Компонент moduleBasket загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleSelectors = shallow(<moduleSelectors {...nextProps} />);

        expect(moduleSelectors.find('Loader')).toHaveLength(0);
    });
});

/**
 *  Модуль обертка для селектора EP-2000
 */
describe('Компонент moduleSelectorEP инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleSelectorEP = shallow(<moduleSelectorEP {...props} />);

    it('Первая отрисовка компонента moduleSelectorEP', () => {
        expect(moduleSelectorEP.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorEP загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleSelectorEP = shallow(<moduleSelectorEP {...nextProps} />);

        expect(moduleSelectorEP.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorEP загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleSelectorEP = shallow(<moduleSelectorEP {...nextProps} />);

        expect(moduleSelectorEP.find('Loader')).toHaveLength(0);
    });
});

/**
 *  Модуль обертка для селектора moduleSelectorEMMarin
 */
describe('Компонент moduleSelectorEMMarin инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleSelectorEMMarin = shallow(<moduleSelectorEMMarin {...props} />);

    it('Первая отрисовка компонента moduleSelectorEMMarin', () => {
        expect(moduleSelectorEMMarin.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorEMMarin загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleSelectorEMMarin = shallow(<moduleSelectorEMMarin {...nextProps} />);

        expect(moduleSelectorEMMarin.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorEMMarin загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleSelectorEMMarin = shallow(<moduleSelectorEMMarin {...nextProps} />);

        expect(moduleSelectorEMMarin.find('Loader')).toHaveLength(0);
    });
});

/**
 *  Модуль обертка для селектора moduleSelectorMifire
 */
describe('Компонент moduleSelectorMifire инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleSelectorMifire = shallow(<moduleSelectorMifire {...props} />);

    it('Первая отрисовка компонента moduleSelectorMifire', () => {
        expect(moduleSelectorMifire.find('div')).toHaveLength(0);
    });

    it('Компонент moduleBasket moduleSelectorMifire', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleSelectorMifire = shallow(<moduleSelectorMifire {...nextProps} />);

        expect(moduleSelectorMifire.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorMifire загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleSelectorMifire = shallow(<moduleSelectorMifire {...nextProps} />);

        expect(moduleSelectorMifire.find('Loader')).toHaveLength(0);
    });
});

/**
 *  Модуль обертка для селектора moduleSelectorBiometry
 */
describe('Компонент moduleSelectorBiometry инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleSelectorBiometry = shallow(<moduleSelectorBiometry {...props} />);

    it('Первая отрисовка компонента moduleSelectorBiometry', () => {
        expect(moduleSelectorBiometry.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorBiometry загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleSelectorBiometry = shallow(<moduleSelectorBiometry {...nextProps} />);

        expect(moduleSelectorBiometry.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorBiometry загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleSelectorBiometry = shallow(<moduleSelectorBiometry {...nextProps} />);

        expect(moduleSelectorBiometry.find('Loader')).toHaveLength(0);
    });
});

/**
 *  Модуль обертка для селектора moduleSelectorInfoTime
 */
describe('Компонент moduleSelectorInfoTime инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleSelectorInfoTime = shallow(<moduleSelectorInfoTime {...props} />);

    it('Первая отрисовка компонента moduleSelectorInfoTime', () => {
        expect(moduleSelectorInfoTime.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorInfoTime загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleSelectorInfoTime = shallow(<moduleSelectorInfoTime {...nextProps} />);

        expect(moduleSelectorInfoTime.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorInfoTime загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleSelectorInfoTime = shallow(<moduleSelectorInfoTime {...nextProps} />);

        expect(moduleSelectorInfoTime.find('Loader')).toHaveLength(0);
    });
});

/**
 *  Модуль обертка для селектора moduleSelectorControl2D
 */
describe('Компонент moduleSelectorControl2D инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleSelectorControl2D = shallow(<modulemoduleSelectorControl2DBasket {...props} />);

    it('Первая отрисовка компонента moduleSelectorControl2D', () => {
        expect(moduleSelectorControl2D.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorControl2D загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleSelectorControl2D = shallow(<moduleSelectorControl2D {...nextProps} />);

        expect(moduleSelectorControl2D.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorControl2D загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleSelectorControl2D = shallow(<moduleSelectorControl2D {...nextProps} />);

        expect(moduleSelectorControl2D.find('Loader')).toHaveLength(0);
    });
});

/**
 *  Модуль обертка для селектора moduleSelectorGuest2D
 */
describe('Компонент moduleSelectorGuest2D инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleSelectorGuest2D = shallow(<moduleSelectorGuest2D {...props} />);

    it('Первая отрисовка компонента moduleSelectorGuest2D', () => {
        expect(moduleSelectorGuest2D.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorGuest2D загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleSelectorGuest2D = shallow(<moduleSelectorGuest2D {...nextProps} />);

        expect(moduleSelectorGuest2D.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorGuest2D загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleSelectorGuest2D = shallow(<moduleSelectorGuest2D {...nextProps} />);

        expect(moduleSelectorGuest2D.find('Loader')).toHaveLength(0);
    });
});

/**
 *  Модуль обертка для селектора moduleSelectorSteelCase
 */
describe('Компонент moduleSelectorSteelCase инициализирован', () => {
    const props = {
        data: {
            turnsile: [],
            isFetching: false,
            errorMessage: ''
        }
    };
    const moduleSelectorSteelCase = shallow(<moduleSelectorSteelCase {...props} />);

    it('Первая отрисовка компонента moduleSelectorSteelCase', () => {
        expect(moduleSelectorSteelCase.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorSteelCase загружается', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: true
            }
        };
        const moduleSelectorSteelCase = shallow(<moduleSelectorSteelCase {...nextProps} />);

        expect(moduleSelectorSteelCase.find('div')).toHaveLength(0);
    });

    it('Компонент moduleSelectorSteelCase загрузился', () => {
        const nextProps = {
            ...props,
            data: {
                ...props.data,
                isFetching: false
            }
        };
        const moduleSelectorSteelCase = shallow(<moduleSelectorSteelCase {...nextProps} />);

        expect(moduleSelectorSteelCase.find('Loader')).toHaveLength(0);
    });
});
