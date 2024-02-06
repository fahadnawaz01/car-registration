import { Link } from "react-router-dom";
import Button from "../../Components/HomePage/Button";
import classes from "./HomePage.css";
import { useNavigate } from "react-router-dom";
import MetaMaskPopup from "../../Components/HomePage/MetaMaskPopup";

const HomePage = () => {
  const navigate = useNavigate();
  const handleAcessClick = () => {
    navigate("/registered");
  };

  const handleTransferClick = () => {
    navigate("/acceptTransfer");
  };

  const handleRegClick = () => {
    navigate("/registration");
  };
  return (
    <>
      <MetaMaskPopup />
      <div className="home">
        <div className="button-container">
          <Button
            style={{
              padding: "20px 30px",
              fontSize: "18px",
            }}
            onClick={handleAcessClick}
          >
            Access Registered Car
          </Button>
          <Button
            style={{
              padding: "20px 30px",
              fontSize: "18px",
            }}
            onClick={handleRegClick}
          >
            Registration
          </Button>
          <Button
            style={{
              padding: "20px 30px",
              fontSize: "18px",
            }}
            onClick={handleTransferClick}
          >
            Accept Transfer
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
