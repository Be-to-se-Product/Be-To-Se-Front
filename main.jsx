import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import router from "./src/router/router";
import { RouterProvider } from "react-router-dom";
import "./src/index.css";
import VLibras from "@djpfs/react-vlibras";
import AplicattionComponent from "./src/context/Apllicattion/ApplicationComponent"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AplicattionComponent>
      <VLibras forceOnload={true} />
      <RouterProvider router={router} />
    </AplicattionComponent>
  </>
);
