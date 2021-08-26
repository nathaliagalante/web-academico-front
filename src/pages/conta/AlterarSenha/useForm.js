import { useState } from "react";

const useForm = () => {
    const [values, setValues] = useState({
        senhaAtual: '',
        senhaNova: '',
        senhaConfirmada: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const dados = {
            ...values
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(dados)
        };

        const url = window.servidor + '/alunos/alterarSenha/1';
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(dados => {
                const {key, value} = Object.entries(dados);
                setValues({
                    ...values,
                    [key]: value
                })
            })
            .catch(erro => console.log(erro));
    };

    return { handleChange, values, handleSubmit };
}

export default useForm;