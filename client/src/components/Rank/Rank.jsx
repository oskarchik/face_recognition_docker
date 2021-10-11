import React, { useContext } from 'react';
import { UserContext } from 'context';

const Rank = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='text-center center flex flex-col justify-center items-center mt-20 '>
      <div className='text-white text-2xl my-4 text-customColor text-center center '>{`${user.name}, your current entry count is...`}</div>
      <div className='text-white text-5xl my-4 text-customColor text-center center'>{user.entries}</div>
    </div>
  );
};

export default Rank;
