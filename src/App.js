import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import UserInputs from "./UserInputs";
import Events from "./Events";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<UserInputs/>}/>
    <Route  path='/events' element={<Events/>}/>
    </Routes>
   </BrowserRouter>
 

  );
}

export default App;
