import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { ImageContext } from 'context';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
  const { imageUrl } = props;

  const { boxes } = useContext(ImageContext);

  const focusElement = useRef(null);
  const focus = () => {
    focusElement.current.scrollIntoView();
  };
  return (
    <div className='center m-auto'>
      <div className='absolute mt-8'>
        {imageUrl && (
          <img
            id='inputImage'
            className='image'
            src={imageUrl}
            alt=''
            ref={focusElement}
            onLoad={focus}
            onError={() => "this.style.display='none'"}
          />
        )}
        {boxes &&
          boxes.map((box, index) => {
            return (
              <div
                key={index}
                className='bounding-box'
                style={{ top: box.top_row, right: box.right_col, bottom: box.bottom_row, left: box.left_col }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

FaceRecognition.prototype = {
  imageUrl: PropTypes.string,
};
export default FaceRecognition;
