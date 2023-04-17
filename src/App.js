import React, { useState } from 'react';
import './index.scss';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
