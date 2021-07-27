export const API_URL = 'https://sfilmes-backend.herokuapp.com';

export function TOKEN_POST(email, password) {
  return {
    url: API_URL + '/auth',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    },
  };
}

export function USER_GET(id) {
  return {
    url: API_URL + '/usuario' + id,
    options: {
      method: 'GET',
      headers: {},
    },
  };
}

export function REGISTER(body) {
  return {
    url: API_URL + '/usuario',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function REGISTER_USER(body) {
  return {
    url: API_URL + '/usuario',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_DELETE(id) {
  return {
    url: `${API_URL}/usuario/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}

export function USER_UPDATE(id, name, job) {
  return {
    url: `${API_URL}/usuario/${id}`,
    options: {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: name,
        job: job,
      }),
    },
  };
}

export function REGISTER_MOVIE(body) {
  return {
    url: API_URL + '/filme',
    options: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: body.name,
        duracao: body.duracao,
      }),
    },
  };
}