import { useState } from "react";

const useForm = () => {
    const [values, setValues] = useState({
        email: '',
        telefone: '',
        celular: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        cep: ''
    });

    const onHandleChange = e => {
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
        };

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(dados)
        };

        const url = window.servidor + '/alunos/atualizarCadastro/1';
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

    // useEffect(() => {
    //     const url = window.servidor + '/alunos/1';

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(dados => {
    //             emailRef.current = dados.email;
    //         })
    // }, [])

    return { onHandleChange, values, handleSubmit };
}

export default useForm;