import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay,Modal } from './Modal.styled';

import { CorrectContactForm } from 'components/CorrectContactForm/CorrectContactForm';



const modalRoot = document.querySelector('#modal-root');

export function ModalComponent({ contact,onModalClick }) {
  const handleClick = e => {
    if (e.target.nodeName === 'FORM'||e.target.nodeName === 'INPUT'||e.target.nodeName === 'LABEL'||e.target.nodeName === 'BUTTON') {
      return;
    }
   onModalClick();
  };

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        onModalClick();
      }
    });

    return () => {
      return window.removeEventListener('keydown', onModalClick);
    };
  }, [onModalClick]);

  return createPortal(
    <Overlay onClick={handleClick}>
      <Modal>
       <CorrectContactForm contact={contact} onModalClick={onModalClick}/>
      </Modal>
    </Overlay>,
    modalRoot
  );
}
