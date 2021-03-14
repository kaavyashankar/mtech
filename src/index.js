import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Routes from "./Routes";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(<Routes />, document.getElementById("root"));



//Service worker Registration
serviceWorkerRegistration.register();


