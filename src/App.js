import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Helpcomponent from './components/Helpcomponent';
import Secondcomponent from './components/Secondcomponent';
import Usercomponent from './components/Usercomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to learning react </h1>
      <h2>react is fun</h2>
      </header>
       {/* {Below we render /display our first component} */}
      <Firstcomponent />
        {/* {Below we render /display our second component} */}
      <Secondcomponent />
      {/* {Below we render /display our User component} */}
      <Usercomponent />
      {/* {Below we render /display our Help component} */}
      <Helpcomponent />

    </div>
  );
}

export default App;
// JSX 
