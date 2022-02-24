import { Row,Col } from 'react-bootstrap';
import { Button,Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Hotels() {
  const Hotels=[{id:1,nom:"Ibrostar",ville:"Monastir"},
                {id:2,nom:"Mouradi",ville:"Sousse"},
                {id:3,nom:"Movempick",ville:"Gammarth"},
                {id:4,nom:"Africa",ville:"Tunis"},
                {id:5,nom:"Ibrostar",ville:"Monastir"},
                {id:6,nom:"Mouradi",ville:"Sousse"},
                {id:7,nom:"Movempick",ville:"Gammarth"},
                {id:8,nom:"Africa",ville:"Tunis"},
];
let navigate = useNavigate(); 

  return (
    <div className="App">
    <div className='container' style={{marginTop:"60px", }}>
       
    <Row xs={1} md={4} className="g-4">
  {Hotels.map((item) => (
    <Col key={item.id}>
      <Card >
        <Card.Img variant="top" src="https://www.ahstatic.com/photos/5451_ho_00_p_1024x768.jpg"  />
        <Card.Body>
          <Card.Title>{item.nom}</Card.Title>
          <Card.Text>
           {item.ville}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate('/login')}>Rate</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
    </div>
  );
}

export default Hotels;