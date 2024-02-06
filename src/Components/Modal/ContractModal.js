import React, { useRef } from "react";

const ContractInfoModal = ({ contractId, onClose }) => {
  const contractIdRef = useRef(null);

  const copyContractId = async () => {
    try {
      await navigator.clipboard.writeText(contractId);
      // Provide success feedback (e.g., visual indicator or message)
    } catch (error) {
      // Handle errors gracefully (e.g., display an error message)
      console.error("Clipboard write failed:", error);
    }
  };

  return (
    <div className="contra_modal">
      <div className="contra_modal-content">
        <h2>Contract ID</h2>
        <p>
          This is the unique identifier for your car registration contract.
          Please save the following hash as it will be needed to access the
          contract in the future:
        </p>
        <p ref={contractIdRef}>{contractId}</p>
        <button onClick={copyContractId}>Copy to Clipboard</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContractInfoModal;
