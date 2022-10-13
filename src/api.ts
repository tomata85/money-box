export function requestOptions(method: string, body?: any) {
  const headers = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: body
  };

  return headers
}

export function call(url: string, requestOptions: any) {
  return fetch(url, requestOptions)
    .catch((err) => {
      console.log(err.message);
    });
}
