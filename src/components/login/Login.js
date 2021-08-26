//rface to generate
import React from 'react'
import '../form/Form.css';
import useForm from './useForm';
import validate from '../form/validateInfo';

const Login = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
        <div className="form-content-left display-flex-basics">

            <form className="form display-flex-basics" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <h1>Entrar</h1>
                </div>

                <div className="form-inputs">
                    <div className="mb-3">
                        <label htmlFor="login" className="form-label">Login</label>
                        <input type="text" className="form-control" id="login" name="login" value={values.login} onChange={handleChange} />
                    </div>
                    {errors.login && <p className="alert alert-danger">{errors.login}</p>}

                    <div className="mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="senha" name="senha" value={values.senha} onChange={handleChange} />
                    </div>
                    {errors.senha && <p className="alert alert-danger">{errors.senha}</p>}
                </div>

                <button type="submit" className="btn form-input-btn mt-2 mb-1">Entrar</button>
                
            </form>
        </div>
    )
}

export default Login
