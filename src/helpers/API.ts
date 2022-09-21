import { endpoints } from '../enums/endpoints';

async function API(endpoint: string = '', parameters: { [index: string]: string } = {}) {
  const url = endpoints.USERS + (endpoint ? '/' + endpoint : '');
  const options = { method: 'GET' };

  let result;

  await fetch(url, options)
    .then(response => (response.ok ? response.json() : Promise.reject(Error('Failed to load'))))
    .then(json => (result = json))
    .catch(error => {
      throw error;
    });

  return result;
}

export function callAPI(endpoint: string = '', parameters: { [index: string]: string } = {}) {
  const rez = API(endpoint, parameters);
  return rez;
}
