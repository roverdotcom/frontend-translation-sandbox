import * as React from 'react';
import * as ReactDOM from "react-dom";

import { App } from './react-app/components/App'
import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
