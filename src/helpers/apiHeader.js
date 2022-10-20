import LocalStorageConstant from '../constants/local_storage';

const setPrepareHeader = (headers, { getState }) => {
  const token = localStorage.getItem(LocalStorageConstant.TOKEN_KEY);
  headers.set('authorization', `Bearer ${token}`);

  return headers;
};

export default setPrepareHeader;
