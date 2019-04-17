import React from 'react';
import { StateType } from '@rover/store';
import { Trans, t } from '@lingui/macro';

interface Props {
  submitText?: string;
  state: StateType;
  onSubmit: () => void;
  onUpdatePetlist: (pets: string[]) => void;
  onUpdateNumWalk: (num: number) => void;
}

const WalkForm = ({
  submitText,
  state,
  onSubmit,
  onUpdateNumWalk,
  onUpdatePetlist,
}: Props) => {
  return (
    <div className="bg-react card">
      <label>
        {' '}
        {/* <Trans>Number of walks:</Trans> */}
        <Trans id={t`Number of walks:`} />{' '}
        <input
          type="number"
          value={state.numWalk}
          onChange={e => onUpdateNumWalk(parseInt(e.target.value || '0', 10))}
        />
      </label>
      <label>
        {' '}
        <Trans id={t`Pets`} />{' '}
        <input
          value={state.petList}
          onChange={e =>
            onUpdatePetlist(
              (e.target.value || '').split(',').map(pet => pet.trim())
            )
          }
        />
      </label>
      <button onClick={() => onSubmit()}>
        <Trans id={submitText} />
      </button>
    </div>
  );
};

WalkForm.defaultProps = {
  submitText: t`Submit`,
};

export default WalkForm;
