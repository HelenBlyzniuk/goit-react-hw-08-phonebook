import { createPortal } from 'react-dom';
// import { useEffect } from 'react';
import { Overlay,Modal } from './Modal.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';



const modalRoot = document.querySelector('#modal-root');

export function ModalComponent({ id }) {
//   const handleClick = e => {
//     if (e.target.nodeName === 'IMG') {
//       return;
//     }
//     handleModalClick();
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', e => {
//       if (e.code === 'Escape') {
//         handleModalClick();
//       }
//     });

//     return () => {
//       return window.removeEventListener('keydown', handleModalClick);
//     };
//   }, [handleModalClick]);

  return createPortal(
    <Overlay >
      <Modal>
       <ContactForm/>
      </Modal>
    </Overlay>,
    modalRoot
  );
}
