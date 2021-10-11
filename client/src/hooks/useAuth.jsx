import { useContext, useEffect, useState } from 'react';
import { UserContext, ImageContext } from 'context';
import { authService } from 'services';

const useAuth = () => {
  const { user, setUser } = useContext(UserContext);
  const { setBoxes } = useContext(ImageContext);
  const [errors, setErrors] = useState([]);

  const isLogged = async () => {
    try {
      const response = await authService.checkSession();

      if (response.status >= 400) {
        return response.data;
      }

      setUser(response.data);
    } catch (err) {
      return err;
    }
  };

  const signUp = async (userName, userEmail, userPassword) => {
    try {
      const response = await authService.register(userName, userEmail, userPassword);

      if (response.status >= 400) {
        setErrors([...errors, response.data]);
        return;
      }
      setUser(response);
    } catch (err) {
      return err;
    }
  };

  const login = async (userEmail, userPassword) => {
    try {
      const response = await authService.login(userEmail, userPassword);

      if (response.status >= 400) {
        setErrors([...errors, response.data]);
        return;
      }
      setUser(response);
    } catch (err) {
      return err;
    }
  };

  const logOut = async (email) => {
    try {
      const response = await authService.logOut(user.email);
      if (response.status === 200) {
        setUser(null);
        setBoxes([]);
      }
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    isLogged();
  }, []);
  useEffect(() => {
    if (errors.length) {
      setTimeout(() => {
        setErrors([]);
      }, 3000);
    }
  });

  return { user, signUp, login, logOut, errors, setErrors };
};

export default useAuth;
