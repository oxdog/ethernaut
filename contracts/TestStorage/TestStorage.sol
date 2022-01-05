pragma solidity ^0.4.0;

// This is not a level in ethernaut
// it's just for practice purpose and I did not want to setup an extra project for it
// https://medium.com/aigang-network/how-to-read-ethereum-contract-storage-44252c8af925

contract TestStorage {
    // Slot #0
    uint256 storeduint1 = 15;
    // not store
    uint256 constant constuint = 16;
    // Slot #1
    uint128 investmentsLimit = 17055; // 16 bytes
    uint32 investmentsDeadlineTimeStamp = uint32(now); // 2 bytes

    // Slot#2
    bytes16 string1 = "test1";
    // Slot#3
    bytes32 string2 = "test1236";
    // Slot#4
    string string3 = "lets string something";

    mapping(address => uint256) public uints1;
    mapping(address => DeviceData) public structs1;

    uint256[] uintarray;
    DeviceData[] deviceDataArray;

    struct DeviceData {
        string deviceBrand;
        string deviceYear;
        string batteryWearLevel;
    }

    function testStorage() {
        address address1 = 0xbccc714d56bc0da0fd33d96d2a87b680dd6d0df6;
        address address2 = 0xaee905fdd3ed851e48d22059575b9f4245a82b04;

        uints1[address1] = 88;
        uints1[address2] = 99;

        var dev1 = DeviceData("deviceBrand", "deviceYear", "wearLevel");
        var dev2 = DeviceData("deviceBrand2", "deviceYear2", "wearLevel2");

        structs1[address1] = dev1;
        structs1[address2] = dev2;

        uintarray.push(8000);
        uintarray.push(9000);

        deviceDataArray.push(dev1);
        deviceDataArray.push(dev2);
    }

    function getKey() external view returns (bytes32) {
        return keccak256(0xbccc714d56bc0da0fd33d96d2a87b680dd6d0df6 + 5);
    }
}
