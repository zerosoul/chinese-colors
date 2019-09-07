import { useState } from 'react';

const useModal = () => {
  const [visible, setVisible] = useState(false);
  const closeModal = () => {
    setVisible(false);
  };
  const showModal = () => {
    setVisible(true);
  };
  return { visible, closeModal, showModal };
};

export default useModal;
