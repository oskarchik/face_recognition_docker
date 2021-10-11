import { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext, ImageContext } from 'context';

const useEntries = () => {
  const { user, setUser } = useContext(UserContext);
  const { boxes } = useContext(ImageContext);
  const baseUrl = 'http://localhost:3600/update-entries';
  const incrementCount = async () => {
    const { data } = await axios.put(baseUrl, user, {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    setUser(data);
  };

  useEffect(() => {
    if (Object.keys(boxes)?.length !== 0) {
      incrementCount();
    }
  }, [boxes]);
  return;
};

export default useEntries;
