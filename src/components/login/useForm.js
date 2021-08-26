import {useState, useEffect} from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        login: '',
        senha: ''
    });

    const [errors, setErrors] = useState({
    });

    const [isSubmitting, setisSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault(); //nao queremos o comportamento default que é ao clicar ele fazer o submit por conta propria

        setErrors(validate(values));
        setisSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    });

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;