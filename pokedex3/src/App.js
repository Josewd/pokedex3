import './App.css';
import Router from './Router/Router';
import ContextComponents from './Global/ContextComponent';


function App() {


  return (
    <ContextComponents>
      <Router/>
    </ContextComponents>
  );
}

export default App;
