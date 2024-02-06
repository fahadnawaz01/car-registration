import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import RegisteredPage from "./Pages/Registered car/RegisteredPage";
import web3 from "./web3";
import CarInfoPage from "./Pages/CarInfo/CarInfo";
import AcceptTransfer from "./Pages/AceeptTransfer/AcceptTransfer";
import RegistrationPage from "./Pages/Registration/Registration";
import RegistrationPage2 from "./Pages/Registration/Registration2";
import UpdatePage from "./Pages/Update/Update";
import TransferPage from "./Pages/Transfer/Transfer";
import AcceptPage from "./Pages/AceeptTransfer/Accept";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registered" element={<RegisteredPage />} />
      <Route path="/carInfo" element={<CarInfoPage />} />
      <Route path="/acceptTransfer" element={<AcceptTransfer />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/registration2" element={<RegistrationPage2 />} />
      <Route path="/update" element={<UpdatePage />} />
      <Route path="/transfer" element={<TransferPage />} />
      <Route path="/accept" element={<AcceptPage />} />
    </Routes>
  );
}

export default App;
