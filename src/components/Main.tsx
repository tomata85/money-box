import React, { useState } from 'react';
import { ISafe, ITransaction } from '../types';
import Safe from './Safe';
import TransactionActionModal from './TransactionActionModal';
import CardGroup from 'react-bootstrap/CardGroup';

function Main(
  props: {safes: ISafe[], onAddNewTransaction: (tran: ITransaction) => void}) {
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [trasnactionSafe, setTransactionSafe] = useState<ISafe>();

  const onOpenTransactionModal = (safe: ISafe) => {
    setTransactionSafe(safe);
    setShowTransactionModal(true);
  }

  const onCloseTransactionModal = (newTran?: ITransaction) => {
    if(newTran) {
      props.onAddNewTransaction(newTran);
    }
    setTransactionSafe(undefined);
    setShowTransactionModal(false);
  }

  return (
    <>
      { showTransactionModal &&
        <TransactionActionModal
          safe={trasnactionSafe!}
          onClose={(newTran) => onCloseTransactionModal(newTran)} />}
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
