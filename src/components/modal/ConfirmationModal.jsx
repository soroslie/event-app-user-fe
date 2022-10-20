import React from 'react';
import CancelModalButton from './CancelButton';
import ConfirmModalButton from './ConfirmButton';
import ModalLayout from './ModalLayout';

function ConfirmationModal({
  show, title, message, onCloseModal, onConfirmModal,
}) {
  if (!show) {
    return null;
  }
  return (
    <ModalLayout title={title}>
      <div className="p-6 space-y-6">
        <p>{message}</p>
      </div>
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
        <CancelModalButton onClick={onCloseModal} />
        <ConfirmModalButton onClick={onConfirmModal} />
      </div>
    </ModalLayout>
  );
}

export default ConfirmationModal;
