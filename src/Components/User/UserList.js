import React from 'react';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';

const UserList = () => {
  const [users, setUsers] = React.useState('');
  const [user, setUser] = React.useState('');

  const list = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://sfilmes-backend.herokuapp.com/usuario', {
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
      fetch('https://sfilmes-backend.herokuapp.com/usuario' + list.value, {
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
      <Button onClick={handleSubmit}>Listar todos Usuários</Button>
      <form action="" onSubmit={handleUser}>
        <Input id="list" label="ID do Usuário" type="text" {...list} />
        <Button onClick={handleUser}>Buscar Usuário</Button>
      </form>
      <Button>
        <Link className="link" to="/user/criar">
          Cadastrar Usuário
        </Link>
      </Button>
      <Button>
        <Link className="link" to="/user/atualizar">
          Atualizar Usuário
        </Link>
      </Button>
      <Button>
        <Link className="link" to="/user/deletar">
          Deletar Usuário
        </Link>
      </Button>
    </div>
  );
};

export default UserList;
