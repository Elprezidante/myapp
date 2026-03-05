import './App.css';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Helpcomponent from './components/Helpcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
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
        {/* {Below we render /display our Third component} */}
      <Thirdcomponent/>
        {/* {Below we render /display our Fourth component} */}
      <Fourthcomponent/>
      {/* {Below we render /display our Fifth component} */}
      <Fifthcomponent/>

    </div>
  );
}

export default App;
// JSX 
