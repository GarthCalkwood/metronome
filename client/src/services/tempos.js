import axios from 'axios'
const baseUrl = '/api/tempos'

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
}

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const create = async newTempo => {
  console.log("token: ", token);
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newTempo, config);
  return response.data
}

const update = (id, newTempo) => {
  const request = axios.put(`${baseUrl}/${id}`, newTempo);
  return request.then(response => response.data);
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data);
}

const actions = { 
  setToken,
  getAll, 
  create,
  update,
  remove
}
export default actions;