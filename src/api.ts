import { DB_URL } from './globals';
import { ISafe, ITransaction } from './types';

function requestOptions(method: string, body?: any) {
  const headers = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };

  return headers
}

function call(url: string, requestOptions: any) {
  return fetch(url, requestOptions)
    .catch((err) => {
      console.log(err.message);
    });
}

export function addTransaction(tran: ITransaction) {
  call(`${DB_URL}/transactions`, requestOptions('POST', tran));
}

export function updateSafeBonus(safe: ISafe) {
  call(`${DB_URL}/safes/${safe.id}`, requestOptions(
    'PATCH', {
      nextBonusTimestamp: safe.nextBonusTimestamp
    })
  );
}
