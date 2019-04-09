import * as React from 'react';

interface Props {
   name: string
}

export const App = ({name}: Props) => (
  <div>Hello {name}</div>
)

