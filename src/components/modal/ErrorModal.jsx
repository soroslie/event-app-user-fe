import CancelModalButton from './CancelButton';
import ModalLayout from './ModalLayout';
import ErrorCard from '../cards/ErrorCard';

function ErrorModal({
  show,
  message,
  onCloseModal,
}) {
  if (!show) {
    return null;
  }

  return (
    <ModalLayout title="error">
      <div className="p-6 space-y-6">
        <p className="text-center text-red-600 text-xl md:text-2xl">{message}</p>
      </div>
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
        <CancelModalButton onClick={onCloseModal} title="close" />
      </div>
    </ModalLayout>
  );
}

export default ErrorModal;
