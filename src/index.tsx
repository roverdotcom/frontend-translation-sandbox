import 'jquery'
import React from 'react';
import * as ReactDOM from "react-dom";
import Vue from "vue";
import { ThunkDispatch } from 'redux-thunk';
import { connect, Provider } from 'react-redux'

import store, {StateType, ActionTypes ,submitAction} from './store';
import HeaderView from './app/backbone/views/header_view';
import VueApp from './app/components/App.vue'
import App from './react-app/components/App'
import "./styles.css";

const mapStateToProps = (state: StateType) => ({state});
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, ActionTypes>) => ({
  onSubmit: (num: number) => dispatch(submitAction(num)),
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('react-app'));
new Vue({
  el: "#vue-app",
  render: (h) => h(VueApp, {props: {store}})
});
new HeaderView();
