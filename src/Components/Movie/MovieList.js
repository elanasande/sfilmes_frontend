import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import UserCard from '../User/UserCard';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
const MovieList = () => {
  const [users, setUsers] = React.useState('');
  const [user, setUser] = React.useState('');

  const list = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://sfilmes-backend.herokuapp.com/filme', {
      method: 'GET',
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers({ users: data });
      })
      .catch(console.log);
    console.log(users);
  }

  function handleUser(event) {
    if (list.validate()) {
      fetch('https://sfilmes-backend.herokuapp.com/filme' + list.value, {
        method: 'GET',
        headers: {},
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setUser({ user: data.data });
        })
        .catch(console.log);
    }
  }
  if (users) return <UserCard users={users} map={true} />;
  else if (user) return <UserCard user={user} map={false} />;
  return (
    <div>
    <Button onSubmit={handleSubmit}>Listar todos os Filmes</Button>
    <form action="" onSubmit={handleUser}>
        <Input id="list" label="ID do Filme" type="text" {...list} />
        <Button onClick={handleUser}>Buscar Filme</Button>
      </form>
    <Button>
      <Link className="link" to="/filme/criar">
        Cadastrar Filme
      </Link>
    </Button>
    <Button>
      <Link className="link" to="/filme/atualizar">
        Atualizar Filme
      </Link>
    </Button>
    <Button>
      <Link className="link" to="/filme/deletar">
        Deletar Filme
      </Link>
    </Button>
  </div>
  )
};

export default MovieList;
