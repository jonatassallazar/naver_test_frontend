import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NaverForm from './NaverForm';
import store from '../store/store';
import { editNaver } from '../axios/instance';

const EditNaver = (props) => {
  const { state, dispatch } = useContext(store);

  const naverSelected = state.navers.find(
    (i) => i.id === props.match.params.id,
  );

  let history = useHistory();

  return (
    <NaverForm
      naver={naverSelected}
      onSubmit={(data) => {
        const result = editNaver(naverSelected.id, data);
        result
          .then(() => {
            history.push('/navers');
            dispatch({ type: 'EDIT_NAVER' });
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    />
  );
};

export default EditNaver;
