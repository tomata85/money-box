import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactTimeAgo from 'react-time-ago'
import { ISafe } from '../types';
import './styles.css';
import { savedAmount, lastDepositDate, lastWithdrawalDate } from '../utils'

function Safe(props: { safe: ISafe }) {
  const { safe }= props
  const safeNameText = `הקופה של ${safe.name}`
  const savingsAmount = `יש לי ${savedAmount(safe)} שקלים בקופה`
  const goalText = `המטרה הבאה שלי: ${safe.goalName} במחיר ${safe.goalAmount} שקלים`
  const lastDeposit = `הפקדה אחרונה בוצעה `
  const lastWithrawal = `משיכה אחרונה בוצעה`
  const daysUntilBonus = `עוד 10 ימים עד לבונוס הבא!`

  return (
    <Card
       bg={'info'}
       border={'info'}
       className="mb-2 safe"
     >
     <Card.Header as="h2">{safeNameText}</Card.Header>
      <Card.Img variant="top" src={safe.photoUrl} />
      <Card.Body>
        <Card.Text>{savingsAmount}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{goalText}</ListGroup.Item>
        <ListGroup.Item>
          {lastDeposit}
          <ReactTimeAgo date={lastDepositDate(safe)} locale="he-il"/>
        </ListGroup.Item>
        <ListGroup.Item>
          {lastWithrawal}
          <ReactTimeAgo date={lastWithdrawalDate(safe)} locale="he-il"/>
        </ListGroup.Item>
        <ListGroup.Item>{daysUntilBonus}</ListGroup.Item>
     </ListGroup>
    </Card>
  );
}
// <Card.Img variant="top" src="https://c1.wallpaperflare.com/preview/664/611/663/child-happy-smiling-son-man-bebe.jpg" />
export default Safe;
//   return (
//     <Card >
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }
