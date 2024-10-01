import React, { useState, RefObject } from 'react';

interface ModalProps {
  messageInputRef: RefObject<HTMLInputElement>;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ messageInputRef, onClose }) => {
  const [command, setCommand] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = () => {
    setGeneratedText('Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.');
  };

  const handleInsert = () => {
    if (messageInputRef.current) {
      messageInputRef.current.value = generatedText;
      onClose();
    }
  };

  return (
    <div id="modal" className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <input
          type="text"
          className="border p-2 mb-4 w-full"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter command"
        />
        <button className="bg-blue-500 text-white p-2 rounded w-full mb-2" onClick={handleGenerate}>Generate</button>
        <button className="bg-gray-400 text-white p-2 rounded w-full mb-2" disabled>Regenerate</button>
        <button className="bg-green-500 text-white p-2 rounded w-full" onClick={handleInsert}>Insert</button>
      </div>
    </div>
  );
};

export default Modal;
