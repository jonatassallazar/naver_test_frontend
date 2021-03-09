import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NaverForm from './NaverForm';
import API from '../axios/instance';
import { store } from '../App';

const AddNaver = () => {
  const { bearer } = useContext(store);

  let history = useHistory();

  return (
    <NaverForm
      onSubmit={(data) => {
        API({
          url: '/navers',
          method: 'post',
          headers: {
            Authorization: `Bearer ${bearer}`,
          },
          data,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        history.push('/navers');
      }}
    />
  );
};

export default AddNaver;
