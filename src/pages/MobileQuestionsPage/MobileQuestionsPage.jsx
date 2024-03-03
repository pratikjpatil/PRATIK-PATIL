import React from "react";
import "./mobileQuestionsPage.css";
import Navbar from "../../components/Navbar/Navbar";
import startupImg from "../../assets/startup.png";
import views from "../../assets/views.png";
import FAB from '../../components/FAB/FAB'

function MobileQuestionsPage() {
  return (
    <>
      <Navbar />
      <section className="mobile_questions-main-section">
        <h3 className="mobile_questions-title">Practice Interview Questions</h3>
        <div className="mobile_questions-subtitle-filters">
          <span className="mobile_questions-subtitle">
            Embark on an Exploration: 800 Questions Await!
          </span>
          <span className="mobile_questions-filters-btn">
            <svg
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Filter</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="Filter">
                    <rect
                      id="Rectangle"
                      fillRule="nonzero"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <line
                      x1="4"
                      y1="5"
                      x2="16"
                      y2="5"
                      id="Path"
                      stroke="#0C0310"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <line
                      x1="4"
                      y1="12"
                      x2="10"
                      y2="12"
                      id="Path"
                      stroke="#0C0310"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <line
                      x1="14"
                      y1="12"
                      x2="20"
                      y2="12"
                      id="Path"
                      stroke="#0C0310"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <line
                      x1="8"
                      y1="19"
                      x2="20"
                      y2="19"
                      id="Path"
                      stroke="#0C0310"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <circle
                      id="Oval"
                      stroke="#0C0310"
                      strokeWidth="2"
                      strokeLinecap="round"
                      cx="18"
                      cy="5"
                      r="2"
                    ></circle>
                    <circle
                      id="Oval"
                      stroke="#0C0310"
                      strokeWidth="2"
                      strokeLinecap="round"
                      cx="12"
                      cy="12"
                      r="2"
                    ></circle>
                    <circle
                      id="Oval"
                      stroke="#0C0310"
                      strokeWidth="2"
                      strokeLinecap="round"
                      cx="6"
                      cy="19"
                      r="2"
                    ></circle>
                  </g>
                </g>
              </g>
            </svg>
            FILTERS
          </span>
        </div>

        <div className="mobile_questions-filters-section">
          <select name="filter" id="">
            <option value="popular">Popular</option>
          </select>
          <select name="complexity" id="">
            <option value="complexity">Complexity</option>
          </select>
          <select name="industryType" id="">
            <option value="industryType">Industry Type</option>
          </select>
          <select name="industry" id="">
            <option value="industry">Industry</option>
          </select>
          <select name="companyType" id="">
            <option value="companyType">Company Type</option>
          </select>
        </div>

        <div className="mobile_questions-question-card">
          <div className="mobile_questions-questiondate-imgtag">
            <span>Posted on 28 Jun 2023</span>
            <span className="mobile_questions-imgtag">
              <img src={startupImg} alt="startup-img" />
              <span>Startup</span>
            </span>
          </div>
          <div className="mobile_questions-question">
            A travel startup wants Amazon to pre- install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup? A travel startup wants Amazon to
            pre-install their personal travel agent bot on existing Amazon
            Echos. What is the value of the partnership to the travel startup?
          </div>
          <div className="mobile_questions-question-tags">
            <div className="mobile_questions-question-tags-text">
              <span>Design</span>
              <span>UX</span>
            </div>

            <div className="mobile_questions-question-complexity">Easy</div>
          </div>
          <div className="mobile_questions-counts">
            <span className="mobile_questions-answerscount">23 Answers</span>
            <span className="mobile_questions-views"><img src={views} alt="" />100 Views</span>
          </div>
        </div>

        <div className="mobile_questions-question-card">
          <div className="mobile_questions-questiondate-imgtag">
            <span>Posted on 28 Jun 2023</span>
            <span className="mobile_questions-imgtag">
              <img src={startupImg} alt="startup-img" />
              <span>Startup</span>
            </span>
          </div>
          <div className="mobile_questions-question">
            A travel startup wants Amazon to pre- install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup? A travel startup wants Amazon to
            pre-install their personal travel agent bot on existing Amazon
            Echos. What is the value of the partnership to the travel startup?
          </div>
          <div className="mobile_questions-question-tags">
            <div className="mobile_questions-question-tags-text">
              <span>Design</span>
              <span>UX</span>
            </div>

            <div className="mobile_questions-question-complexity">Easy</div>
          </div>
          <div className="mobile_questions-counts">
            <span className="mobile_questions-answerscount">23 Answers</span>
            <span className="mobile_questions-views"><img src={views} alt="" />100 Views</span>
          </div>
        </div>
      </section>
      {/* have made the options configurable pass option name and false in props */}
      <FAB/>
    </>
  );
}

export default MobileQuestionsPage;
