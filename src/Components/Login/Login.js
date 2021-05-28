import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext';
import Error from '../Helper/Error';

const Login = () => {
  const email = useForm('email');
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input id="email" label="E-mail" type="text" {...email}></Input>
        <Input
          id="password"
          label="Senha"
          type="password"
          {...password}
        ></Input>
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link to="/login/perdi">Perdeu a Senha?</Link>
      <h1>Cadastre-se</h1>
      <p>Ainda não é cadastrado? Cadastre-se no site.</p>

      <Button>
        <Link className="link" to="/login/criar">
          Cadastro
        </Link>
      </Button>
    </section>
  );
};

export default Login;
