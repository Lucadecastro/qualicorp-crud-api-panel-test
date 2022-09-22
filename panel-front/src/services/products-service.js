import axios from './axios'

const ProductsService = {
  getAll: async () => {
    return await axios.get(`/product`)
  },

  getOne: async (id) => {
    return await axios.get(`/product/${id}`)
  },

  create: async (data) => {
    return await axios.post('/product', data)
  },

  update: async (data) => {
    return await axios.put(`/product/`, data)
  },

  delete: async (id) => {
    return await axios.delete(`/product/${id}`)
  }

}

export default ProductsService