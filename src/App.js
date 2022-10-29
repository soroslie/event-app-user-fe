import './App.css';
import {
  BrowserRouter,
  Navigate, Route, Routes, useLocation,
} from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Layout from './components/layout/Layout';
import PageNotFound from './pages/PageNotFound';
import Membership from './pages/Membership';
import Topup from './pages/Topup';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import RequireAuth from './components/RequireAuth';
import Profile from './pages/Profile';
import OnGoingPayments from './components/pages/payments/OnGoingPayments';
import Navigations from './components/pages/payments/Navigations';
import HistoryEventPayment from './components/pages/payments/HistoryEventPayment';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={(
                <Layout />
            )}
            >
              <Route path="/auth" element={<Auth />} />
              <Route index element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />

              <Route
                path="/"
                element={(
                  <RequireAuth redirectTo="/auth" />
            )}
              >
                <Route path="/profile" element={<Profile />} />
                <Route path="/memberships" element={<Membership />} />
                <Route path="/topup" element={<Topup />} />
                <Route path="/payments" element={<Navigations />}>
                  <Route index element={<OnGoingPayments />} />
                  <Route path="/payments/history" element={<HistoryEventPayment />} />
                </Route>
              </Route>
            </Route>
            <Route path="/notfound" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
          </Routes>
        </BrowserRouter>

      </HelmetProvider>
    </div>
  );
}

export default App;
