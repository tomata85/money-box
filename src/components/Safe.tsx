import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ISafe } from '../types';

function Safe(props: { safe: ISafe }) {
  const { safe }= props
  return (
    <Card
       bg={'info'}
       key={'info'}
       style={{ width: '40rem' }}
       className="mb-2"
     >
      <Card.Img variant="top" src={safe.photoUrl} />
      <Card.Body>
        <Card.Title>{safe.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
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
