import * as React from 'react';
import * as ReactDOM from "react-dom";
import Vue from "vue";

import { App } from './react-app/components/App'
import VueApp from './app/components/App.vue'
import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
new Vue(VueApp).$mount('#vue-app') ;
