import React, { useState } from "react";
import "./Accept.css";
import { getContractInstance } from "../../contract";
import { useNavigate } from "react-router-dom";
import web3 from "../../web3";

const AcceptPage = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const accounts = await web3.eth.getAccounts();
    try {
      const contract = await getContractInstance(
        localStorage.getItem("ContractId")
      );

      await contract.methods
        .acceptOwnershipTransfer(name, birthdate)
        .send({ from: accounts[0], gas: "1000000" });
    } catch (error) {
      console.log(error);
    }
    alert("Transfer Sucessful");
    navigate("/carInfo");
    // Perform validation checks and data processing here (if needed)

    // Example form submission (replace with your actual submission logic)
    console.log("Submitting form:", { name, birthdate });

    // Clear form fields after submission (optional)
    setName("");
    setBirthdate("");
  };

  return (
    <div className="accept-page1">
      <form className="accept-form1" onSubmit={handleSubmit}>
        <h2 className="accept-form-header">Acceptance Form</h2>

        <label className="accept-form-label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="accept-form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="accept-form-label" htmlFor="birthdate">
          Birthdate:
        </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          className="accept-form-input"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />

        <button className="accept-form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AcceptPage;
