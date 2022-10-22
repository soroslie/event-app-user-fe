import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LocalStorageConstant from '../constants/local_storage';
import JWTHelper from '../helpers/jwtHelper';

const { useEffect } = require('react');

function RequireAuth({ children, redirectTo }) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem(LocalStorageConstant.TOKEN_KEY);

    if (!token) {
      navigate(redirectTo, { replace: true, state: { from: location.pathname } });
    }

    if (token) {
      const decodedJwt = JWTHelper.parse(token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        navigate(redirectTo, { replace: true, state: { from: location.pathname } });
      }
    }
  }, [location]);

  return <Outlet />;
}

export default RequireAuth;
