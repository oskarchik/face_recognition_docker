import { createContext, useState } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState('');
  const [boxes, setBoxes] = useState([]);
  return <ImageContext.Provider value={{ image, setImage, boxes, setBoxes }}>{children}</ImageContext.Provider>;
};

export default ImageContext;
