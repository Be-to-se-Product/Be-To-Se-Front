import React from "react";
import ReactDOM from "react-dom/client";
import router from "./src/router/router";
import { RouterProvider } from "react-router-dom";
import "./src/index.css";
import VLibras from "@djpfs/react-vlibras";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <VLibras forceOnload={true} />
    <RouterProvider router={router} />
  </>
);
