import React, { useState } from 'react';

const LANG_NAMES: {[key:string]: string} = {'en-us': "US English", 'pi-r8': "Pirate"};
const DEFAULT_LANG = 'en-us';

const SelectLanguage = () => {
  const [lang, setLang] = useState(DEFAULT_LANG);
  return (
    <div className="bg-react card">
      <select onChange={e => setLang(e.target.value)} defaultValue={DEFAULT_LANG}>
        {Object.keys(LANG_NAMES).map((lang) => <option key={lang} value={lang}>{lang}</option>)}
      </select>
      <div>Current language is {LANG_NAMES[lang]}</div>
    </div>
  );
};

export default SelectLanguage;
