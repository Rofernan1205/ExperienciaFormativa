import React from "react";
import "./ClientLayout.css";
export const ClientLayout = (props) => {
  const { children } = props;
  return (
    <div className="client-layout container">
      {children}
    </div>
  );
};
