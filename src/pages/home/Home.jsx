import React, { useState } from "react";
import Appointment from "../../components/appointment/Appointment";
import Article from "../../components/article/Article";
import BibleStudy from "../../components/biblestudy/BibleStudy";
import DataSocket from "../../components/datasocket/DataSocket";
import HomeAbout from "../../components/homeabout/HomeAbout";
import HomeHero from "../../components/homehero/HomeHero";
import HomeLibrary from "../../components/homelibrary/HomeLibrary";
import Program from "../../components/program/Program";
import ServicePrograms from "../../components/serviceprograms/ServicePrograms";
import Testimonials from "../../components/testimonials/Testimonials";
import Updates from "../../components/updates/Updates";
import { v4 as uuidv4 } from "uuid";
import { axiosInstance } from "../../config";
import "./home.css";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showWeeklyModal, setShowWeeklyModal] = useState(false);
  const [topicModal, setTopicModal] = useState(false);
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [success, setSuccess] = useState(false);
  const [successText, setSuccessText] = useState("");

  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubmitTopic = async () => {
    try {
      if (topic === "" || email === "")
        alert("Please enter a topic and email.");
      const { data } = await axiosInstance.post("api/topic/", {
        email,
        topic,
      });
      setSuccessText(data);
      setSuccess(true);
      setEmail("");
      setTopic("");
    } catch (error) {
      setError(true);
      setErrorText(error.response.data);
    }
  };

  setTimeout(() => {
    setSuccess(false);
  }, 5000);

  setTimeout(() => {
    setError(false);
  }, 5000);

  return (
    <div className="home">
      <div
        onClick={() => setTopicModal(true)}
        className="topic-pop__up flex items-center justify-center px-4 cursor-pointer"
      >
        <div className="container flex items-center justify-center">
          <p className="text-center underline">
            Click here to let us know the topic you'd like to be preached next
            semester <i class="fa-solid fa-face-smile text-yellow-500"></i>
          </p>
        </div>
      </div>
      {/*Modal  */}
      {topicModal && (
        <div className="topic-modal flex items-center justify-center">
          <div className="modal_field bg-white rounded-md p-4">
            <i
              onClick={() => setTopicModal(false)}
              className="fa-solid fa-circle-xmark flex justify-end cursor-pointer text-red-500"
            ></i>
            <p className="font-semibold text-gray-600 mb-2">
              What is in your heart?
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="user-email border-gray-200 p-2 rounded-md mb-4"
              type="email"
              placeholder="Enter your email"
            />
            <textarea
              value={topic}
              className="topic__textarea border-gray-200 p-2 rounded-md"
              placeholder="Please type ..."
              onChange={(e) => setTopic(e.target.value)}
            ></textarea>
            <button
              onClick={() => handleSubmitTopic()}
              className="bg-amber-500 py-2 px-4 rounded-md text-white hover:bg-amber-600"
            >
              Submit <i class="fa-solid fa-paper-plane"></i>
            </button>
            {success && (
              <div className="bg-lime-500 mt-2 py-2 px-3 rounded-md ">
                <p className="text-center text-white">{successText}</p>
              </div>
            )}

            {error && (
              <div className="bg-red-500 mt-2 py-2 px-3 rounded-md ">
                <p className="text-center text-white">{errorText}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <HomeHero />
      <Updates />
      <HomeAbout />
      <DataSocket />
      <Testimonials />
      <Program />
      <HomeLibrary />
      <BibleStudy />
      <Article />
      <Appointment />

      <ServicePrograms
        setShowModal={setShowModal}
        setShowWeeklyModal={setShowWeeklyModal}
      />
      {showModal && (
        <div className="modal flex items-center justify-center">
          <div className="sunday bg-white rounded-md">
            <div className="flex title-holder items-center justify-between p-3">
              <p className="font-bold text-lg text-green-700">
                Our sunday program
              </p>
              <p
                className="text-red-700 cursor-pointer text-2xl"
                onClick={() => setShowModal(false)}
              >
                <i class="fa-solid fa-circle-xmark"></i>
              </p>
            </div>
            <div className="flex flex-col p-3">
              <p className="mb-2 font-medium text-slate-600">
                {" "}
                <i class="fas fa-check-circle"></i> Intercessory
              </p>
              <p className="mb-2 font-medium text-slate-600">
                {" "}
                <i class="fas fa-check-circle"></i> Praise & Worship
              </p>
              <p className="mb-2 font-medium text-slate-600">
                {" "}
                <i class="fas fa-check-circle"></i> Bible Class
              </p>
              <p className="mb-2 font-medium text-slate-600">
                {" "}
                <i class="fas fa-check-circle"></i> Choir & Offering
              </p>
              <p className="mb-2 font-medium text-slate-600">
                {" "}
                <i class="fas fa-check-circle"></i> Preachings
              </p>
            </div>
            <div className="modal-footer bg-green-700 p-3">
              <p className=" font-bold  text-center text-white">
                From 8:30am - 12:00 noon Every Sunday
              </p>
            </div>
          </div>
        </div>
      )}
      {showWeeklyModal && (
        <div className="modal flex items-center justify-center">
          <div className="sunday bg-white rounded-md">
            <div className="flex title-holder items-center justify-between p-3">
              <p className="font-bold text-lg text-green-700">
                Our Weekly program
              </p>
              <p
                className="text-red-700 cursor-pointer text-2xl"
                onClick={() => setShowWeeklyModal(false)}
              >
                <i class="fa-solid fa-circle-xmark"></i>
              </p>
            </div>
            <div className="flex flex-col p-3">
              <p className="mb-2 text-slate-600">
                <strong>
                  {" "}
                  <i class="fas fa-check-circle"></i> Monday:
                </strong>{" "}
                Prayer & Fasting for leaders(6:00AM - 6:00PM) | Media training
                and Technicians practice(3:00PM - 5:00PM)
              </p>
              <p className="mb-2 text-slate-600">
                <strong>
                  {" "}
                  <i class="fas fa-check-circle"></i> Tuesday:
                </strong>{" "}
                Praise & Worship & Technical practices(5:00PM - 7:00PM)
              </p>
              <p className="mb-2 text-slate-600">
                <strong>
                  {" "}
                  <i class="fas fa-check-circle"></i> Wednesday:
                </strong>{" "}
                Prayer & Fasting for the church(6:00AM - 6:00PM) | Wednesday
                service(5:00PM - 7:00PM)
              </p>
              <p className="mb-2 text-slate-600">
                <strong>
                  {" "}
                  <i class="fas fa-check-circle"></i> Thursday:
                </strong>{" "}
                Brother's keeper & God's girl fellowship / Yearly
                fellowship(5:00PM - 7:00PM)
              </p>
              <p className="mb-2 text-slate-600">
                <strong>
                  {" "}
                  <i class="fas fa-check-circle"></i> Friday:
                </strong>{" "}
                Bible study fellowship(5:00PM - 7:00PM
              </p>
              <p className="mb-2 text-slate-600">
                <strong>
                  {" "}
                  <i class="fas fa-check-circle"></i> Saturday:
                </strong>{" "}
                Ushering| Technical set-up| Praise & Worship| Best-P classes |
                Evening prayers
              </p>
              <p className="mb-2 text-slate-600">
                <strong>
                  {" "}
                  <i class="fas fa-check-circle"></i> Sunday:
                </strong>{" "}
                Powerful sunday service(8:30AM - 12:00PM)
              </p>
            </div>
            <div className="modal-footer bg-green-700 p-3">
              <p className=" font-bold  text-center text-white">
                From Monday - Sunday
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
