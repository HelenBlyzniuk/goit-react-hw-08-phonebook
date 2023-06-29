import { createPortal } from 'react-dom';

import { Overlay,Modal } from './Modal.styled';
import PropTypes from 'prop-types';
import { CorrectContactForm } from 'components/CorrectContactForm/CorrectContactForm';



const modalRoot = document.querySelector('#modal-root');

export function ModalComponent({ contact,onModalClick }) {
 

  return createPortal(
    <Overlay >
      <Modal>
       <CorrectContactForm contact={contact} onModalClick={onModalClick}/>
      </Modal>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes={
  contact:PropTypes.array,
  onModalClick:PropTypes.func,
}