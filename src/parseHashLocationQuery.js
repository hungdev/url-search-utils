import parseQuery from './parseQuery';

export default function parseHashLocationQuery(paramsTypes = {}) {
  const search = window.location.hash.split('?')[1] || '';

  return parseQuery(search, paramsTypes);
}
