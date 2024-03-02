import "./fabCards.css";

function Feedback() {
  const isLoggedIn = false;
  return (
    <div className="card-container">
      <div className="card-title">
        <h4>
        Let us know your <span>Feedback</span> about us!
        </h4>
      </div>
      <form className="action-card-form" action="">
      <span>
          <textarea
            className="action-card-input query-input"
            name="query"
            placeholder="Write here..."
            required
            rows="4"
          ></textarea>
        </span>
        {!isLoggedIn && (
            <span>
              <label className="action-card-input-label" htmlFor="email">
              Enter your email to receive an update<span className="required-field">*</span>
              </label>
              <input
                className="action-card-input"
                style={{ backgroundColor: "white" }}
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
            </span>
        )}

        
        <button className="action-card-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Feedback;
