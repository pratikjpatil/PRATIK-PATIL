import './questionPage.css'
import Navbar from "../../components/Navbar/Navbar"
import QuestionCard from "../../components/QuestionCard/QuestionCard"
import FAB from '../../components/FAB/FAB'
import AnswerCard from '../../components/AnswerCard/AnswerCard'
import backArrow from '../../assets/back-arrow.png'
function QuestionPage() {
  return (
    <div>
    <Navbar/>
    <section className="questionspage-main-section">
    <div className='questionspage-back-button'>
      <img src={backArrow} alt="back" />
      Back to Questions
    </div>

    <div className='questionspage-content-container'>
      <QuestionCard/>

      <div className='questionspage-answers'>
        <div className='questionspage-answers-head'>
          <span>Answers (23)</span>
          <div>
            Sort By: 
            <select name="sort" className='questionspage-sort-dropdown'>
              <option value="Popular">Popular</option>
            </select>

          </div>
        </div>
        <AnswerCard/>
      </div>
    
    </div>
    
    </section>
    <FAB/>
    </div>
    
  )
}

export default QuestionPage