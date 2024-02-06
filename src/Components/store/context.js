import React, { createContext, useState } from "react";

const DataContext = createContext(null); // Neutral name

export const DataProvider = (props) => {
  const [contractId, setContractId] = useState("");

  const storeContractId = (id) => {
    localStorage.setItem("ContractId", id);
  };

  const logout = () => {
    localStorage.removeItem("ContractId");
  };

  const value = {
    contractId: localStorage.getItem("ContractId"),
    storeContractId,
    logout,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataContext;
