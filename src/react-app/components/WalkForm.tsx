import React, { useState } from 'react';

const WalkForm = () => {
  const [numWalk, setNumWalk] = useState(1);
  return (
    <div className="bg-react card">
      <label> Number of walk: 
        <input type="number" value={numWalk} onChange={e => setNumWalk(parseInt(e.target.value, 10))} />
      </label>
      <button>Submit</button>
    </div>
  );
};

export default WalkForm;
