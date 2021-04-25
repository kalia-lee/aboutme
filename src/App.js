import logo from './logo.svg';
import kalia from './Kalia.jpg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={kalia} />
          <Card.Body>
            <Card.Title class="text-primary">About</Card.Title>
            <Card.Text class="text-primary">
              This is Kalia's website.
            </Card.Text>
            <Button variant="primary"> Software Engineer </Button>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
