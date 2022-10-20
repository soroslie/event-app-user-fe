import React from 'react';
import CancelModalButton from './CancelButton';
import ModalLayout from './ModalLayout';
import SuccessCard from '../cards/SuccessCard';

function SuccessModal({
  message,
  show,
  onCloseModal,
}) {
  if (!show) {
    return null;
  }

  return (
    <ModalLayout title="success">
      <div className="p-6 space-y-6">
        <SuccessCard message={message} />
      </div>
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
        <CancelModalButton onClick={onCloseModal} title="close" />
      </div>
    </ModalLayout>
  );
}

export default SuccessModal;
