import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDom.render(<App/>, el);
};

// Mount function to start up the app

// If we are in development and in isolation
// Call mount immediately

if (process.env.NODE_ENV === "development") {
  const node = document.getElementById("_marketing-dev-root");
  if (node) {
    mount(node);
  }
}

export { mount };

// WE are running through container
// we should export the mount function
