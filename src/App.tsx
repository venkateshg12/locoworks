import MainPage from './components/MainPage';
import Page1 from './components/Page1';
import LocomotiveScroll from 'locomotive-scroll';
import Page2 from './components/Page2';

const App = () => {
  const locomotive = new LocomotiveScroll();
  return (
    <div>
      <MainPage />
      <Page1 />
      <Page2 />
    </div>
  )
}

export default App;
