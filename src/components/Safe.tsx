import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ISafe } from '../types';

function Safe(props: { safe: ISafe }) {
  const { safe }= props
  const safeNameText = `הקופה של ${safe.name}`
  const savingsAmount = `יש לי 15 שקלים בקופה`
  const goalText = `המטרה הבאה שלי: לרכוש ${safe.goalName} במחיר ${safe.goalAmount} שקלים`
  const lastDeposit = `הפקדה אחרונה בוצעה לפני 6 ימים`
  const lastWithrawal = `משיכה אחרונה בוצעה לפני 10 ימים`
  const daysUntilBonus = `עוד 10 ימים עד לבונוס הבא!`


  return (
    <Card
       bg={'light'}
       border={'info'}
       style={{ width: '30rem' }}
       className="mb-2"
     >
     <Card.Header as="h2">{safeNameText}</Card.Header>
      <Card.Img variant="top" src={safe.photoUrl} />
      <Card.Body>
        <Card.Text>{savingsAmount}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
       <ListGroup.Item>{goalText}</ListGroup.Item>
       <ListGroup.Item>{lastDeposit}</ListGroup.Item>
       <ListGroup.Item>{lastWithrawal}</ListGroup.Item>
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
