import React from 'react';
import { Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <section>
      <h1 className='header'>Juan Dominguez - Belvo Demo App</h1>
      <h3 className='header-3'>
        This is a demo app for the Customer Engineer position at Belvo
      </h3>
      <hr />
      <p className='description'>
        Click the button below to open the Connect Widget. You will be prompted
        a list of banks to choose from. After picking one, you will need to go
        through an authentication process. After this, a link will be generated
        so that you can use the API endpoints in this demo app.
      </p>
      <Button variant='primary' size='lg'>
        Connect with Belvo
      </Button>
    </section>
  );
};

export default Intro;
