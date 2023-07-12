import React from 'react';
import EditMenuItemForm from '../components/EditMenuItemForm';
import Layout from '../components/Layout';

function AdminEditMenuItem() {
  return(
    <Layout h1="Edit a menu item">
      <EditMenuItemForm />
    </Layout>
  )
}

export default AdminEditMenuItem;