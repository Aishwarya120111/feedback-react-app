//import logo from './logo.svg';
import './App.css';
import {Container, Button, Form} from 'react-bootstrap';
import Amplify from "aws-amplify";
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addContact() {
  const data = {
    body: {
      firstname: formState.firstname,
      lastname: formState.lastname,
      email: formState.email,
      feedback: formState.feedback
    }
  };

  console.log(data);
  const apiData = await API.post('feedbackformappapi', '/feedbackapi', data);
  console.log({ apiData });
  alert('Feedback Sent Successfully');
}

const formState = { firstname: '', lastname: '', email: '', feedback: '' };

function updateFormState(key, value) {
  formState[key] = value;
}

function App() {
  return (
    <Container>
    <div>
      <h3>Feedback Form</h3>
      <br/>
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First Name" onChange={e => updateFormState('firstname', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>LastName</Form.Label>
            <Form.Control placeholder="Last Name" onChange={e => updateFormState('lastname', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>MailId</Form.Label>
            <Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Feedback</Form.Label>
            <Form.Control placeholder="Feedback" onChange={e => updateFormState('feedback', e.target.value)} />
          </Form.Group>
          <Button onClick={addContact}>Send a message</Button>
        </Form>
      </div>
    </Container>
  );
}

export default App;

