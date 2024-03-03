import { useState, useEffect } from "react";
import "./fabCards.css";

function ContactUs({ data, setData }) {
  const [isdataValid, setIsdataValid] = useState(true);

  const isLoggedIn = false;

  useEffect(()=>{
    const allValuesNotEmpty = Object.values(data).every((value) => value !== '');
    setIsdataValid(allValuesNotEmpty);
  },[data])

  const handledataChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };


  return (
    <div className="fab_cards-card-container">
      <div className="fab_cards-card-title">
        <h4>
          Get in <span>Contact with us</span> for your queries!
        </h4>
      </div>
      <form className="fab_cards-form" action="">
        <span>
          <label className="fab_cards-input-label" htmlFor="name">
            Your Name<span className="fab_cards-required-field">*</span>
          </label>
          <input
            className="fab_cards-input"
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={data.name}
            onChange={handledataChange}
            required
          />
        </span>
        {!isLoggedIn && (
          <>
            <span>
              <label className="fab_cards-input-label" htmlFor="email">
                Your Email<span className="fab_cards-required-field">*</span>
              </label>
              <input
                className="fab_cards-input"
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={data.email}
                onChange={handledataChange}
                required
              />
            </span>
            <span>
              <label className="fab_cards-input-label" htmlFor="mobileNumber">
                Your Mobile number
              </label>
              <input
                className="fab_cards-input"
                type="tel"
                name="mobileNumber"
                placeholder="Enter your number"
                value={data.mobileNumber}
                onChange={handledataChange}
              />
            </span>
          </>
        )}

        <span>
          <label className="fab_cards-input-label" htmlFor="query">
            What would you like to ask?{" "}
            <span className="fab_cards-required-field">*</span>
          </label>
          <textarea
            className="fab_cards-input fab_cards-query-input"
            name="query"
            placeholder="Write here..."
            required
            rows="4"
            value={data.query}
            onChange={handledataChange}
          ></textarea>
        </span>
        <button
          className={`fab_cards-submit-button ${isdataValid ? 'submittable' : ''}`}
          type="submit"
          disabled={!isdataValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
