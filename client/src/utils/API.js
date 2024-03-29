import axios from 'axios';

const API = {
  // get all menu items
  getMenuItems: () => {
    return axios.get('/api/menu')
  },

  // save menu item to database
  saveItem: itemData => {
    return axios.post('/api/menu', itemData);
  },
  
  //get specific menu item by id
  getItem: id => {
    return axios.get(`/api/menu/${id}`)
  },

  // delete specific menu item
  deleteItem: id => {
    return axios.delete(`/api/menu/${id}`)
  },

  // Post route to update menu item in database
  updateItem: (id, itemData) => {
    return axios.put(`/api/menu/${id}`, itemData)
  },

  // get menu categories
  getCategories: () => {
    return axios.get("/api/category")
  },

  //get specific menu category by id
  getCategory: id => {
    return axios.get(`/api/category/${id}`)
  },

  // delete specific menu category
  deleteCategory: id => {
    return axios.delete(`/api/category/${id}`)
  },

  // Post route to update menu category in database
  updateCategory: (id, catData) => {
    return axios.put(`/api/category/${id}`, catData)
  },

  // save category to database
  saveCategory: categoryData => {
    return axios.post('/api/category', categoryData);
  },
};

export default API
