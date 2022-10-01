import React, { useState, useEffect } from 'react';
import { ISafe } from '../types';
import Safe from './Safe';
import TransactionActionModal from './TransactionActionModal';
import CardGroup from 'react-bootstrap/CardGroup';

function Main(props: {safes: ISafe[]}) {
  const [showTransactionModal, setShowTransactionModal]
    = useState<boolean>(false);
  const [trasnactionSafe, setTransactionSafe] = useState<ISafe>();

  const onOpenTransactionModal = (safe: ISafe) => {
    setTransactionSafe(safe);
    setShowTransactionModal(true)
  }

  const onCloseTransactionModal = () => {
    setTransactionSafe(undefined);
    setShowTransactionModal(false)
  }

  return (
    <>
      { showTransactionModal &&
        <TransactionActionModal
          safe={trasnactionSafe!}
          onClose={() => onCloseTransactionModal()} />}
      <CardGroup className="card-list">
        {props.safes.map(safe => {
            const props = {
              safe: safe,
              onAddTransaction: () => onOpenTransactionModal(safe),
            };
            return (<Safe key={safe.id} {...props} />)}
        )}
      </CardGroup>
    </>
  )
}

export default Main;
