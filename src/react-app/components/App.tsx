import * as React from 'react';

import SelectLanguage from './SelectLanguage';
import WalkForm from './WalkForm';

interface Props {
  name: string;
}

const App = ({ name }: Props) => (
  <React.Fragment>
    <SelectLanguage />
    <WalkForm />
  </React.Fragment>
);

export default App;

"Oops! We ran into a problem and couldn't archive your conversation! Please contact us at {0} for assistance.";
"{numUnitsPerDay, plural, one {# time per day} other {# times per day}}"
