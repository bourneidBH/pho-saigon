import React from 'react';
import DeleteMenuItemForm from '../components/DeleteMenuItemForm';
import Layout from '../components/Layout';

function AdminDeleteMenuItem() {
  return(
    <Layout h1="Delete a menu item">
      <DeleteMenuItemForm />
    </Layout>
  )
};

export default AdminDeleteMenuItem;