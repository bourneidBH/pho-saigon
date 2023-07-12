import React from "react";

function AdminMainScreen() {
  return(
    <div>
      <p className="centered">
        <a href="/admin/addItem" className="btn btn-secondary">Add a new menu item</a>
        <a href="/admin/editItem" className="btn btn-secondary">Edit an existing menu item</a>
        <a href="/admin/deleteItem" className="btn btn-secondary">Delete a menu item</a>
      </p>
    </div>
  )
};

export default AdminMainScreen;