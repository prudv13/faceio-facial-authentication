import { Container } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useEffect } from 'react';
import './App.css'

function App() {

  let faceio;
  useEffect(()=>{
    faceio = new faceIO("fioa2526");
  },[]);

  const handleSignIn = async() => {
    try{
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "",
          pin: ""
        }
      });

      console.log(`Uique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}`);
    }
    catch(error){
      console.log(error);
    }
  };

  const handleLogIn = async()=>{
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(`Unique Facial ID: ${response.facialId}
      PayLoad: ${response.payload}`);
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <section className='section-styling'>
            <h1 className='header-text'>FACIAL AUTHENTICATION</h1>
            <Card className='scanner-img'>
              <img src="../face-scanner.gif" width="330" />
            </Card>
            <div className='buttons'>
            <button className='btn-styling' onClick={handleSignIn}>Sign Up</button>
            <button className='btn-styling'  onClick={handleLogIn}>Log In</button>
            </div>
            <p className='note'>note: refresh and login after sign up</p>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default App
