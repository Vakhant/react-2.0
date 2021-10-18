import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';

const App = (props) => {
  return (

    <div className="App">

      <Header/>

        <main>
          <div className="wrap">
            <Aside/>
            <Content state={props.state} dispatch={props.dispatch} store={props.store}/>
          </div>
        </main>

    </div>
  );
}

export default App;