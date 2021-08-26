export default function validateInfo(values){
    let errors = {}

    if(!values.login.trim()){
        errors.login = 'Insira o login'
    }

    if(!values.senha){
        errors.senha = 'Insira a senha'
    }else if(values.senha.length < 6) {
        errors.senha = 'Senha precisa ser acima de 5 caracteres';
    }

    return errors;

}