import QuestionPage from './pages/QuestionPage/QuestionPage'
import MobileQuestionsPage from './pages/MobileQuestionsPage/MobileQuestionsPage'

function App() {

  return (
    <>
    {window.innerWidth >= 768 ? <QuestionPage/> : <MobileQuestionsPage/>}
    </>
  )
}

export default App
