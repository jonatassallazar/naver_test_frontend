import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NaverForm from './NaverForm';
import store from '../store/store';
import { addNaver } from '../axios/instance';

const AddNaver = () => {
  let history = useHistory();

  const { dispatch } = useContext(store);

  return (
    <NaverForm
      onSubmit={(data) => {
        const result = addNaver(data);
        result
          .then(() => {
            history.push('/navers');
            dispatch({ type: 'ADD_NAVER' });
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    />
  );
};

export default AddNaver;
