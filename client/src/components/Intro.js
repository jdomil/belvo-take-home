import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Intro = () => {
  const openBelvoWidget = async () => {
    try {
      const response = await axios.get('/get_token');
      const access_token = response.data.access;
      window.belvoSDK
        .createWidget(access_token, {
          callback: (link, institution) => successCallbackFunction(link),
          onExit: (data) => onExitCallbackFunction(data),
          onEvent: (data) => console.log('data', data),
        })
        .build();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const successCallbackFunction = (link_id) => {
    localStorage.setItem('link', link_id);
  };

  const onExitCallbackFunction = (data) => {
    console.log('data', data);
  };

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
      <Button variant='primary' size='lg' onClick={openBelvoWidget}>
        Connect with Belvo
      </Button>
    </section>
  );
};

export default Intro;
