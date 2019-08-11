import React, { useState } from 'react';
import styled from 'styled-components';
import Counter from "./counter/Counter";
import Info from "./info/Info";
import ContextSample from './context/context';
import Average from './average/Average';
import UsePromiseSample from './UsePromiseSample';

const CounterBlock = styled.h1`
  fon-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const InfoBlock = styled.div`
  board: 1px solid;
  color: red;
`;

const App = () => {

  const [visible, setVisible] = useState(false);


  return (
    <div>
      <button onClick={() => { setVisible(!visible) }}>{visible ? '숨기기' : '보이기'}</button>
      <hr />
      {visible &&
        <div>
          <CounterBlock>
            <Counter />
          </CounterBlock>
          <InfoBlock>
            <Info />
          </InfoBlock>
        </div>
      }

      <ContextSample />
      <Average />
      <UsePromiseSample />
    </div>
  );
}

export default App;
