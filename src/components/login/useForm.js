import { useState } from 'react';

const useForm = () => {
    const [values, setValues] = useState({
        login: '',
        senha: ''
    });


    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return { handleChange, values };
}

export default useForm;