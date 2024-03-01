import './answerCard.css'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import profile from '../../assets/profile.png'
import edit from '../../assets/edit.png'

function AnswerCard() {

  return (
    <div className="answer-card">
      

      <div className="answer-header">
        <div className="user-profile">
          <img src={profile} alt="profile" />
          <div>
            <span>
                <span className='user-name'>Neha Bhat</span>
               (You)  
            </span>
            
            <span>Jun 27, 2023</span>
           </div>

        </div>

        <div className="edit-button">
          <img src={edit} alt="edit" />
          <span>Edit</span>
        </div>
      </div>



      <p className="answer-content">
      Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet mi.... 
      <span>Show more</span>
      </p>

      <div className="answer-card-footer">
        <span>
          <img src={like} alt="like" />
          Like
        </span>
        <span>
          <img src={comment} alt="comment" />
          <input type="text" name="comment" placeholder='Add a comment' className='comment-input'/>
        </span>
        <button>Post</button>
      </div>
    </div>
  );
}


export default AnswerCard