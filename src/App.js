import './App.css';
import Firstpage from './firstpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recrutador from './recrutador';
import Estudante from './study';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Firstpage/>}/>
            <Route path='Recrutador' element= {<Recrutador/>}/>
              <Route path='Estudante' element= {<Estudante/>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
