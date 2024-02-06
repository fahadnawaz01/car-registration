import React, { useContext, useState } from "react";
import classes from "./RegisteredPage.css";
import web3 from "../../web3";
import { getContractInstance } from "../../contract";
import DataContext from "../../Components/store/context";
import { useNavigate } from "react-router-dom";

const RegisteredPage = () => {
  const [contractId, setContractId] = useState("");
  const dataCtx = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setContractId(event.target.value);
  };

  const onSubmit = async () => {
    dataCtx.storeContractId(contractId);
    const contract = await getContractInstance(contractId);

    console.log(await contract.methods.getCarDetails().call());
    navigate("/carInfo");
  };

  return (
    <div className="contract-page">
      <div className="animated-box">
        <h2 className="animated-text">Enter Car Contract ID</h2>
        <input
          type="text"
          value={contractId}
          onChange={handleChange}
          placeholder="Contract ID"
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default RegisteredPage;
