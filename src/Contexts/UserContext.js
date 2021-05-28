import React from 'react';
import { TOKEN_POST, USER_GET } from '../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    await setData(json.data);
    setLogin(true);
  }

  async function userLogin(email, password) {
    console.log(email);
    console.log(password);
    try {
      setError(null);
      setLoading(true);
      fetch('https://sfilmes-backend.herokuapp.com/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.localStorage.setItem('token', data.token);
          console.log(data);
        });
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
      if (localStorage.token) navigate('/user');
    }
  }
  const userLogout = React.useCallback(
    async function () {
      await setData(null);
      setError(null);
      setLoading(false);
      await setLogin(false);
      await window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, login, data, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
