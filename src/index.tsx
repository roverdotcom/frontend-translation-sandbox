import 'jquery'
import * as React from 'react';
import * as ReactDOM from "react-dom";
import Vue from "vue";

import HeaderView from './app/backbone/views/header_view';
import VueApp from './app/components/App.vue'
import App from './react-app/components/App'
import "./styles.css";

global.Rover = {};
global.Rover.context = {
  customerSupportNumber: "888-888-8888",
  petList: ["Woodie", "Kitty"]
};

ReactDOM.render(<App name="Rover" />, document.getElementById('react-app'));
new Vue(VueApp).$mount('#vue-app') ;
new HeaderView();
