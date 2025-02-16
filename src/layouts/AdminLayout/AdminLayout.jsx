import React from "react";
import "./AdminLayout.css";
export const AdminLayout = (props) => {
  const { children } = props;
  return (
    <div className="admin-layout container">
      {children}
    </div>
  );
};
