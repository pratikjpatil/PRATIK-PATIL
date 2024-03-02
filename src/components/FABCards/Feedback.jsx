import { useState } from "react";
import "./fabCards.css";

function Feedback() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearSelectedImage = () => {
    setSelectedImage(null);
  };
  const isLoggedIn = true;
  return (
    <div className="card-container">
      <div className="card-title">
        <h4>
          Let us know your <span>Feedback</span> about us!
        </h4>
      </div>
      <form className="action-card-form" action="">
        <div className="action-card-query-box">
          <textarea
            className="action-card-input query-input"
            style={{ border: "none" }}
            name="query"
            placeholder="Write here..."
            required
            rows="4"
          ></textarea>

          <div className="file-attach">
            <label htmlFor="file-input" className="file-attach-button">
              <svg
                style={{ marginRight: "5px" }}
                width="11"
                height="22"
                viewBox="0 0 11 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.49964 5.74768V16.3277C9.49964 18.4177 7.96964 20.2777 5.88964 20.4777C5.33399 20.5332 4.77287 20.4716 4.24252 20.2967C3.71217 20.1219 3.22439 19.8378 2.81068 19.4627C2.39697 19.0876 2.06653 18.63 1.84071 18.1192C1.61488 17.6085 1.49869 17.0561 1.49964 16.4977V4.13768C1.49964 2.82768 2.43964 1.63768 3.73964 1.50768C4.08828 1.47122 4.44068 1.50849 4.77398 1.61706C5.10727 1.72563 5.41401 1.90308 5.67428 2.13789C5.93455 2.3727 6.14253 2.65962 6.28473 2.98002C6.42692 3.30042 6.50014 3.64714 6.49964 3.99768V14.4977C6.49964 15.0477 6.04964 15.4977 5.49964 15.4977C4.94964 15.4977 4.49964 15.0477 4.49964 14.4977V5.74768C4.49964 5.33768 4.15964 4.99768 3.74964 4.99768C3.33964 4.99768 2.99964 5.33768 2.99964 5.74768V14.3577C2.99964 15.6677 3.93964 16.8577 5.23964 16.9877C5.58828 17.0241 5.94068 16.9869 6.27398 16.8783C6.60727 16.7697 6.91402 16.5923 7.17428 16.3575C7.43455 16.1227 7.64254 15.8357 7.78473 15.5153C7.92692 15.1949 8.00014 14.8482 7.99964 14.4977V4.16768C7.99964 2.07768 6.46964 0.217678 4.38964 0.0176775C3.83414 -0.0370524 3.27334 0.0251462 2.74333 0.200269C2.21333 0.375391 1.72586 0.659557 1.31233 1.03447C0.898791 1.40939 0.568344 1.86674 0.34226 2.3771C0.116176 2.88745 -0.000534863 3.43949 -0.000358382 3.99768V16.2677C-0.000358382 19.1377 2.09964 21.7077 4.95964 21.9777C8.24964 22.2777 10.9996 19.7177 10.9996 16.4977V5.74768C10.9996 5.33768 10.6596 4.99768 10.2496 4.99768C9.83964 4.99768 9.49964 5.33768 9.49964 5.74768Z"
                  fill="#333333"
                />
              </svg>
              Attach
              <input
                type="file"
                id="file-input"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </label>
            {selectedImage && (
              <div className="selected-img-container">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="selected-img"
                />
                  <svg
                  className="img-close-button"
                  onClick={clearSelectedImage}
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66675 1.66675L8.33341 8.33341M1.66675 8.33341L8.33341 1.66675"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                
              </div>
            )}
          </div>
        </div>
        {isLoggedIn ? (
          <div style={{ display: "flex" }}>
            <input
              style={{
                width: "20px",
                height: "20px",
                marginRight: "10px",
                borderRadius: "4px",
                marginTop: "0px",
              }}
              type="checkbox"
              name="check"
              id="check"
              placeholder="Enter your Email"
              required
            />
            <label className="action-card-input-label" htmlFor="check">
              Send feedback anonymously
            </label>
          </div>
        ) : (
          <span>
            <label className="action-card-input-label" htmlFor="email">
              Enter your email to receive an update
              <span className="required-field">*</span>
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
