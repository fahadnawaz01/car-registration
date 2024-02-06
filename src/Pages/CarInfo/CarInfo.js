import React, { useState, useEffect } from "react";
import { getContractInstance } from "../../contract";
import CarDetails from "../../Components/carinfo/CarDetails";
import AdditionalInfo from "../../Components/carinfo/AdditionalInfo";
import "./CarInfo.css";
import { useNavigate } from "react-router-dom";
const CarInfoPage = () => {
  const [carInfo, setCarInfo] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data here (if applicable)
    localStorage.removeItem("ContractId"); // Example of clearing a user token
    window.location.href = "/"; // Redirect to homepage
  };

  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        const contract = await getContractInstance(
          localStorage.getItem("ContractId")
        );
        const carDetails = await contract.methods.getCarDetails().call();
        const additionalDetails = await contract.methods
          .additionalDetails()
          .call();

        setCarInfo(carDetails);
        setAdditionalInfo(additionalDetails);
        console.log(additionalDetails);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarInfo();
  }, []);

  return (
    <div>
      {loading && <div>Loading car information...</div>}
      {error && <div>Error fetching car information: {error.message}</div>}
      {carInfo && (
        <div className="carInfoPage">
          <CarDetails carData={carInfo} />
          <AdditionalInfo additionalData={additionalInfo} />
          <div className="buttoncontainer">
            <button
              className="transferButton"
              onClick={() => {
                navigate("/transfer");
              }}
            >
              Transfer
            </button>
            <button
              className="updateButton"
              onClick={() => {
                navigate("/update");
              }}
            >
              Update
            </button>
            <button className="logoutButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarInfoPage;
