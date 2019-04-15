import { setupI18n } from '@lingui/core';

import usCaltalog from '@rover/locales/en-us/messages.js';
import piCatalog from '@rover/locales/pi-r8/messages.js';
import store from '@rover/store';

const i18n = setupI18n({ language: store.getState().lang, catalogs: {"en-us": usCaltalog, "pi-r8": piCatalog} })

store.subscribe(() => {
  i18n.activate(store.getState().lang)
})

export default i18n;
