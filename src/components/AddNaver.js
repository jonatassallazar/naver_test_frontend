import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NaverForm from './NaverForm';
import API from '../axios/instance';
import { store } from '../App';

const AddNaver = () => {
  let history = useHistory();

  const { setUpdated } = useContext(store);

  return (
    <NaverForm
      onSubmit={(data) => {
        API({
          url: '/navers',
          method: 'post',
          data,
        })
          .then((res) => {
            setUpdated(false);
            console.log(res);
          })
          .catch((err) => console.log(err));
        history.push('/navers');
      }}
    />
  );
};

export default AddNaver;
