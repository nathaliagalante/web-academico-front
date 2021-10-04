import React from 'react';
import Login from '../login/Login';
import './Form.css';

const Form = () => {
    return (
        <>
            <div className="form-container display-flex-basics">
                    <div className="box__logo display-flex-basics">
                        <img className="logo" src="../img/logo-2.jpg" alt="Web Acadêmico Logo" />
                        <h1>Acesse a plataforma</h1>
                    </div>
                    <Login />
            </div>
        </>
    )
}

export default Form
