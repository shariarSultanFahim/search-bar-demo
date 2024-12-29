import data from "../data.json";
import { useState } from "react";
import Result from "./Result";

const DropdownSearch = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [model, setModel] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [result, setResult] = useState(null);

  // Extract keys for dropdowns
  const vehicleTypes = Object.keys(data);
  const vehicleMakes = vehicleType ? Object.keys(data[vehicleType]) : [];
  const models = vehicleMake ? Object.keys(data[vehicleType][vehicleMake]) : [];
  const fuelTypes =
    model && data[vehicleType][vehicleMake][model]
      ? Object.keys(data[vehicleType][vehicleMake][model])
      : [];

  const handleSearch = () => {
    if (vehicleType && vehicleMake && model && fuelType) {
      const resultData = data[vehicleType][vehicleMake][model][fuelType];
      setResult(resultData);
    }
  };

  const resetFields = (field) => {
    if (field === "vehicleType") {
      setVehicleMake("");
      setModel("");
      setFuelType("");
      setResult(null)
    } else if (field === "vehicleMake") {
      setModel("");
      setFuelType("");
      setResult(null)
    } else if (field === "model") {
      setFuelType("");
      setResult(null)
    }
    else if (field === "fuel") {
      setResult(null)
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        {/* Vehicle Type Dropdown */}
        <div className="flex flex-col md:flex-row md:flex-1 justify-between gap-4 ">
          <div className="w-full ">
            <lebel>
              <h1 className="text-[12px] text-[#9b9b9b] tracking-[1px] leading-[15px]">
                SELECT VEHICLE
              </h1>
            </lebel>
            <select
              className="w-full text-[18px] text-[#231f20] pr-[25px] border-b-[1px] border-[#3b3b3b] outline-none"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
                resetFields("vehicleType");
              }}
            >
              <option value="">Select</option>
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Vehicle Make Dropdown */}
          <div className="w-full ">
            <lebel>
              <h1 className="text-[12px] text-[#9b9b9b] tracking-[1px] leading-[15px]">
                VEHICLE MAKE
              </h1>
            </lebel>
            <select
              className="w-full text-[18px] text-[#231f20] pr-[25px] border-b-[1px] border-[#3b3b3b] outline-none"
              value={vehicleMake}
              onChange={(e) => {
                setVehicleMake(e.target.value);
                resetFields("vehicleMake");
              }}
              disabled={!vehicleType}
            >
              <option value="">Select</option>
              {vehicleMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          {/* Model Dropdown */}
          <div className="w-full ">
            <lebel>
              <h1 className="text-[12px] text-[#9b9b9b] tracking-[1px] leading-[15px]">
                MODEL
              </h1>
            </lebel>
            <select
              className="w-full text-[18px] text-[#231f20] pr-[25px] border-b-[1px] border-[#3b3b3b] outline-none"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
                resetFields("model");
              }}
              disabled={!vehicleMake}
            >
              <option value="">Select</option>
              {models.map((mod) => (
                <option key={mod} value={mod}>
                  {mod}
                </option>
              ))}
            </select>
          </div>

          {/* Fuel Type Dropdown */}
          <div className="w-full ">
            <lebel>
              <h1 className="text-[12px] text-[#9b9b9b] tracking-[1px] leading-[15px]">
                FUEL
              </h1>
            </lebel>
            <select
              className="w-full text-[18px] text-[#231f20] pr-[25px] border-b-[1px] border-[#3b3b3b] outline-none"
              value={fuelType}
              onChange={(e) => {
                setFuelType(e.target.value);
                resetFields("fuel");
              }}
              disabled={!model}
            >
              <option value="">Select</option>
              {fuelTypes.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="w-40 ">
          <button
            className="w-full px-[32px] py-[12px] bg-[#83B341] hover:cursor-pointer "
            onClick={handleSearch}
            disabled={!fuelType}
          >
            <h1 className="text-white text-[15px] tracking-[1.5px] font-bold">
              FIND NOW
            </h1>
          </button>
        </div>
      </div>

      {/* Display Result */}
      {result && <Result model={model} fuelType={fuelType} result={result}/>}
    </div>
  );
};

export default DropdownSearch;
