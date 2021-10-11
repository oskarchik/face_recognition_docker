import React, { useEffect } from 'react';
import { Error } from 'components';
import { useAuth, useField } from 'hooks';

const Register = () => {
  const userName = useField({ type: 'text' });
  const userEmail = useField({ type: 'email' });
  const userPassword = useField({ type: 'password' });
  const { signUp, errors } = useAuth();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      signUp({ userName, userEmail, userPassword });
      userName.reset();
      userEmail.reset();
      userPassword.reset();
    } catch (error) {
      return error;
    }
  };
  return (
    <>
      <div className='flex flex-col justify-center items-center rounded border border-customColor my-4 my-6 w-3/4 md:w-2/4 ml:w-1/4 shadow-md mx-auto'>
        <main className='p-4 text-customColor text-center'>
          <div>
            <form className='max-w-md'>
              <fieldset id='sign-up' className='border border-transparent mx-0 my-0'>
                <legend className='text-5xl font-semibold py-0 my-0'>Register</legend>
                <div className='mt-3'>
                  <label className='block font-semibold text-xl text-customColor leading-8 text-sm' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className=' rounded p-2 appearance-none border border-customColor bg-transparent hover:bg-black hover:text-customColor w-full'
                    type={userName.type}
                    name='name'
                    id='name'
                    value={userName.value}
                    onChange={userName.onChange}
                  />
                </div>
                <div className='my-3'>
                  <label className='block font-semibold text-xl leading-8' htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='p-2 appearance-none border border-customColor bg-transparent transform hover:bg-black hover:text-customColor w-full'
                    type={userEmail.type}
                    name='email'
                    id='email'
                    value={userEmail.value}
                    onChange={userEmail.onChange}
                    required
                  />
                </div>
                <div className='my-3'>
                  <label className='block font-semibold text-xl leading-8 hover:scale-125' htmlFor='password'>
                    Password
                  </label>
                  <input
                    className='rounded p-2 appearance-none border border-customColor bg-transparent hover:bg-black hover:text-customColor w-full'
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
                  onClick={handleRegister}
                  className='border px-3 py-2 my-3 appearance-none border border-customColor bg-transparent cursor-pointer font-semibold inline-block transition transform hover:scale-110'
                  type='button'
                  value='Register'
                />
              </div>
            </form>
          </div>
        </main>
      </div>
      {errors.length && <Error errors={errors} />}
    </>
  );
};

export default Register;
