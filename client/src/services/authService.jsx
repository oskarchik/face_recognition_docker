import axios from 'axios';

const login = async ({ userEmail, userPassword }) => {
  const baseUrl = 'http://localhost:3600/signin';
  const email = userEmail.value;
  const password = userPassword.value;
  try {
    const response = await axios.post(
      baseUrl,
      { email, password },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
    if (response.status >= 400) {
      return response;
    }
  } catch (error) {
    return error.response;
  }
};

const register = async ({ userName, userEmail, userPassword }) => {
  const baseUrl = 'http://localhost:3600/register';
  const body = { name: userName.value, email: userEmail.value, password: userPassword.value };
  try {
    const response = await axios.post(baseUrl, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      return response.data;
    }
    if (response.status >= 400) {
      return response;
    }
  } catch (error) {
    return error.response;
  }
};

const logOut = async () => {
  try {
    const baseUrl = 'http://localhost:3600/logout';
    const response = await axios.post(
      baseUrl,
      {},
      {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

const checkSession = async () => {
  try {
    const response = await axios.get('http://localhost:3600/check-session', {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    return error.response;
  }
};
export default { login, register, logOut, checkSession };
