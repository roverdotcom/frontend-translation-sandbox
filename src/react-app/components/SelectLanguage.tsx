import React from 'react';

import { StateType } from '@rover/store';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';

const LANG_NAMES: { [key: string]: string } = {
  'en-us': `US English`,
  'en-pl': `Pirate`,
};

interface Props {
  state: StateType;
  onUpdateLang: (lang: string) => void;
}

const SelectLanguage = ({ state, onUpdateLang }: Props) => {
  return (
    <div className="bg-react card">
      <select
        onChange={e => onUpdateLang(e.target.value)}
        defaultValue={state.lang}
      >
        {Object.keys(LANG_NAMES).map(lang => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <div>Current language is {LANG_NAMES[state.lang]}</div>
    </div>
  );
};

export default SelectLanguage;
