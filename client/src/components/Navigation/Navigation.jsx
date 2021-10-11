import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from 'context';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { logOut } = useAuth();

  return (
    <>
      {!user ? (
        <>
          <nav className='flex justify-end items-center'>
            <Link to='/login' className='text-4xl text-customColor underline cursor-pointer p-3'>
              Log In
            </Link>
            <Link to='/register' className='text-4xl text-customColor underline cursor-pointer p-3'>
              Register
            </Link>
          </nav>
        </>
      ) : (
        <>
          <nav className='flex justify-end items-center'>
            <Link
              to='/login'
              onClick={() => {
                logOut();
              }}
              className='text-4xl text-customColor underline cursor-pointer p-3'
            >
              Sign Out
            </Link>
          </nav>
        </>
      )}
    </>
  );
};

export default Navigation;
