import axios from 'axios';

const token = localStorage.getItem('@navers_test/bearer_id');

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const API = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1',
});

export const addNaver = async (data) => {
  try {
    const result = await API({
      url: '/navers',
      method: 'post',
      data,
    });
    return result;
  } catch (err) {
    return err;
  }
};

export const setNaver = async () => {
  try {
    const result = await API({
      url: '/navers',
      method: 'get',
    });
    return result;
  } catch (err) {
    return err;
  }
};

export const deleteNaver = async (id) => {
  try {
    const result = await API({
      url: `/navers/${id}`,
      method: 'delete',
    })
    return result;
  } catch (err) {
    return err;
  }
};

export const editNaver = async (id, data) => {
  try {
    const result = await API({
      url: `/navers/${id}`,
      method: 'put',
      data,
    })
    return result;
  } catch (err) {
    return err;
  }
};


export default API;
