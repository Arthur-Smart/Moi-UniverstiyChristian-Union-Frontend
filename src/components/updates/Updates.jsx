import React, { useState, useEffect } from "react";
import Tab from "../tab/Tab";
import "./updates.css";
import { axiosInstance } from "../../config";

function Updates() {
  const [service, setService] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const data = await axiosInstance.get("api/service");
      setService(data.data);
    };
    getServices();
  }, []);

  const wednesdayService = service.filter((d) => d?.day.includes("wednesday"));
  const sundayService = service.filter((d) => d?.day.includes("sunday"));
  return (
    <div className="updates flex flex-col items-center justify-center py-8">
      <p
        data-aos="fade-up"
        data-aos-duration="3000"
        className="text-center text-3xl font-bold text-gray-600 px-4"
      >
        Our weekly updates
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="3000"
        className="text-lg text-center px-4"
      >
        Our weeky sermons updates for every Wednesday and Sundays. We keep you
        notified
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Tab />
      </div>
      <div className="container updates-wrapper mt-10 flex items-center justify-between">
        <div className="updates-left flex flex-col">
          <p className="text-center my-2 font-medium text-lg text-green-700">
            Wednesday service
          </p>
          <div className="flex left-data">
            <div className="img-container flex items-center justify-center rounded-md">
              {wednesdayService[0]?.image ? (
                <img
                  src={wednesdayService[0]?.image}
                  alt=""
                />
              ) : (
                <img
                  style={{ width: 50, height: 50, alignSelf: "center" }}
                  src={require("../../assets/up-loader.gif")}
                  alt=""
                />
              )}
            </div>
            <div className="updates-data ml-3">
              <div className="text-container rounded-md py-3 px-5 text-white bg-green-700">
                <p>
                  <strong>Topic:</strong>
                  {wednesdayService[0]?.topic}
                </p>
              </div>
              <div className="text-container rounded-md py-3 px-5 text-white bg-green-700">
                <p>
                  <strong>Speaker:</strong>
                  {wednesdayService[0]?.speaker}
                </p>
              </div>
              <div className="text-container rounded-md py-3 px-5 text-white bg-green-700">
                <p>
                  <strong>Venue::</strong>
                  {wednesdayService[0]?.venue}
                </p>
              </div>
              <div className="text-container rounded-md py-3 px-5 text-white bg-green-700">
                <p>
                  <strong>Date:</strong>
                  {wednesdayService[0]?.date}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="updates-right flex flex-col">
          <p className="text-center my-2 font-medium text-lg text-green-700">
            Sunday service
          </p>
          <div className="flex left-data">
            <div className="img-container flex items-center justify-center rounded-md">
              {sundayService[0]?.image ? (
                <img
                  src={sundayService[0]?.image}
                  alt=""
                />
              ) : (
                <img
                  style={{ width: 50, height: 50, alignSelf: "center" }}
                  src={require("../../assets/up-loader.gif")}
                  alt=""
                />
              )}
            </div>
            <div className="updates-data ml-3">
              <div className="text-container rounded-md py-3 px-5 text-white bg-green-700">
                <p>
                  <strong>Topic:</strong>
                  {sundayService[0]?.topic}
                </p>
              </div>
              <div className="text-container rounded-md py-3 px-5 text-white bg-green-700">
                <p>
                  <strong>Speaker:</strong>
                  {sundayService[0]?.speaker}
                </p>
              </div>
              <div className="text-container rounded-md py-3 px-5 text-white bg-green-700">
                <p>
                  <strong>Venue:</strong>
                  {sundayService[0]?.venue}
                </p>
              </div>
              <div className="text-container rounded-md py-3 px-5 text-white bg-green-700">
                <p>
                  <strong>Date:</strong>
                  {sundayService[0]?.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;
