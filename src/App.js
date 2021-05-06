import logo from './logo.svg';
import kalia from './Kalia.jpg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "./background";
import { Navbar, Nav, Col, Row, Container, Toast} from 'react-bootstrap';
import { Linkedin } from 'grommet-icons';
import 'typeface-berkshire-swash';
import 'typeface-lato';

function App() {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [counter, setCounter] = useState(0);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const handlePopClick = () => {
    setCounter(prevcount => prevcount + 1);
    console.log(counter);
    if(counter == 1) {
      setShowA(true);
      //setCounter(0);
    }
    if(counter == 2) {
      setShowB(true);
      setCounter(0);
    }
  };

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      <Navbar bg="light" expand="lg" sticky="top" style={{ fontFamily: 'Berkshire Swash'}}>
        <Navbar.Brand href="#home">Kalia Lee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">Background</Nav.Link>
            <Nav.Link href="#">Resume</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>

       {/* <Col xs={9} style={{fontFamily: 'Lato'}}>9*/}
          <Toast show={showA} onClose={toggleShowA} delay={5000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Hey you!</strong>
              <small>Just Now</small>
            </Toast.Header>
            <Toast.Body>Thanks for stopping by! I appreciate you. 🤗</Toast.Body>
          </Toast>

          <Toast show={showB} onClose={toggleShowB} delay={5000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">If you find this message...</strong>
              <small>Just Now</small>
            </Toast.Header>
            <Toast.Body>Hehe thanks for hanging around. 🤪🤭</Toast.Body>
          </Toast>
        {/*</Col>*/}

        <Row>

          <Col id="photo" style={{ margin: "30px", marginTop: "50px"}}>
            <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', position: 'relative'}}>
              <Card.Img variant="top" src={kalia} /> 
            </Card>
            <Button id="toastButton" size="large" variant="light" onClick={handlePopClick}></Button>
          </Col>

          <Col id="info" style={{ margin: "30px", marginTop: "50px"}}>
            <div id="info-text" style={{textAlign: 'left', backgroundColor: 'white', padding: '10px'}}> 
              <h1 style={{fontFamily: 'Berkshire Swash', fontSize: '65px'}}>Kalia Lee</h1>
              <p style={{fontFamily: 'Lato'}}>Software Engineer</p>
              <p style={{fontFamily: 'Lato'}}>Hi, I'm Kalia Lee. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin id metus ut ante tincidunt tempor a et dolor. 
                Maecenas tempus dui et nisl malesuada pellentesque at placerat diam. 
                Phasellus vel tortor dapibus, ullamcorper ipsum et, sodales ante. 
                Vivamus ornare feugiat mauris et interdum. Suspendisse vel libero sed urna luctus venenatis. 
              <br></br>
              <br></br>
              <Button size="small" variant="light" href="http://www.linkedin.com/in/kalia-lee-se/" target="_blank" ><Linkedin size="medium"></Linkedin></Button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
        {/*<Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={kalia} />
          <Card.Body>
            <Card.Title class="text-primary">About</Card.Title>
            <Card.Text class="text-primary">
              This is Kalia's website.
            </Card.Text>
            <Link to="/background"><Button variant="primary"> Software Engineer </Button></Link>
          </Card.Body>
        </Card>*/}
      

      {/*<Switch>
            
            <Route path="/background">
              <Background />
            </Route>
          </Switch>*/}
      {/*</header>  */}  
    </div>
    
  );
}

export default App;
