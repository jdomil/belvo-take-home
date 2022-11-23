import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Intro from './components/Intro';
import Interface from './components/Interface';

const App = () => {
  useScript('https://cdn.belvo.io/belvo-widget-1-stable.js');

  return (
    <Container className='p-3'>
      <Intro></Intro>
      <Interface></Interface>
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
