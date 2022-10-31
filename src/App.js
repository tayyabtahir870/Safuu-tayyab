import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Hero from "./Components/Elements/Hero";
import Account from "./Components/Elements/Account";
import Swap from "./Components/Elements/Swap";
import Calculator from "./Components/Elements/Calculator";
import Analytics from "./Components/Elements/Analytics";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Hero />} />
            <Route index path="/account" element={<Account />} />
            <Route index path="/swap" element={<Swap />} />
            <Route index path="/calculator" element={<Calculator />} />
            <Route index path="/analytics" element={<Analytics />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
