import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from './Components/Layouts/Base';
import Hero from './Components/Elements/Hero';
import Account from './Components/Elements/Account';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/hero" element={<Hero/>} />
            <Route index path="/account" element={<Account/>} />
          
            
          </Routes>
          </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
