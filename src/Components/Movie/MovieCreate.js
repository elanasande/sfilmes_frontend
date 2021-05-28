import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';

const MovieCreate = () => {
  {
    console.log('create filme');
  }
  const { loading, error, request } = useFetch();
  return (
    <div>
      <form action="">
        <Input id="name" label="Nome" type="text"></Input>
        <Input id="duracao" label="Duração" type="text"></Input>
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}
      </form>
    </div>
  );
};

export default MovieCreate;
