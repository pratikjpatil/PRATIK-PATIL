import "./fabCards.css";

function ContactUs() {
  const isLoggedIn = true;
  return (
    <div className="card-container">
      <div className="card-title">
        <h4>
          Get in <span>Contact with us</span> for your queries!
        </h4>
      </div>
      <form className="action-card-form" action="">
        <span>
          <label className="action-card-input-label" htmlFor="name">
            Your Name<span className="required-field">*</span>
          </label>
          <input
            className="action-card-input"
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
        </span>
        {!isLoggedIn && (
          <>
            <span>
              <label className="action-card-input-label" htmlFor="email">
                Your Email<span className="required-field">*</span>
              </label>
              <input
                className="action-card-input"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
            </span>
            <span>
              <label className="action-card-input-label" htmlFor="mobileNumber">
                Your Mobile number
              </label>
              <input
                className="action-card-input"
                type="tel"
                name="mobileNumber"
                placeholder="Enter your number"
              />
            </span>
          </>
        )}

        <span>
          <label className="action-card-input-label" htmlFor="query">
            What would you like to ask?{" "}
            <span className="required-field">*</span>
          </label>
          <textarea
            className="action-card-input query-input"
            name="query"
            placeholder="Write here..."
            required
            rows="4"
          ></textarea>
        </span>
        <button className="action-card-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
