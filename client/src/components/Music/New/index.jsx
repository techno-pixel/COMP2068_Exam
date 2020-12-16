import React from 'react';
import MusicForm from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Music">
        Hi I'm a man-child.
      </Header>

      <Container>
        <MusicForm endpoint="music"/>
      </Container>
    </>
  );
}
 
export default New;