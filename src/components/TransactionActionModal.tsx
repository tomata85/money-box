import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { ISafe, ITransaction, TransactionType } from '../types'
import { ToString } from '../utils'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TransactionActionModal(
  props: {safe: ISafe, onClose: (newTran?: ITransaction) => void}) {

  const defaultReason = "הפקדה שבועית";
  const defaultAmount = 10;
  const header = `${props.safe.name}: הפקדה/משיכה חדשה`;
  const reasonText = 'סיבה';

  const [show, setShow] = useState(true);
  const [tranType, setTranType] = useState(TransactionType.Deposit);
  const [reason, setReason] = useState(defaultReason);
  const [amount, setAmount] = useState(defaultAmount);

  const onTransTypeChange = (eventKey: any, _: any) => {
    const newType = parseInt(eventKey!) as TransactionType;

    // Withdrawals are never "הפקדה שבועית"
    if(newType === TransactionType.Withdrawal &&
       reason === defaultReason) {
         setReason("");
       }
    setTranType(newType)
  }

  const handleClose = () => {
    setShow(false);
    props.onClose(undefined);
  }

  const handleSave = () => {
    const newTranAmount = tranType === TransactionType.Withdrawal
      ? -1 * amount
      : amount;
    const newTran :ITransaction = {
      safeId: props.safe.id,
      timestamp: Date.now(),
      amount: newTranAmount,
      type: tranType,
      reason: reason
    };
    setShow(false);
    props.onClose(newTran);
  }

  return (
    <>
      <Modal show={show} >
        <Modal.Header>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="suppress-rtl">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">ש"ח</InputGroup.Text>
            <Form.Control
              type="number"
              defaultValue={defaultAmount}
              onChange={e => setAmount(parseInt(e.currentTarget.value))}/>
            <DropdownButton
              title={ToString(tranType)}
              id="input-group-dropdown-1"
              onSelect={onTransTypeChange}
            >
              <Dropdown.Item eventKey={TransactionType.Deposit}>
                {ToString(TransactionType.Deposit)}
              </Dropdown.Item>
              <Dropdown.Item eventKey={TransactionType.Withdrawal}>
                {ToString(TransactionType.Withdrawal)}
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              value={reason}
              onChange={e => setReason(e.currentTarget.value)} />
            <InputGroup.Text id="basic-addon2">{reasonText}</InputGroup.Text>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            שמירה
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            ביטול
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TransactionActionModal;
