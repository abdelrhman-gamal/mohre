import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MOHREReceipt from "./pages/MOHREReceipt.jsx";
import './assets/css/index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "MOHREReceipt", element: <MOHREReceipt /> },
      { path: "MOHREReceipt/index", element: <MOHREReceipt /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
