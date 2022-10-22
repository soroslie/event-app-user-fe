import './App.css';
import {
  BrowserRouter,
  Navigate, Route, Routes,
} from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <Layout />
            )}
          >
            <Route path="/login" element={<Auth />} />
            <Route index element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />

            <Route
              path="/"
              element={(
                <RequireAuth redirectTo="/login" />
            )}
            >
              <Route path="/profile" element={<Profile />} />
              <Route path="/memberships" element={<Membership />} />
              <Route path="/topup" element={<Topup />} />
            </Route>
          </Route>
          <Route path="/notfound" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
