class APIConstatnt {
  static baseUrl = process.env.REACT_APP_API_URL ?? 'http://localhost:8080';

  static METHOD = {
    post: 'POST',
    patch: 'PATCH',
    get: 'GET',
    delete: 'DELETE',
  };
}

export default APIConstatnt;
