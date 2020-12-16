import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../../shared/Notifications';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const MusicForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const { id } = useParams();

  const handleChange = event => {
    inputs[event.target.name] = event.target.value;
    setInputs(
      inputs
    );
  };
  
  const handleSubmit = event => {
    Axios.post(
      `${globalStore.REACT_APP_ENDPOINT}/${endpoint}`,
      {
        id: id ? id : null,
        data: inputs
      }
      )
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error creating this music: ${error.message}`
      });
    });
    setRedirect(true);
  };
  

  if (redirect) return <Redirect to="/"/>;
  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group>
        <Form.Label>Artist</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="artist" 
          placeholder="My Chemical Romance"
          defaultValue={inputs.artist}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Title</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="title" 
          placeholder="Helena"
          defaultValue={inputs.title}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Genre</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="genre" 
          placeholder="Emo"
          defaultValue={inputs.genre}
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}
 
export default MusicForm;