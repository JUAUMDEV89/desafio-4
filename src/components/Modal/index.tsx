import { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

interface ModalProps{
  isOpen: boolean;
  children: ReactNode;
}

function Modal({ isOpen, children }: ModalProps){
    
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(()=>{
    if (isOpen !== isOpen) {
      console.log(isOpen)
      setModalStatus(isOpen)
    }
  }, []);

    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={()=>isOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
  }

export default Modal;
