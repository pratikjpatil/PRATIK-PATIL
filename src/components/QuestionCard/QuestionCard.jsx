import "./questionCard.css";
import startupImg from "../../assets/startup.png";
import views from "../../assets/views.png";
import info from "../../assets/info.png";

function QuestionCard() {
  return (
    <div className="question-card">
      <div className="question_card-question-tags">
        <div className="question_card-question-tags-text">
          <span>Design</span>
          <span>Technology</span>
        </div>

        <div className="question_card-question-tags-img">
          <img src={startupImg} alt="startup-img" />
          <span>Startup</span>
        </div>
      </div>

      <p className="question_card-question">
        A travel startup wants Amazon to pre-install their personal travel agent
        bot on existing Amazon Echos. What is the value of the partnership to
        the travel startup?{" "}
      </p>

      <p className="question_card-question-description">
        Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
        viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec
        sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus
        se?
      </p>
      <div className="question_card-footer">
        <span>
          <img src={views} alt="views" />
          100 Views
        </span>
        <span>
          <img src={info} alt="info" />
          How should you word your answer?
        </span>
      </div>
    </div>
  );
}

export default QuestionCard;
