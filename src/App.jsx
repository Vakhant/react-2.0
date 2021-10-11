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
            <Content state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
          </div>
        </main>

    </div>
  );
}

export default App;