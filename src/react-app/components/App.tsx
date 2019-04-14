import * as React from 'react';

import SelectLanguage from './SelectLanguage';
import WalkForm from './WalkForm';
import { StateType } from '@rover/store';

interface Props {
  state: StateType;
  onSubmit: (num: number) => any,
}

const App = (props: Props) => (
  <React.Fragment>
    <SelectLanguage />
    <WalkForm {...props} />
  </React.Fragment>
);

export default App;

"Oops! We ran into a problem and couldn't archive your conversation! Please contact us at {0} for assistance.";
"{numUnitsPerDay, plural, one {# time per day} other {# times per day}}"
