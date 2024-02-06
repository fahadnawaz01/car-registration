import React, { useContext, useState } from "react";
import web3 from "../../web3";
import { getContractInstance } from "../../contract";
import DataContext from "../../Components/store/context";
import { useNavigate } from "react-router-dom";
import "./Transfer.css";

const TransferPage = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  const onSubmit = async () => {
    const accounts = await web3.eth.getAccounts();
    try {
      const contract = await getContractInstance(
        localStorage.getItem("ContractId")
      );

      await contract.methods
        .initiateOwnershipTransfer(userId)
        .send({ from: accounts[0], gas: "1000000" });

      alert("Transfer Sucessfully intiated");
      localStorage.removeItem("ContractId");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contract-page2">
      <div className="animated-box2">
        <h2 className="animated-text">Enter User Hash ID</h2>
        <input
          type="text"
          value={userId}
          onChange={handleChange}
          placeholder="User ID"
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default TransferPage;
