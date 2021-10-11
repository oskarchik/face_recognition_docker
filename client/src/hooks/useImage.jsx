import { useContext, useState } from 'react';
import { ImageContext } from 'context';
import { fetchImg } from 'services/imageFetchService';

const useImageHook = () => {
  const { setBoxes } = useContext(ImageContext);
  const [fetching, setFetching] = useState(false);

  const displayFaceBox = (boxes) => {
    setBoxes(boxes);
  };

  const fetchImage = async (urlImage) => {
    setFetching(!fetching);
    try {
      const faces = await fetchImg(urlImage);

      if (!faces) {
      }

      setBoxes(faces);
    } catch (error) {
      return error;
    }
  };

  return {
    displayFaceBox,
    fetchImage,
  };
};

export default useImageHook;
