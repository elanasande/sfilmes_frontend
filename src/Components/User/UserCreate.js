import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { REGISTER_USER } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const UserCreate = () => {
  const email = useForm();
  const password = useForm();
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      const { url, options } = REGISTER_USER({
        email: email.value,
        password: password.value,
      });

      const { response } = await request(url, options);
      Promise.reject();
      if (response.ok) console.log('ok');
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Input id="email" label="E-mail" type="text" {...email}></Input>
        <Input id="password" label="Senha" type="text" {...password}></Input>
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </div>
  );
};

export default UserCreate;
