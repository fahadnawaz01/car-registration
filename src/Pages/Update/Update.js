import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "./Update.css";
import { getContractInstance } from "../../contract";
import web3 from "../../web3";

const UpdatePage = () => {
  const [ownerName, setOwnerName] = useState("");
  const [ownerBirthdate, setOwnerBirthdate] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [insuranceDetails, setInsuranceDetails] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    try {
      const contract = await getContractInstance(
        localStorage.getItem("ContractId")
      );

      await contract.methods
        .updateCarDetails(
          carNumber,
          insuranceDetails,
          model,
          color,
          registrationDate,
          ownerName,
          ownerBirthdate
        )
        .send({ from: accounts[0], gas: "1000000" });

      navigate("/carInfo");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateAdditionalInfo = () => {
    navigate("/registration2"); // Redirect to registration2 page
  };

  return (
    <div className="reg">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="registration-header">Update Car Information</h2>

        <label className="form-label">
          Owner Name:
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            className="owner-name-input"
          />
        </label>

        <label className="form-label">
          Owner Birthdate:
          <input
            type="date"
            value={ownerBirthdate}
            onChange={(e) => setOwnerBirthdate(e.target.value)}
            required
            className="owner-birthdate-input"
          />
        </label>

        <label className="form-label">
          Car Number:
          <input
            type="text"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            required
            className="car-number-input"
          />
        </label>

        <label className="form-label">
          Model:
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
            className="car-model-input"
          />
        </label>

        <label className="form-label">
          Color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
            className="car-color-input"
          />
        </label>

        <label className="form-label">
          Registration Date:
          <input
            type="date"
            value={registrationDate}
            onChange={(e) => setRegistrationDate(e.target.value)}
            required
            className="registration-date-input"
          />
        </label>

        <label className="form-label insurance-details-label">
          Insurance Details:
          <textarea
            value={insuranceDetails}
            onChange={(e) => setInsuranceDetails(e.target.value)}
            required
            className="insurance-details-textarea"
          />
        </label>

        <button type="submit" className="register-button">
          Update
        </button>
      </form>

      <button
        className="update-additional-info-button"
        onClick={handleUpdateAdditionalInfo}
      >
        Update Additional Information
      </button>
    </div>
  );
};

export default UpdatePage;
