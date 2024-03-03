import { useState, useEffect } from "react";
import "./fab.css";
import givesuggestion from "../../assets/givesuggestion.png";
import sharefeedback from "../../assets/sharefeedback.png";
import reportissue from "../../assets/reportissue.png";
import contactus from "../../assets/contactus.png";
import ContactUs from "../FABCards/ContactUs";
import Feedback from "../FABCards/Feedback";
import ReportIssue from "../FABCards/ReportIssue";
import Suggestions from "../FABCards/Suggestions";

const FAB_INITIAL_CONTACT_US_DATA = {
  name: "",
  email: "",
  mobileNumber: "",
  query: "",
};

const FAB_INITIAL_FEEDBACK_DATA = {
  query: "",
  checkForAnonymous: false,
  email: "",
};

const FAB_INITIAL_REPORT_ISSUE_DATA = {
  selectSection: "interview-questions",
  query: "",
  email: "",
};

const FAB_INITIAL_SUGGESTIONS_DATA = {
  selectSection: "",
  query: "",
  email: "",
};

function FAB({
  contact = true,
  suggestion = true,
  feedback = true,
  issue = true,
}) {
  const [isOpen, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [thanksMessage, setThanksMessage] = useState("");
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const [overlay, setOverlay] = useState(false)

  const [contactUsData, setContactUsData] = useState(
    FAB_INITIAL_CONTACT_US_DATA
  );
  const [feedbackData, setFeedbackData] = useState(FAB_INITIAL_FEEDBACK_DATA);
  const [reportIssueData, setReportIssueData] = useState(
    FAB_INITIAL_REPORT_ISSUE_DATA
  );
  const [suggestionsData, setSuggestionsData] = useState(
    FAB_INITIAL_SUGGESTIONS_DATA
  );

  useEffect(() => {
    if (showThanksMessage) {
      const timeout = setTimeout(() => {
        setShowThanksMessage(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showThanksMessage]);

  useEffect(()=>{
    setOverlay(window.innerWidth < 768 && (isOpen || showThanksMessage));
  },[isOpen, showThanksMessage])

  const openCard = (cardName) => {
    setActiveCard(cardName);
  };

  const clearAllData = ()=>{
    setContactUsData(FAB_INITIAL_CONTACT_US_DATA);
    setFeedbackData(FAB_INITIAL_FEEDBACK_DATA);
    setReportIssueData(FAB_INITIAL_REPORT_ISSUE_DATA);
    setSuggestionsData(FAB_INITIAL_SUGGESTIONS_DATA);
  }

  const toggleOpen = () => {
    isOpen && setActiveCard(null);
    setOpen((prev) => !prev);
    if (!isOpen) {
      clearAllData();
    }
  };

  
  const handleSubmit = (e, component) => {
    e.preventDefault();
    setOpen(false);
    setActiveCard(null);
    clearAllData();
    if (component === "contact") {
      setThanksMessage(`We will get back to you as soon as possible!`);
    } else if (component === "suggestion") {
      setThanksMessage(`Thanks for your valuable suggestion!`);
    } else if (component === "feedback") {
      setThanksMessage(`Thanks for your valuable feedback!`);
    } else if (component === "issue") {
      setThanksMessage(`Thanks for bringing the issue to our
        attention.We'll review it shortly and provide an update soon!`);
    }
    setShowThanksMessage(true);
  };
  return (
    <div className={overlay ? "FAB-overlay" : ""}>
      <div className="FAB-container">
        <div
          className={`FAB-floating-action-button ${
            activeCard ? "FAB-row" : ""
          }`}
        >
          <span>
            <button
              className="FAB-action-button"
              onClick={toggleOpen}
            >
              {!isOpen ? (
                <svg
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  className="FAB-main-fab-button"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2524_6396)">
                    <path
                      d="M19.7452 0H2.32296C1.04002 0 0 1.04002 0 2.32296V27.8755C0 29.1584 1.04002 30.1984 2.32296 30.1984H19.7452C21.0281 30.1984 22.0682 29.1584 22.0682 27.8755V2.32296C22.0682 1.04002 21.0281 0 19.7452 0Z"
                      fill="#0F0F0F"
                    />
                    <path
                      d="M3.48444 6.96924L17.4222 6.96924"
                      stroke="#F8F8F8"
                      strokeWidth="1.74222"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.48444 11.6147L17.4222 11.6147"
                      stroke="#F8F8F8"
                      strokeWidth="1.74222"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.48444 16.2607L17.4222 16.2607"
                      stroke="#F8F8F8"
                      strokeWidth="1.74222"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.48444 20.9067H10.4533"
                      stroke="#F8F8F8"
                      strokeWidth="1.74222"
                      strokeLinecap="round"
                    />
                    <path
                      d="M25.2995 13.6118L16.5793 28.7155L16.9482 33.0538C17.0167 33.8594 17.8669 34.3503 18.5989 34.0068L22.5404 32.1571L31.2606 17.0535C31.902 15.9424 31.5214 14.5217 30.4103 13.8803L28.4727 12.7616C27.3616 12.1201 25.9409 12.5008 25.2995 13.6118Z"
                      fill="#0F0F0F"
                      stroke="#F8F8F8"
                      strokeWidth="1.16148"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2524_6396">
                      <rect width="32" height="34" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="FAB-main-fab-button"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.99976 2.00122L21.9998 22.0006M1.99976 22.0006L21.9998 2.00122"
                    stroke="#0F0F0F"
                    strokeWidth="3.99994"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </span>
          {isOpen && (
            <div
              className={`FAB-floating-button-options ${
                activeCard ? "FAB-row" : ""
              }`}
            >
              {contact && (
                <span onClick={() => openCard("contact")}>
                  <span
                    className={`FAB-button-label ${
                      !activeCard ? "FAB-visible" : ""
                    }`}
                  >
                    Contact Us
                  </span>
                  <button
                    className={`FAB-action-button ${
                      activeCard === "contact" ? "FAB-active" : ""
                    }`}
                  >
                    <img src={contactus} alt="" />
                  </button>
                </span>
              )}
              {suggestion && (
                <span onClick={() => openCard("suggestion")}>
                  <span
                    className={`FAB-button-label ${
                      !activeCard ? "FAB-visible" : ""
                    }`}
                  >
                    Give Suggestion
                  </span>
                  <button
                    className={`FAB-action-button ${
                      activeCard === "suggestion" ? "FAB-active" : ""
                    }`}
                  >
                    <img src={givesuggestion} alt="" />
                  </button>
                </span>
              )}

              {feedback && (
                <span onClick={() => openCard("feedback")}>
                  <span
                    className={`FAB-button-label ${
                      !activeCard ? "FAB-visible" : ""
                    }`}
                  >
                    Share Feedback
                  </span>
                  <button
                    className={`FAB-action-button ${
                      activeCard === "feedback" ? "FAB-active" : ""
                    }`}
                  >
                    <img src={sharefeedback} alt="" />
                  </button>
                </span>
              )}

              {issue && (
                <span onClick={() => openCard("issue")}>
                  <span
                    className={`FAB-button-label ${
                      !activeCard ? "FAB-visible" : ""
                    }`}
                  >
                    Report an issue
                  </span>
                  <button
                    className={`FAB-action-button ${
                      activeCard === "issue" ? "FAB-active" : ""
                    }`}
                  >
                    <img src={reportissue} alt="" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
        {activeCard && (
          <div className="FAB-active-card">
            {activeCard === "contact" && (
              <ContactUs
                data={contactUsData}
                setData={setContactUsData}
                handleSubmit={handleSubmit}
              />
            )}
            {activeCard === "suggestion" && (
              <Suggestions
                data={suggestionsData}
                setData={setSuggestionsData}
                handleSubmit={handleSubmit}
              />
            )}
            {activeCard === "feedback" && (
              <Feedback
                data={feedbackData}
                setData={setFeedbackData}
                handleSubmit={handleSubmit}
              />
            )}
            {activeCard === "issue" && (
              <ReportIssue
                data={reportIssueData}
                setData={setReportIssueData}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        )}

        {showThanksMessage && (
          <div className="FAB-thanks-note">
            <div className="FAB-thanks-note-text">{thanksMessage}</div>
            <div className="FAB-thanks-note-arrow-down"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAB;
