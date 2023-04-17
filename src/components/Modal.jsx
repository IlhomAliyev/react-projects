import React from 'react';

const Modal = ({isOpen, setIsOpen}) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`overlay animated${isOpen ? ' show' : ''}`}
    >
      <div onClick={(event) => event.stopPropagation()} className="modal">
        <svg
          onClick={() => setIsOpen(false)}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </div>
    </div>
  );
};

export default Modal;
