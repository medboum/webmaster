import axios from 'axios'

const categoryOptions = axios
  .get('http://localhost:128/admin/getAllCategories')
  .then(function (response) {
    return response.data
  })

export { categoryOptions }
