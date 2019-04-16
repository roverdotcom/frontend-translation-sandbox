import { setupI18n } from '@lingui/core';

import usCaltalog from '@rover/locales/en-us/messages.js';
import piCatalog from '@rover/locales/en-pl/messages.js';

const i18n = setupI18n({
  language: 'en-us',
  catalogs: { 'en-us': usCaltalog, 'en-pl': piCatalog },
});

export default i18n;
