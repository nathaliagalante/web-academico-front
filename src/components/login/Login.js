//rface to generate
import React, { useState } from 'react'
import '../form/Form.css';

import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

const Login = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState({});
    let history = useHistory();
    
    const handleSubmit = async e => {
        e.preventDefault(); //nao queremos o comportamento default que é ao clicar ele fazer o submit por conta propria
        console.log('submit feito')
    
        const user = {
            login, 
            senha
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };
        
        const url = window.servidor + '/login';
        await fetch(url, requestOptions)
            .then(res => {
                res.json();
                console.log(res.data)
                setUsuario(res.data)
            })
            .then(localStorage.setItem('usuario', usuario))
            .then(history.push("/home"))
            .catch(erro => console.log(erro));
    };

    return (
        <>
            <form className="form display-flex-basics" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <div className="mb-3">
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Login" type="text" className="form-control" id="login" value={login} onChange={({ target }) => setLogin(target.value)} />
                    </div>
                    {/* {errors.login && <p className="alert alert-danger">{errors.login}</p>} */}

                    <div className="mb-3">
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Senha" type="password" className="form-control" id="senha" value={senha} onChange={({ target }) => setSenha(target.value)} />
                    </div>
                    {/* {errors.senha && <p className="alert alert-danger">{errors.senha}</p>} */}
                </div>

                <button type="submit" className="btn form-input-btn mt-2 mb-1">Entrar</button>
                
            </form>
        </>

    )

}

export default Login