import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';

import { Navigation, Register, LogIn, FaceRecognition, Rank, ImageLinkForm, SecureRoute } from 'components';

import { UserContext, ImageContext } from 'context';
import { useEntries, useField, useImage } from 'hooks';

import { particlesOptions } from 'config/particles.config';

import './App.css';

function App() {
  const { user } = useContext(UserContext);
  const { setBoxes } = useContext(ImageContext);
  const { fetchImage } = useImage();
  const inputField = useField({ type: 'text' });

  useEntries();

  const onImageSubmit = async () => {
    fetchImage(inputField.value);
  };

  useEffect(() => {
    setBoxes([]);
  }, [inputField.value]);

  return (
    <Router>
      <div className='app'>
        <Particles className='particles' params={particlesOptions}></Particles>
        <Navigation />

        {!user ? (
          <>
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/register' component={Register} />
            <Route
              exact
              path='/*'
              render={() => {
                return <Redirect to='/login' />;
              }}
            />
          </>
        ) : (
          <>
            <SecureRoute>
              <Rank />
              <ImageLinkForm onImageSubmit={onImageSubmit} inputField={inputField} />
              <FaceRecognition imageUrl={inputField.value} />
            </SecureRoute>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
