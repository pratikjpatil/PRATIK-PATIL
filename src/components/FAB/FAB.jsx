import { useState } from "react";
import "./fab.css";
import FABICON from "../../assets/FAB.png";
import givesuggestion from "../../assets/givesuggestion.png";
import sharefeedback from "../../assets/sharefeedback.png";
import reportissue from "../../assets/reportissue.png";
import contactus from "../../assets/contactus.png";

function FAB() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="floating-action-button">
      <span>
        <button onClick={()=>setOpen((prev)=>!prev)}>
          <img src={FABICON} alt="fab" />
        </button>
      </span>
      {isOpen && (
        <>
          <span>
            <span>Contact Us</span>
            <button>
              <img src={contactus} alt="" />
            </button>
          </span>

          <span>
            <span>Give Suggestion</span>
            <button>
              <img src={givesuggestion} alt="" />
            </button>
          </span>

          <span>
            <span>Share Feedback</span>
            <button>
              <img src={sharefeedback} alt="" />
            </button>
          </span>

          <span>
            <span>Report an issue</span>
            <button>
              <img src={reportissue} alt="" />
            </button>
          </span>
        </>
      )}
    </div>
  );
}

export default FAB;
