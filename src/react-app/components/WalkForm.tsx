import React, { useState } from 'react';
import { StateType } from '@rover/store';

interface Props {
  state: StateType;
  onSubmit: (num: number) => any,
}

const WalkForm = ({state, onSubmit}: Props) => {
  const [numWalk, setNumWalk] = useState(state.numWalk || 0);
  return (
    <div className="bg-react card">
      <label> Number of walks:{" "} 
        <input type="number" value={numWalk} onChange={e => setNumWalk(parseInt(e.target.value || 0, 10))} />
      </label>
      <label> Pets:{" "} 
        <input value={numWalk} onChange={e => setNumWalk(parseInt(e.target.value || 0, 10))} />
      </label>
      <button onClick={() => onSubmit(numWalk)}>Submit</button>
    </div>
  );
};

export default WalkForm;
