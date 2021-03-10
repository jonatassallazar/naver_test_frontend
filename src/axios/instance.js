import axios from 'axios';

const token = localStorage.getItem('@navers_test/bearer_id')

axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

export default axios.create({
    baseURL: 'https://navedex-api.herokuapp.com/v1',
  })
