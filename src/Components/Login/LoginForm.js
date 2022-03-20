import React from 'react';
import { Link } from 'react-router-dom';
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
const LoginForm = () => {

	const username = useForm();
	const password = useForm();
	const {userLogin} = React.useContext(UserContext);

  async function handleSubmit(event){
		event.preventDefault();
		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value)
		}
  }

  return <section>
      <h1>Login</h1>
    <form action='' onSubmit={handleSubmit}>
      <Input label="Usuário" type="text" name="usuario" {...username} />
      <Input label="Senha" type="password" name="senha" {...password} />
        {/* <input type="text" value={username} onChange={({target}) => setUsername(target.value)} />
        <input type="password" value={password} onChange={({target}) => setPassword(target.value)} /> */}
        <Button >Entrar</Button>
      </form>
      <Link to="/login/criar" >Cadastro</Link>
    </section>;
};

export default LoginForm;
