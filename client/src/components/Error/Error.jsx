import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  const { errors } = props;
  return (
    <>
      {errors && (
        <div
          className='w-3/4 md:w-2/4 ml:w-1/4 flex mx-auto mt-18 bg-red-500 bg-opacity-30 border-red-900 border-t-4 rounded-b text-black px-4 py-3 shadow-md'
          role='alert'
        >
          <div className='flex'>
            <div className='py-1'>
              <svg className='fill-current h-7 w-7 text-white mr-4' xmlns='' viewBox='0 0 20 20'>
                <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
              </svg>
            </div>
            <div>
              <p className='font-bold text-white text-xl'>Ooops, something went wrong</p>
              {errors.map((error) => {
                return <p className='text-sm text-white text-lg'>{error.error}</p>;
              })}
              {errors.length && <p className='text-sm text-white text-lg'>Please, try again</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Error.propTypes = {
  errors: PropTypes.shape({ error: PropTypes.string, status: PropTypes.number }),
};
export default Error;
