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

<<<<<<< HEAD
=======
  const reset = () => {
    setLink(null);
  };

>>>>>>> f3380da (Pushing entire app after corrupted git file)
  useScript('https://cdn.belvo.io/belvo-widget-1-stable.js');

  return (
    <Container className='p-5'>
      <h1 className='header'>Juan Dominguez - Belvo Demo App</h1>
      <div className>
        <Intro link={link} handleLink={handleLink}></Intro>
<<<<<<< HEAD
        <Interface link={link}></Interface>
=======
        <Interface link={link} reset={reset}></Interface>
>>>>>>> f3380da (Pushing entire app after corrupted git file)
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
