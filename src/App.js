import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Ofertas de la Semana</Card.Title>
            <Card.Text>
              <h2>Ofertonononnnn.....</h2>
            </Card.Text>
            <Button variant="primary">Visitanos en Facebook!!!</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
