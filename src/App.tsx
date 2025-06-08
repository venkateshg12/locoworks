import MainPage from './components/MainPage';
import Page1 from './components/Page1';
import LocomotiveScroll from 'locomotive-scroll';
import Page2 from './components/Page2';
import { useEffect } from 'react';

const App = () => {
  // const locomotive = new LocomotiveScroll();
  useEffect(() => {
  const scroll = new LocomotiveScroll();
  // use scroll here
  return () => {
    scroll.destroy(); // cleanup
  };
}, []);
  return (
    <div>
      <MainPage />
      <Page1 />
      <Page2 />
    </div>
  )
}

export default App;
