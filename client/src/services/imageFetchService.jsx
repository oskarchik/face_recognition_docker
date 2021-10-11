import { Clarifai, clarifaiApp } from 'config/clarifai.config';
import calculateFaceLocation from './faceLocationService';

export const fetchImg = async (urlImage) => {
  const response = await clarifaiApp.models.predict(Clarifai.FACE_DETECT_MODEL, urlImage);

  if (response) {
    const faces = await calculateFaceLocation(response);

    return faces;
  }
};
