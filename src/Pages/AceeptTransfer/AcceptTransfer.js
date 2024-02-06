import React, { useContext, useState } from "react";
import classes from "./AcceptTransfer.css";
import web3 from "../../web3";
import { getContractInstance } from "../../contract";
import DataContext from "../../Components/store/context";
import { useNavigate } from "react-router-dom";
import web33 from "../../web3";

const AcceptTransfer = () => {
  const [contractId, setContractId] = useState("");
  const dataCtx = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setContractId(event.target.value);
  };

  const onSubmit = async () => {
    dataCtx.storeContractId(contractId);
    const contract = await getContractInstance(contractId);
    const accounts = await web33.eth.getAccounts();

    if (accounts[0] != (await contract.methods.newOwner().call())) {
      alert("There is no transfer request with this account");
    } else {
      console.log("right");
      navigate("/accept")
    }
  };

  return (
    <div className="accept-page">
      <div className="animated-box1">
        <h2 className="animated-text1">Enter Car Contract ID</h2>
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

export default AcceptTransfer;
