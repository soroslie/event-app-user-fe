import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../../layout/PageHeader';

function Navigations() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader title="event payments" />
      <div className="flex my-3">
        <div className="mx-auto inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={() => navigate('/payments')}
            type="button"
            className={`${pathname === '/payments' ? 'tex-bold text-white bg-orange-600 rounded-l-lg border border-gray-900 hover:bg-orange-600 hover:text-white' : 'text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-orange-600 hover:text-white'} py-2 px-4 text-sm font-medium  focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white`}
          >
            Ongoing
          </button>
          <button
            onClick={() => navigate('/payments/history')}
            type="button"
            className={`${pathname === '/payments/history' ? 'tex-bold text-white bg-orange-600 border-gray-900 hover:bg-orange-600 hover:text-white' : 'text-gray-900 bg-transparent border border-gray-900 hover:bg-orange-600 hover:text-white'} py-2 px-4 text-sm border-t border-b border-r border-gray-900 hover:bg-orange-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white`}
          >
            History
          </button>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-orange-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
          >
            Merch
          </button>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-orange-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
          >
            History Merch
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigations;
