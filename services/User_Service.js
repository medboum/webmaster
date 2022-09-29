import axios from 'axios'
import authHeader from './auth_Header'
import AuthService from './auth_service'
const API_URL = 'http://localhost:124/user/getUser'

const getAllPrivatePosts = () => {
  return axios.get('http://localhost:128/user/getUser', {
    headers: authHeader(),
  })
}

const getRole = () => {
  return axios.get('http://localhost:128/user/getRoleUser', {
    headers: authHeader(),
  })
}
const getAllUsers = () => {
  return axios.get('http://localhost:128/admin/getAllUser', {
    headers: authHeader(),
  })
}
const  addFav=(id,profile)=> {
  return axios.post(`http://localhost:128/addToWishlist/${id}/${profile}`)
  
}

const getMyProduit = () => {
  return axios.get('http://localhost:128/getMyProduit', {
    headers: authHeader(),
  })
}
const deleteUser = (id) => {
  return axios.delete(`http://localhost:128/admin/delUser/${id}`, {
    headers: authHeader(),
  })
}

const USerService = {
  getAllPrivatePosts,
  getMyProduit,
  getRole,
  getAllUsers,
  deleteUser,
  addFav
}

export default USerService