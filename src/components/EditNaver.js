import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NaverForm from './NaverForm';
import { store } from '../App';
import API from '../axios/instance';

const EditNaver = (props) => {
  const { navers, setUpdated } = useContext(store);
  
  const naverSelected = navers.find((i) => i.id === props.match.params.id)

  console.log(naverSelected);

  let history = useHistory();

  return (
    <NaverForm naver={naverSelected} onSubmit={(data) => {
      API({
        url: `/navers/${naverSelected.id}`,
        method: 'put',
        data,
      })
        .then((res) => {
          setUpdated(false);
          console.log(res);
        })
        .catch((err) => console.log(err));
      history.push('/navers');
    }}/>
  );
};

export default EditNaver;