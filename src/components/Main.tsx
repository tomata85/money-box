import React, { useState, useEffect } from 'react';
import { ISafe } from '../types';
import Safe from './Safe';
import TransactionActionModal from './TransactionActionModal';
import CardGroup from 'react-bootstrap/CardGroup';

function Main(props: {safes: ISafe[]}) {
  const [showTransactionModal, setShowTransactionModal] = useState<boolean>(false);

  return (
    <>
      { showTransactionModal &&
        <TransactionActionModal
          safe={props.safes[0]}
          onClose={() => setShowTransactionModal(false)} />}
      <CardGroup className="card-list">
        {props.safes.map(safe => {
            const props = {
              safe: safe,
              onAddTransaction: () => setShowTransactionModal(true),
            };
            return (<Safe key={safe.id} {...props} />)}
        )}
      </CardGroup>
    </>
  )
}

export default Main;
