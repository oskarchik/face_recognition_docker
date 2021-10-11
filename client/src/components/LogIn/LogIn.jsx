import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Error } from 'components';
import { useAuth, useField } from 'hooks';

const LogIn = () => {
  const userEmail = useField({ type: 'email' });
  const userPassword = useField({ type: 'password' });
  const isMounted = useRef(null);
  const { login, errors } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      login({ userEmail, userPassword });
      userEmail.reset();
      userPassword.reset();
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    // executed when component mounted
    isMounted.current = true;
    return () => {
      // executed when unmount
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      <div className='flex flex-col justify-center items-center rounded border border-customColor my-4 my-6 w-3/4 md:w-2/4 ml:w-1/4 shadow-md mx-auto'>
        <main className='p-4 text-customColor text-center'>
          <div className='max-w-lg'>
            <fieldset id='sign:up' className='border border-transparent p-0 m-0'>
              <legend className='text-5xl font-semibold text-center py-0 my-0'>Log In</legend>
              <div className='mt-3'>
                <label className='block font-semibold  text-xl leading-8' htmlFor='email'>
                  Email
                </label>
                <input
                  className='rounded p-2 appearance-none border border-customColor bg-transparent hover:bg-black hover:text-white w-full'
                  type={userEmail.type}
                  name='email'
                  id='email'
                  value={userEmail.value}
                  onChange={userEmail.onChange}
                />
              </div>
              <div className='my-3'>
                <label className='block font-semibold text-xl leading-8' htmlFor='email'>
                  Password
                </label>
                <input
                  className='rounded p-2 appearance-none border border-customColor bg-transparent hover:bg-black hover:text-white w-full'
                  type={userPassword.type}
                  name='password'
                  id='password'
                  value={userPassword.value}
                  onChange={userPassword.onChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                onClick={handleLogin}
                className='border rounded px-3 py-2 my-3 appearance-none border border-customColor bg-transparent cursor-pointer font-semibold inline-block transition transform hover:scale-110'
                type='submit'
                value='Log in'
              />
            </div>
            <div className='leading-6 mt-3 cursor-pointer'>
              <Link to='/register'>Register</Link>
            </div>
          </div>
        </main>
      </div>
      {errors.length && <Error errors={errors} />}
    </>
  );
};

export default LogIn;
