import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>

    <div className="App">

      <Header/>

        <main>
          <div className="wrap">
            <Aside/>
            <Content/>
          </div>
        </main>

    </div>
    </BrowserRouter>
  );
}

export default App;