import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'context';

const useField = ({ type }) => {
  const { user } = useContext(UserContext);

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };
  useEffect(() => {
    if (!user) {
      reset();
    }
  }, [user]);
  return { type, value, onChange, reset };
};

export default useField;
