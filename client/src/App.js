import { useEffect, useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Intro from './components/Intro';
import Interface from './components/Interface';
const App = () => {
  const [link, setLink] = useState(null);

  const handleLink = (link_id) => {
    setLink(link_id);
  };
  const reset = () => {
    setLink(null);
  };

  useScript('https://cdn.belvo.io/belvo-widget-1-stable.js');

  return (
    <Container className='p-5'>
      <h1 className='header'>Juan Dominguez - Belvo Demo App</h1>
      <div className>
        <Intro link={link} handleLink={handleLink}></Intro>
        <Interface link={link} reset={reset}></Interface>
      </div>
    </Container>
  );
};

const useScript = (src) => {
  useEffect(() => {
    const node = document.createElement('script');
    node.src = src;
    document.head.appendChild(node);
  }, [src]);
};

export default App;
