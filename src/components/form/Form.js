import React, {useState} from 'react';
import Login from '../login/Login';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    // function login(){
    //     const dados = {
    //         login: '1701130010',
    //         senha: '1701130010'
    //     }

    //     const requestBody = {}
    // }

    return (
        <>
            <div className="form-container">
                {!isSubmitted ? (
                    <Login submitForm={submitForm} />
                ) : (
                <FormSuccess />
                )} 

                <div className="form-content-right display-flex-basics">
                    <img className="form-img" src="img/logo-femass.png" alt="logo" />
                    <h1>Web Acadêmico</h1>
                </div>
            </div>
        </>
    )
}

export default Form
