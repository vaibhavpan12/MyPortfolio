import React from "react";
import images from "../images";
import Navbar from "../../components/Navbar";

function Certificates() {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] px-10 py-10 gap-10 h-[100%] flex lg:flex-row flex-col justify-center items-center">
        <div className="lg:w-[50%] w-[100%] flex justify-center items-center">
          <img
            className="lg:w-[50%] w-[80%]"
            src={images.tatacertificate}
            alt="Tata NQT ion Certificate"
          />
        </div>

        <div className="lg:w-[50%] w-[100%] flex justify-center items-center">
          <img
            className="lg:w-[50%] w-[80%]"
            src={images.BCAcertificate}
            alt="BCA Certificate"
          />
        </div>
      </div>
    </div>
  );
}
export default Certificates;
