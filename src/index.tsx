import 'jquery';
import React from 'react';
import * as ReactDOM from 'react-dom';
import Vue from 'vue';
import { ThunkDispatch } from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import { I18nProvider } from '@lingui/react';

import store, {
  StateType,
  ActionTypes,
  submitAction,
  updateNumWalkAction,
  updatePetListAction,
  updateLangAction,
} from './store';
import HeaderView from './app/backbone/views/header_view';
import VueApp from './app/components/App.vue';
import App from './react-app/components/App';
import i18n from '@rover/utilities/translation';
import './styles.css';

const mapStateToProps = (state: StateType) => ({ state });
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  onSubmit: () => dispatch(submitAction()),
  onUpdateNumWalk: (numWalk: number) => dispatch(updateNumWalkAction(numWalk)),
  onUpdateLang: (lang: string) => dispatch(updateLangAction(lang)),
  onUpdatePetlist: (petList: string[]) =>
    dispatch(updatePetListAction(petList)),
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
ReactDOM.render(
  <Provider store={store}>
    <I18nProvider i18n={i18n}>
      <ConnectedApp />
    </I18nProvider>
  </Provider>,
  document.getElementById('react-app')
);
const vue = new Vue({
  el: '#vue-app',
  data: { state: store.getState() },
  render: function(h) {
    return h(VueApp, { props: { state: this.state } });
  },
});
new HeaderView();
store.subscribe(() => {
  const state = store.getState();
  i18n.activate(state.lang);
  new HeaderView();
  vue.state = state;
});
