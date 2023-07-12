import React from "react";
import AddCategoryForm from '../components/AddCategoryForm';
import Layout from "../components/Layout";

function AdminAddCategory() {
  return(
    <Layout
      h1="Add a menu category"
    >
      <AddCategoryForm />
    </Layout>
  )
};

export default AdminAddCategory;