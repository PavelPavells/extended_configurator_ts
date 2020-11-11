import React from 'react';
import './Switcher.scss';

interface SwitcherProps {
    children: any;
    className: string;
}

const Switcher: React.FC<SwitcherProps> = ({ children, className }) => {
    return (
        <section className={className}>
            {children}
        </section>
    )
}

export default Switcher;
