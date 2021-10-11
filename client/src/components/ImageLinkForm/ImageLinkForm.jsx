import React from 'react';
import PropTypes from 'prop-types';

const ImageLinkForm = (props) => {
  const { onImageSubmit, inputField } = props;

  return (
    <div>
      <p className='text-2xl text-customColor text-center center'>
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <div className='center my-4'>
        <div className='center border border-customColor mx-auto p-4 rounded shadow-md w-11/12 sm:w-6/12 max-w-screen-md'>
          <input
            className='text-xl p-3 mr-2 block w-10/12 sm:w-2/3 rounded border border-customColor text-customColor bg-transparent'
            type={inputField.type}
            value={inputField.value}
            onChange={inputField.onChange}
          />
          <button
            className='inline-block text-customColor border border-customColor rounded text-xl py-3 px-2 ml-2 sm:w-1/3 transition transform hover:scale-110 cursor-pointer'
            type='submit'
            onClick={onImageSubmit}
          >
            Detect!
          </button>
        </div>
      </div>
    </div>
  );
};

ImageLinkForm.prototype = {
  onImageSubmit: PropTypes.func,
  inputField: PropTypes.objectOf({
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
};
export default ImageLinkForm;
