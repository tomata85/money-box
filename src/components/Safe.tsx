import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactTimeAgo from 'react-time-ago'
import SafeTransactions from './SafeTransactions'
import { ISafe } from '../types';
import './styles.css';
import { savedAmount } from '../utils'

function Safe(props: { safe: ISafe, onAddTransaction: () => void }) {
  const { safe }= props;
  const safeNameText = `הקופה של ${safe.name}`;
  const savingsAmount = `יש לי ${savedAmount(safe)} שקלים בקופה`;
  const goalText = `המטרה שלי: ${safe.goalName} במחיר ${safe.goalAmount} שקלים`;
  const nextBonus = `הבונוס הקרוב `;
  const addTransactionText = `חדש`;

  return (
    <Card
       bg={'info'}
       border={'info'}
       className="mb-2 safe"
     >
     <Card.Header className="safe-header" as="h2">{safeNameText}</Card.Header>
      <Card.Img variant="top" src={safe.photoUrl} />
      <Card.Body>
        <Card.Text>{savingsAmount}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{goalText}</ListGroup.Item>
        <ListGroup.Item>
          {nextBonus}
          <ReactTimeAgo date={new Date(safe.nextBonusTimestamp)} locale="he-il"/>
        </ListGroup.Item>
        <ListGroup.Item>
          <SafeTransactions safe={safe} />
          <Button className="mb-2 mr-auto" onClick={props.onAddTransaction}>
            {addTransactionText}
          </Button>
        </ListGroup.Item>
     </ListGroup>
    </Card>
  );
}

export default Safe;
