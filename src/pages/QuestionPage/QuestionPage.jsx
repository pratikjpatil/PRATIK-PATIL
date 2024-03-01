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
    <section className="main-section">
    <div className='back-button'>
      <img src={backArrow} alt="back" />
      Back to Questions
    </div>

    <div className='content-container'>
      <QuestionCard/>

      <div className='answers'>
        <div className='answers-head'>
          <span>Answers (23)</span>
          <div>
            Sort By: 
            <select name="sort" className='sort-dropdown'>
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