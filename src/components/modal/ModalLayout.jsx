import React from 'react';

function ModalLayout({ title, children }) {
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      className="transition-all duration-300 ease-out bg-backdrop overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen inset-0 h-modal h-sreen flex justify-center items-center "
    >
      <div className="relative p-4 w-full max-w-2xl h-auto transition-transform transform ease-in-out duration-300">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="p-4 rounded-t border-b text-center">
            <h3 className="text-xl  uppercase font-semibold">{title}</h3>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalLayout;
