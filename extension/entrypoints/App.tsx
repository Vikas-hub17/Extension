// entrypoints/App.tsx
import React, { useState } from 'react';
import AIIcon from './components/AIIcon';

const App: React.FC = () => {
  const [iconVisible, setIconVisible] = useState(false);

  return (
    <div>
      {iconVisible && <AIIcon onClick={() => console.log("Icon clicked!")} />}
    </div>
  );
};

export default App;
