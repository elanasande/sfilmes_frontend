import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { REGISTER_MOVIE } from '../../api';

const MovieCreate = () => {
  const name = useForm();
  const duracao = useForm();
  
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (name.validate()) {
      const { url, options } = REGISTER_MOVIE({
        name: name.value,
        duracao: parseInt(duracao.value),
      });

      const { response } = await request(url, options);
      if (response.ok) console.log('ok');
    }
  }

  return (
    <section>
      <h1>Cadastro</h1>
      <form action="" onSubmit={handleSubmit}>
      <Input id="name" label="Nome" type="text" {...name}></Input>
        <Input id="duracao" label="Duração" type="text" {...duracao}></Input>
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default MovieCreate;
