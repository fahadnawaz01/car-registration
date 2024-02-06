import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MetaMaskPopup = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Important Notice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Important Notice</h2>
        <p>
          To interact with the features of this website, please ensure you have
          the following:
        </p>
        <ul>
          <li>
            <a href="https://metamask.io/" target="_blank" rel="noreferrer">
              MetaMask browser extension
            </a>{" "}
            installed and an account set up.
          </li>
          <li>Sepolia currency (SEP) available in your MetaMask wallet.</li>
        </ul>
        <p>If you haven't already, please follow these steps:</p>
        <ol>
          {/* ...instructions for MetaMask installation and account setup... */}
          <li>
            Add Sepolia currency to your MetaMask wallet:
            <ul>
              <li>Click on the "Add Token" button in your MetaMask wallet.</li>
              <li>
                Select "Custom Token" and enter the Sepolia token contract
                address.
              </li>
              <li>Click "Next" and "Add Tokens" to finalize the process.</li>
            </ul>
          </li>
          <li>
            Acquire Sepolia currency through a compatible exchange or faucet.
          </li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default MetaMaskPopup;
