import React from 'react';
import Close from '../../../images/icon/close-modal-blue.svg';
import './ModalOrderProduct.scss';

class ModalOrderProduct extends React.Component {
    constructor(...props: Object[]) {
        super(props);

        this.state = {
            order: null
        }
    }

    public componentDidMount() {
        console.log('DID MOUNT');
    }

    public render() {
        return (
            <section className="order">
                <div className="order__window">
                    <div className="order__header">
                        <span className="text">Оформить заявку на модель</span>
                        <img src={Close} alt="Close" className="close"/>
                    </div>
                    <div className="order__main">MAIN</div>
                    <div className="order__footer">
                        <button type="submit" className="button__order">Оформить</button>
                        <p className="text">Нажимая на кнопку «Оформить»,<br/><a href='#'>я даю согласие на обработку<br/>персональных данных</a></p>
                    </div>
                </div>
            </section>
        )
    }
} 

export default ModalOrderProduct;
