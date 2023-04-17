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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3>Это модальное окно!</h3>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </Modal>
    </div>
  );
}

export default App;
