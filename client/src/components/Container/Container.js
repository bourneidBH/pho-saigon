import React from "react";
import "./Container.css";

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}
    </div>;
  };

export default Container;