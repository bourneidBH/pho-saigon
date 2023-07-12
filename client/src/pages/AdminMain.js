import React from "react";
import AdminMainScreen from '../components/AdminMainScreen';
import Layout from "../components/Layout";

function AdminMain() {
  return(
    <Layout h1="What do you want do?">
      <AdminMainScreen />
    </Layout>
  )
};

export default AdminMain;