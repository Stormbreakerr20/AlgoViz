import React, { useEffect, useState } from "react";
import Reg_Drop from "./Reg_Drop";
import DatasetDrop from "./DatasetDrop";
import api from "../../../../api";

function Regression() {
  const [reg_type, setReg_type] = useState("Standard");
  const [degree, setDegree] = useState(0);
  const [reg_image, setReg_image] = useState(null);
  const [accuracy, setAccuracy] = useState(0);
  const [dataSet, setDataset] = useState("Dataset-1");

  const get_data_degree = async (reset) => {
    if (reset) {
      const result = await api.get(`/regression/0/${dataSet}/${reg_type}`);
      setReg_image(result.data.image);
      setAccuracy(result.data.accuracy);
    } else {
      const result = await api.get(
        `/regression/${degree}/${dataSet}/${reg_type}`
      );
      setReg_image(result.data.image);
      setAccuracy(result.data.accuracy);
    }
  };

  useEffect(() => {
    get_data_degree(false);
  }, [dataSet]);

  const handleChange = (e) => {
    setDegree(e.target.value);
  };

  const Refresh = () => {
    document.getElementById("degree").value = "";
    setDegree(0);
    get_data_degree(true);
  };

  return (
    <div className="flex w-[100%] justify-evenly">
      <div className="w-[300px] h-[55vh] rounded-xl justify-between bg-black flex flex-col items-center">
        <div className="flex-grow flex flex-col items-center gap-5 p-4 w-[100%]">
          <div className="w-[100%] overflow-visible h-[40px] z-20">
            <Reg_Drop setReg_type={setReg_type} reg_type={reg_type} />
          </div>
          <div className="w-[100%] overflow-visible h-[40px] z-10">
            <DatasetDrop setDataset={setDataset} dataSet={dataSet} />
          </div>
          <div className="flex flex-col gap-1 justify-start w-[100%] ">
            <label htmlFor="degree" className="text-white">
              Enter degree for Regression
            </label>
            <input
              id="degree"
              type="Number"
              className="rounded text-lg p-1 px-3"
              placeholder={degree}
              onChange={handleChange}
              min={1}
            />
          </div>
          
          <div className="flex flex-col gap-1 justify-start w-[100%] ">
            <label htmlFor="degree" className="text-white">
              Accuracy of the model
            </label>
            <input
              id="degree"
              type="text"
              className="rounded text-lg p-1 px-3"
              disabled
              value={(accuracy * 100).toLocaleString() + " %"}
            />
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => get_data_degree(false)}
            className=" my-4 mx-2 bg-[#FFA800] justify-center cursor-pointer text-lg font-medium flex hover:bg-yellow-300 rounded-lg px-5 h-[40px] text-center items-center"
          >
            Run
          </div>
          <div
            onClick={Refresh}
            id="refresh"
            className=" my-4 mx-2 bg-[#FFA800] justify-center cursor-pointer text-lg font-medium flex hover:bg-yellow-300 rounded-lg px-5 h-[40px] text-center items-center"
          >
            Refresh
          </div>
        </div>
      </div>
      <div>
        {reg_image && (
          <img
            className="h-[100%] w-[80%] rounded-lg shadow-lg"
            src={`data:image/png;base64,${reg_image}`}
            alt="Regression Image"
          />
        )}
      </div>
    </div>
  );
}

export default Regression;
