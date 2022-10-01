import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { ISafe } from '../types'

function TransactionActionModal(props: {safe: ISafe, onClose: () => void}) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.onClose();
  }

  const handleSave = () => {
    handleClose()
  }

  const header = `${props.safe.name}: תנועה חדשה`;
  const howMuchText = 'סכום להפקדה';
  const reasonText = 'סיבה';
  const defaultReason = 'הפקדה שבועית';

  return (
    <>
      <Modal show={show} >
        <Modal.Header>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="suppress-rtl">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">ש"ח</InputGroup.Text>
            <Form.Control type="number" />
            <InputGroup.Text id="basic-addon2">{howMuchText}</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control defaultValue={defaultReason} />
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
