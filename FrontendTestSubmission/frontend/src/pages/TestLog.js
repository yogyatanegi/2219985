import React from 'react';
import Log from '../utils/log';

const TestComponent = () => {
  const handleClick = () => {
    Log("frontend", "info", "test-component", "Logging test worked!");
  };

  return <button onClick={handleClick}>Test Log</button>;
};

export default TestComponent;
