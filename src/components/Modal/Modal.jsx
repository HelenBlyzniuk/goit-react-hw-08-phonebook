import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay,Modal } from './Modal.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';



const modalRoot = document.querySelector('#modal-root');

export function ModalComponent({ contact,onModalClick }) {
  const handleClick = e => {
    if (e.target.nodeName === 'FORM') {
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
       <ContactForm contact={contact}/>
      </Modal>
    </Overlay>,
    modalRoot
  );
}
