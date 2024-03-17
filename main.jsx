import ReactDOM from "react-dom/client";
import Router from "./src/router/router"

import "./src/index.css";
import VLibras from "@djpfs/react-vlibras";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
      <Router />
      <VLibras forceOnload={true} />
  </>
);
