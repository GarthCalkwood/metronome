import axios from 'axios'
const baseUrl = 'http://localhost:3001/tempos'

const getAll = () => {
  let request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newObject) => {
  let request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const actions = { 
  getAll, 
  create
}
export default actions