pragma solidity ^0.4.26;

contract CarOwnershipTransfer {
    address public owner; // Current owner of the car
    address public newOwner; // Address of the new owner
    
    struct CarDetails {
        string carNumber;
        string insuranceDetails;
        string model;
        string color;
        string registrationDate;
        string ownerName;
        string ownerBirthDate;
        // Add more details as needed
    }

 struct AdditionalCarDetails {
        string vinNumber;
        string engineType;
        string transmissionType;
        uint256 mileage;
        string fuelType;
        string bodyType;
        uint8 numberOfDoors;
        uint8 numberOfSeats;
    }

    AdditionalCarDetails public additionalDetails;
    
    CarDetails public carInfo;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner, string carNumber);

     constructor(
        string memory _carNumber,
        string memory _insuranceDetails,
        // **Removed model as argument**
        string memory _model,
        string memory _color,
        string memory _registrationDate,
        string memory _ownerName,
        string memory _ownerBirthDate
    ) public {
        owner = msg.sender; // Set the contract creator as the initial owner
        carInfo = CarDetails(
            _carNumber,
            _insuranceDetails,
            // **Removed model assignment**
            _model,
            _color,
            _registrationDate,
            _ownerName,
            _ownerBirthDate
        );
    }

    // Modifier to restrict access to only the current owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the current owner can perform this action");
        _;
    }

     function setAdditionalCarDetails(
        string memory _vinNumber,
        string memory _engineType,
        string memory _transmissionType,
        uint256 _mileage,
        string memory _fuelType,
        string memory _bodyType,
        uint8 _numberOfDoors,
        uint8 _numberOfSeats
    ) public {
        additionalDetails = AdditionalCarDetails(
            _vinNumber,
            _engineType,
            _transmissionType,
            _mileage,
            _fuelType,
            _bodyType,
            _numberOfDoors,
            _numberOfSeats
        );
    }

    // Start the ownership transfer process
    function initiateOwnershipTransfer(address _newOwner) public onlyOwner {
        require(_newOwner != address(0), "Invalid new owner address");
        newOwner = _newOwner;
    }

    // Accept ownership transfer by the new owner
  function acceptOwnershipTransfer(
    string memory _newOwnerName,
    string memory _newOwnerBirthDate // Date of birth in ISO 8601 format (YYYY-MM-DD)
) public {
    require(msg.sender == newOwner, "Only the new owner can accept the ownership transfer");

    emit OwnershipTransferred(owner, newOwner, carInfo.carNumber);
    owner = newOwner;
    newOwner = address(0);

    // Update car details with new owner's information
    carInfo.ownerName = _newOwnerName;
    carInfo.ownerBirthDate = _newOwnerBirthDate;
}

    // Cancel the ownership transfer
    function cancelOwnershipTransfer() public onlyOwner {
        newOwner = address(0);
    }

    // Check the current owner of the car
    function getCurrentOwner() public view returns (address) {
        return owner;
    }

    // Get car details
    function getCarDetails() public view returns (
        string memory carNumber,
        string memory insuranceDetails,
        string memory model,
        string memory color,
        string memory registrationDate,
        string memory ownerName,
        string memory ownerBirthDate
    ) {
        return (
            carInfo.carNumber,
            carInfo.insuranceDetails,
            carInfo.model,
            carInfo.color,
            carInfo.registrationDate,
            carInfo.ownerName,
            carInfo.ownerBirthDate
        );
    }

    // Update car details, only accessible by the current owner
    function updateCarDetails(
        string memory _carNumber,
        string memory _insuranceDetails,
        string memory _model,
        string memory _color,
        string memory _registrationDate,
        string memory _ownerName,
        string memory _ownerBirthDate
    ) public onlyOwner {
        carInfo.carNumber = _carNumber;
        carInfo.insuranceDetails = _insuranceDetails;
        carInfo.model = _model;
        carInfo.color = _color;
        carInfo.registrationDate = _registrationDate;
        carInfo.ownerName = _ownerName;
        carInfo.ownerBirthDate = _ownerBirthDate;
    }


}