import './App.css';
import {
  BrowserRouter,
  Navigate, Route, Router, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Layout from './components/layout/Layout';
import PageNotFound from './pages/PageNotFound';
import Membership from './pages/Membership';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/memberships" element={<Membership />} />
          </Route>
          <Route path="/notfound" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
