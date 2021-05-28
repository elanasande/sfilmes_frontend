import React from 'react';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';

const Movies = () => {
  return (
    <div>
      <Button>Listar todos os Filmes</Button>
      <form action="">
        <Input id="list" label="ID do Usuário" type="text" />
        <Button>Buscar Filme</Button>
      </form>
      <Button>
        <Link className="link" to="/filmes/criar">
          Cadastrar Filme
        </Link>
      </Button>
      <Button>
        <Link className="link" to="/filmes/atualizar">
          Atualizar Filme
        </Link>
      </Button>
      <Button>
        <Link className="link" to="/filmes/deletar">
          Deletar Filme
        </Link>
      </Button>
    </div>
  );
};

export default Movies;
