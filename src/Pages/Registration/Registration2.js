import React, { useState } from "react";
import "./Registration2.css"; // Assuming you have a shared CSS file
import { getContractInstance } from "../../contract";
import web3 from "../../web3";
import { useNavigate } from "react-router-dom";
import ContractInfoModal from "../../Components/Modal/ContractModal";

function RegistrationPage2() {
  const [bodyType, setBodyType] = useState("");
  const [engineType, setEngineType] = useState(false); // Checkbox
  const [mileage, setMileage] = useState("");
  const [numberOfDoors, setNumberOfDoors] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState("");
  const [transmissionType, setTransmissionType] = useState("");
  const [vinNumber, setVinNumber] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const accounts = await web3.eth.getAccounts();
    // Handle form submission here, e.g., send data to an API
    console.log("Submitting registration:");
    console.log("Body Type:", bodyType);
    console.log("Electric:", engineType);
    console.log("Mileage:", parseInt(mileage));
    console.log("Number of Doors:", parseInt(numberOfDoors));
    console.log("Number of Seats:", parseInt(numberOfSeats));
    console.log("Transmission Type:", transmissionType);
    console.log("VIN Number:", vinNumber);
    console.log("Fuel Type:", fuelType);

    try {
      const contract = await getContractInstance(
       localStorage.getItem("ContractId")
      );

      await contract.methods
        .setAdditionalCarDetails(
          vinNumber,
          engineType,
          transmissionType,
          parseInt(mileage),
          fuelType,
          bodyType,
          parseInt(numberOfDoors),
          parseInt(numberOfSeats)
        )
        .send({ from: accounts[0], gas: "1000000" });
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }

    // Reset form fields (optional)
    // setBodyType("");
    // setEngineType("");
    // setMileage("");
    // setNumberOfDoors("");
    // setNumberOfSeats("");
    // setTransmissionType("");
    // setVinNumber("");
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/carInfo");
  };

  return (
    <div className="reg2">
      <form onSubmit={handleSubmit} className="registration-form2">
        <h2 className="registration-header2">Car Registration 2</h2>

        <label className="form-label2">
          Body Type:
          <select
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
            required
            className="body-type-select"
          >
            <option value="">Please Select</option>
            <option value="sedan">Sedan</option>
            <option value="coupe">Coupe</option>
            <option value="suv">SUV</option>
            {/* Add more options as needed */}
          </select>
        </label>

        <label className="form-label2">
          Engine Type:
          <select
            value={engineType}
            onChange={(e) => setEngineType(e.target.value)}
            required
            className="body-type-select"
          >
            <option value="">Please Select</option>
            <option value="inline-4">Inline-4</option>
            <option value="inline-6">Inline-6</option>
            <option value="v6">V6</option>
            <option value="v8">V8</option>
            <option value="v10">V10</option>
            <option value="v12">V12</option>
            <option value="flat-4">Flat-4 (Boxer)</option>
            <option value="flat-6">Flat-6 (Boxer)</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
            <option value="rotary">Rotary</option>
          </select>
        </label>

        <label className="form-label2">
          Mileage:
          <input
            type="number"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            required
            className="mileage-input"
          />
        </label>

        <label className="form-label2">
          Number of Doors:
          <input
            type="number"
            value={numberOfDoors}
            onChange={(e) => setNumberOfDoors(e.target.value)}
            required
            className="number-of-doors-input"
          />
        </label>

        <label className="form-label2">
          Number of Seats:
          <input
            type="number"
            value={numberOfSeats}
            onChange={(e) => setNumberOfSeats(e.target.value)}
            required
            className="number-of-seats-input"
          />
        </label>

        <label className="form-label2">
          Fuel Type:
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            required
            className="body-type-select"
          >
            <option value="">Please Select</option>
            <option value="gasoline">Gasoline</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
            <option value="flex-fuel">Flex-Fuel</option>
            <option value="natural-gas">Natural Gas</option>
            <option value="hydrogen">Hydrogen</option>
            <option value="biodiesel">Biodiesel</option>
            {/* Add more options as needed, e.g., propane, ethanol */}
          </select>
        </label>

        <label className="form-label2">
          Transmission Type:
          <select
            value={transmissionType}
            onChange={(e) => setTransmissionType(e.target.value)}
            required
            className="transmission-type-select"
          >
            <option value="">Please Select</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
            {/* Add more options as needed */}
          </select>
        </label>

        <label className="form-label2">
          VIN Number:
          <input
            type="text"
            value={vinNumber}
            onChange={(e) => setVinNumber(e.target.value)}
            required
            className="vin_number"
          />
        </label>

        <button type="submit" className="register-button2">
          Submit
        </button>
      </form>

     
        {showModal && <ContractInfoModal
          contractId={localStorage.getItem("ContractId")}
          onClose={closeModal}
        />}
      
    </div>
  );
}
export default RegistrationPage2;
